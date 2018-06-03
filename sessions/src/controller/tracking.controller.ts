import {Get, Controller, Body, Query, Response, Headers} from '@nestjs/common';
import {SessionService} from "../service/session.service";
import {TrackingBodyDto, TrackingQueryDto} from "../types/session.types";
import {MessagePattern} from '@nestjs/microservices';
import {from, Observable} from 'rxjs/index';

@Controller()
export class TrackingController {

    constructor(private readonly sessionService: SessionService) {}

    @Get('/')
    async root(@Body() data: TrackingBodyDto, @Query() query: TrackingQueryDto, @Headers('referer') ref) {

        this.sessionService.store(data, query, ref);
            return {
            status: 1,
            message: 'Queued'
        };
    }

    @MessagePattern('hello')
    async test() {
        console.log('test1')
    }
}