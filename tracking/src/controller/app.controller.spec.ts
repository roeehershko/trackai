import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import {} from 'jest';
import {SessionService} from "../service/session.service";
import {mongoProvider} from "../provider/mongo.provider";
import {SessionBulkStream} from "../service/session-bulk.stream";
import {SessionWriteMongoStream} from "../service/session-write-mongo.stream";


describe('AppController', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [AppController],
            providers: [mongoProvider, SessionBulkStream, SessionWriteMongoStream, SessionService]
        }).compile();
    });

    describe('root', () => {
        it('should return "Queued"', () => {
            const appController = app.get<AppController>(AppController);
            expect(appController.root({ ua: '', ip: '127.0.0.1'}, {}, null)).toBe({
                status: 1,
                message: 'Queued'
            });
        });
    });
});
