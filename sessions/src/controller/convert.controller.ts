import {Get, Controller, Param} from '@nestjs/common';
import {SessionService} from "../service/session.service";

@Controller('/convert')
export class ConvertController {

    constructor(private readonly sessionService: SessionService) {}

    @Get('/:goal/:soid')
    async convert(@Param('soid') soid, @Param('goal') goal) {
        this.sessionService.convert(goal, soid);

        return {
            status: 1,
            message: 'queued',
            data: {
                soid: soid,
                goal: goal
            }
        };

    }
}