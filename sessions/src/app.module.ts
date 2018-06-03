import {MiddlewareConsumer, Module} from '@nestjs/common';
import {TrackingController} from './controller/tracking.controller';
import {SessionService} from './service/session.service';
import {mongoProvider} from "./provider/mongo.provider";
import {SessionBulkStream} from "./service/session-bulk.stream";
import {SessionWriteMongoStream} from "./service/session-write-mongo.stream";
import {TrackerMiddleware} from "./middleware/tracking.middleware";
import {ValidateSessionMiddleware} from './middleware/validate-session.middleware';
import {ConvertController} from './controller/convert.controller';

@Module({
    imports: [],
    controllers: [TrackingController, ConvertController],
    providers: [mongoProvider, SessionBulkStream, SessionWriteMongoStream, SessionService]
})

export class AppModule {
    configure(consumer: MiddlewareConsumer): void {
        // Apply tracker middleware
        consumer.apply([TrackerMiddleware, ValidateSessionMiddleware]).forRoutes(TrackingController);

    }
}
