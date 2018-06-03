import {Injectable} from '@nestjs/common';
import {Client, ClientProxy, Transport} from '@nestjs/microservices';

@Injectable()
export class AppService {

    constructor() {
        console.log('Connecting!');
    }

    async root() {
        console.log('Sending data');
    }
}
