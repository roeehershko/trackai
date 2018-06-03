import {Get, Controller, OnModuleInit} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';

@Controller()
export class AppController {

    @Get('/')
    async root() {
        console.log('Sending hello');
        return 'test';
    }

    @MessagePattern('convert')
    async test(data) {
        console.log(data);
    }
}
