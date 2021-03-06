import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Transport} from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.connectMicroservice({
        transport: Transport.MQTT,
        options: {
            url: 'mqtt://mqtt:1883',
            port: 1883,
        },
    });

    app.startAllMicroservicesAsync();
    await app.listen(3001);
}
bootstrap();
