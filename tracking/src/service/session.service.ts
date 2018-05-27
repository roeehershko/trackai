import {Component, Inject, Injectable} from "@nestjs/common";
import {RedisClient} from "redis";
import * as aguid from 'aguid';
import {TrackingBodyDto, TrackingQueryDto, TrackingSession} from "../types/session.types";
import {SessionBulkStream} from "./session-bulk.stream";
import {SessionWriteMongoStream} from "./session-write-mongo.stream";

@Injectable()
export class SessionService {

    constructor(
        private sessionBulkStream: SessionBulkStream,
        private sessionWriteMongoStream: SessionWriteMongoStream,
    ) {

        sessionBulkStream.pipe(sessionWriteMongoStream, {end: false});
    }

    public store(body: TrackingBodyDto, query: TrackingQueryDto, ref) {
        let custom_params = {};
        let usedParams = ['campaign', 'goal', 'source','guid', 'tag', 'lp', 'offer', 'account'];
        for (let idx in query) {
            if (usedParams.indexOf(idx) === -1) {
                custom_params[idx] = query[idx];
            }
        }

        let data: TrackingSession = {
            sid: aguid(body.ip),
            ip: body.ip,
            time: new Date(),
            campaign: query.campaign,
            offer: query.offer,
            lp: query.lp,
            goal: query.goal,
            source: query.source,
            ref: ref,
            tags: query.tag,
            custom_params: custom_params,
        };

        this.sessionBulkStream.write(data);
    }
}