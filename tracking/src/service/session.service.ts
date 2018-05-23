import {Component, Inject, Injectable} from "@nestjs/common";
import {RedisClient} from "redis";
import * as aguid from 'aguid';
import {TrackingBodyDto, TrackingQueryDto, TrackingSession} from "../types/session.types";

@Injectable()
export class SessionService {

    private redisClient: RedisClient;

    constructor(@Inject('RedisToken') redisClient: RedisClient) {
        this.redisClient = redisClient;
    }

    public create(body: TrackingBodyDto, query: TrackingQueryDto, ref) {
        let tracking = {};
        let usedParams = [ 'campaign', 'goal', 'source', 'e', 'g', 'c', 's', 'guid' ];
        for(let idx in query) {
            if (usedParams.indexOf(idx) === -1) {
                tracking[idx] = query[idx];
            }
        }

        let data: TrackingSession = {
            ip: body.ip,
            time: new Date(),
            campaign: query.campaign,
            goal: query.goal,
            source: query.source,
            ref: ref,
            tracking: tracking
        };

        this.redisClient.lpush('sessions', JSON.stringify(data));
    }
}