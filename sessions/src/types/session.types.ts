import {Response as MaxmindResponse} from "maxmind";

export interface TrackingBodyDto {
    ua: string,
    ip: string,
    geo?: MaxmindResponse
}

export interface TrackingQueryDto {
    [k: string]: any
}


export interface TrackingSession {
    [k: string]: any
}

export interface Session {
    ip: string,
    sid: string,
    expires: { aguid: string, created: Date }
    [k: string]: any
}