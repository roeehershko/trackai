import {Inject, Injectable} from "@nestjs/common";

import {Writable} from 'stream';
import {Collection, MongoClient} from "mongodb";

@Injectable()
export class SessionWriteMongoStream extends Writable {

    private sessionCollection: Collection;

    constructor(@Inject('MongoToken') mongoClient: MongoClient) {
        super({ objectMode: true });
        this.sessionCollection = mongoClient.db('sessions').collection('sessions');
    }

    _write(chunk, encoding, callback) {
        this.writeToMongo(chunk, () => {
            callback();
        });
    }

    writeToMongo(chunk, cb) {
        console.time('dbsave');
        this.sessionCollection.insertMany(chunk, (err) => {
           cb(err);
           console.timeEnd('dbsave')
        });
    }
}