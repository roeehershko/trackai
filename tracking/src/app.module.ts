import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import {AppController} from './controller/app.controller';
import {SessionService} from './service/session.service';
import {mongoProvider} from "./provider/mongo.provider";
import {SessionBulkStream} from "./service/session-bulk.stream";
import {SessionWriteMongoStream} from "./service/session-write-mongo.stream";
import {TrackerMiddleware} from "./middleware/tracking.middleware";

@Module({
    imports: [],
    controllers: [AppController],
    providers: [mongoProvider, SessionBulkStream, SessionWriteMongoStream, SessionService]
})

export class AppModule {
    constructor(sessionService: SessionService) {
    }

    configure(consumer: MiddlewareConsumer): void {
        // Apply tracker middleware
        consumer.apply(TrackerMiddleware).forRoutes(AppController);
    }
}
