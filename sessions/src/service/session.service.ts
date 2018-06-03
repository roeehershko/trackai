import {HttpException, HttpStatus, Inject, Injectable, NotFoundException} from '@nestjs/common';
import * as aguid from 'aguid';
import {TrackingBodyDto, TrackingQueryDto, TrackingSession} from '../types/session.types';
import {SessionBulkStream} from './session-bulk.stream';
import {SessionWriteMongoStream} from './session-write-mongo.stream';
import {Collection, MongoClient} from 'mongodb';

@Injectable()
export class SessionService {

    private sessionCollection: Collection;

    constructor(private sessionBulkStream: SessionBulkStream,
                private sessionWriteMongoStream: SessionWriteMongoStream,
                @Inject('MongoToken') mongoClient: MongoClient,) {
        this.sessionCollection = mongoClient.db('sessions').collection('sessions');
        sessionBulkStream.pipe(sessionWriteMongoStream, {end: false});
    }

    public store(body: TrackingBodyDto, query: TrackingQueryDto, ref) {
        let custom_params = {};
        let usedParams = ['campaign', 'source', 'guid', 'tag', 'lp', 'offer', 'account'];
        for (let idx in query) {
            if (usedParams.indexOf(idx) === -1) {
                custom_params[idx] = query[idx];
            }
        }

        let data: TrackingSession = {
            sid: aguid(body.ip),
            soid: aguid(body.ip + '@' + query.offer),
            ip: body.ip,
            time: new Date(),
            campaign: query.campaign,
            offer: query.offer,
            lp: query.lp,
            source: query.source,
            ref: ref,
            tags: query.tag,
            custom_params: custom_params,
        };

        this.sessionBulkStream.write(data);
    }

    public convert(goal: number, soid: string) {
        this.sessionCollection.aggregate([
            {
                $match: {
                    'soid':  soid
                }
            },
            {
                $group: {
                    _id: '$soid',
                    sid: {$first: '$sid'},
                    ref: {$first: '$ref'},
                    ip: {$last: '$ip'},
                    campaign: {$first: '$campaign'},
                    offer: {$first: '$offer'},
                    lp: {$first: '$lp'},
                    source: {$first: '$source'},
                    custom_params: {'$mergeObjects': '$custom_params'},
                }
            }
        ]).toArray((err, docs) => {
            console.log(docs);
        })
    }
}