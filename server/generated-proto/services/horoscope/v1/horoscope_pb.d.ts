// package: services.horoscope.v1
// file: services/horoscope/v1/horoscope.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class HoroscopeRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): HoroscopeRequest;
    getHoroscopeSign(): string;
    setHoroscopeSign(value: string): HoroscopeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HoroscopeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HoroscopeRequest): HoroscopeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HoroscopeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HoroscopeRequest;
    static deserializeBinaryFromReader(message: HoroscopeRequest, reader: jspb.BinaryReader): HoroscopeRequest;
}

export namespace HoroscopeRequest {
    export type AsObject = {
        name: string,
        horoscopeSign: string,
    }
}

export class HoroscopeResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): HoroscopeResponse;
    getDateRange(): string;
    setDateRange(value: string): HoroscopeResponse;
    getCurrentDate(): string;
    setCurrentDate(value: string): HoroscopeResponse;
    getDescription(): string;
    setDescription(value: string): HoroscopeResponse;
    getCompatibility(): string;
    setCompatibility(value: string): HoroscopeResponse;
    getMood(): string;
    setMood(value: string): HoroscopeResponse;
    getColor(): string;
    setColor(value: string): HoroscopeResponse;
    getLuckyNumber(): number;
    setLuckyNumber(value: number): HoroscopeResponse;
    getLuckyTime(): string;
    setLuckyTime(value: string): HoroscopeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HoroscopeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HoroscopeResponse): HoroscopeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HoroscopeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HoroscopeResponse;
    static deserializeBinaryFromReader(message: HoroscopeResponse, reader: jspb.BinaryReader): HoroscopeResponse;
}

export namespace HoroscopeResponse {
    export type AsObject = {
        name: string,
        dateRange: string,
        currentDate: string,
        description: string,
        compatibility: string,
        mood: string,
        color: string,
        luckyNumber: number,
        luckyTime: string,
    }
}
