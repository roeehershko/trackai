import {Module} from '@nestjs/common';
import {AppController} from './controller/app.controller';
import {SessionService} from './service/session.service';
import {RedisProvider} from "./provider/redis.provider";

@Module({
    imports: [],
    controllers: [AppController],
    providers: [RedisProvider, SessionService]
})

export class AppModule {

    constructor(sessionService: SessionService) {
        sessionService.startDumpLopp()
    }
}
