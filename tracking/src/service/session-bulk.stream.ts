import {Injectable} from "@nestjs/common";

import {Transform} from 'stream';
import {clearInterval} from "timers";

@Injectable()
export class SessionBulkStream extends Transform {

    private chunks = [];
    private pushLeftoverInterval;
    private options = { maxChunkSize: 500, leftOverInterval: 1000 };

    constructor() {
        super({ objectMode: true });
    }

    _write(chunk, encoding, callback) {
        this.chunks.push(chunk);

        if (this.chunks.length >= this.options.maxChunkSize) {
            this.push(this.chunks.splice(0, this.options.maxChunkSize));
        }

        if ( ! this.pushLeftoverInterval) {
            this.resetLeftoverInterval();
        }

        callback();
    }

    resetLeftoverInterval() {
        const self = this;
        clearInterval(this.pushLeftoverInterval);
        this.pushLeftoverInterval = setInterval(() => {
            this.push(self.chunks.splice(0, self.options.maxChunkSize));
            if ( ! self.chunks.length)  {
                clearInterval(self.pushLeftoverInterval);
                this.pushLeftoverInterval = false;
            }
        }, self.options.leftOverInterval)
    }
}