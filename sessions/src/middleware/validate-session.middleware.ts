import {NestMiddleware, MiddlewareFunction, Injectable, HttpException, HttpStatus} from '@nestjs/common';

/**
 * Tracker Middleware
 * Converting tracker parameters into request body
 */
@Injectable()
export class ValidateSessionMiddleware implements NestMiddleware {

    constructor() {}

    resolve(...args: any[]): MiddlewareFunction  {
        return (req, res, next) => {

            // // validate offer exists
            // if ( ! req.query.offer) {
            //     throw new HttpException({
            //         status: HttpStatus.BAD_REQUEST,
            //         error: 'Missing offer, please make sure you include offer in the URL (ex: offer=7382)',
            //     }, HttpStatus.BAD_REQUEST)
            // }
            //
            // // validate offer exists
            // if ( ! req.query.lp) {
            //     throw new HttpException({
            //         status: HttpStatus.BAD_REQUEST,
            //         error: 'No landing page found, please verify that this offer has default landing page',
            //     }, HttpStatus.BAD_REQUEST)
            // }

            next();
        };

    }
}