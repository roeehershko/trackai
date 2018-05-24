import {Get, Controller, Request, Body, Query, Post, Res, Response, Headers} from '@nestjs/common';
import {SessionService} from "../service/session.service";
import {TrackingBodyDto, TrackingQueryDto} from "../types/session.types";

@Controller()
export class AppController {

    constructor(private readonly sessionService: SessionService) {}


    @Get('/')
    async root(@Body() data: TrackingBodyDto, @Query() query: TrackingQueryDto, @Response() res, @Headers('referer') ref) {

        // this.sessionService.store(data, query, ref);
        res.send({
            status: 1,
            message: 'Queued'
        });

        return res.end();
    }
}