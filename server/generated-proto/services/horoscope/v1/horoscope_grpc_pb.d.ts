// package: services.horoscope.v1
// file: services/horoscope/v1/horoscope.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as services_horoscope_v1_horoscope_pb from "../../../services/horoscope/v1/horoscope_pb";

interface IHoroscopeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getHoroscopeInfo: IHoroscopeServiceService_IGetHoroscopeInfo;
}

interface IHoroscopeServiceService_IGetHoroscopeInfo extends grpc.MethodDefinition<services_horoscope_v1_horoscope_pb.HoroscopeRequest, services_horoscope_v1_horoscope_pb.HoroscopeResponse> {
    path: "/services.horoscope.v1.HoroscopeService/GetHoroscopeInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_horoscope_v1_horoscope_pb.HoroscopeRequest>;
    requestDeserialize: grpc.deserialize<services_horoscope_v1_horoscope_pb.HoroscopeRequest>;
    responseSerialize: grpc.serialize<services_horoscope_v1_horoscope_pb.HoroscopeResponse>;
    responseDeserialize: grpc.deserialize<services_horoscope_v1_horoscope_pb.HoroscopeResponse>;
}

export const HoroscopeServiceService: IHoroscopeServiceService;

export interface IHoroscopeServiceServer extends grpc.UntypedServiceImplementation {
    getHoroscopeInfo: grpc.handleUnaryCall<services_horoscope_v1_horoscope_pb.HoroscopeRequest, services_horoscope_v1_horoscope_pb.HoroscopeResponse>;
}

export interface IHoroscopeServiceClient {
    getHoroscopeInfo(request: services_horoscope_v1_horoscope_pb.HoroscopeRequest, callback: (error: grpc.ServiceError | null, response: services_horoscope_v1_horoscope_pb.HoroscopeResponse) => void): grpc.ClientUnaryCall;
    getHoroscopeInfo(request: services_horoscope_v1_horoscope_pb.HoroscopeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_horoscope_v1_horoscope_pb.HoroscopeResponse) => void): grpc.ClientUnaryCall;
    getHoroscopeInfo(request: services_horoscope_v1_horoscope_pb.HoroscopeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_horoscope_v1_horoscope_pb.HoroscopeResponse) => void): grpc.ClientUnaryCall;
}

export class HoroscopeServiceClient extends grpc.Client implements IHoroscopeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getHoroscopeInfo(request: services_horoscope_v1_horoscope_pb.HoroscopeRequest, callback: (error: grpc.ServiceError | null, response: services_horoscope_v1_horoscope_pb.HoroscopeResponse) => void): grpc.ClientUnaryCall;
    public getHoroscopeInfo(request: services_horoscope_v1_horoscope_pb.HoroscopeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_horoscope_v1_horoscope_pb.HoroscopeResponse) => void): grpc.ClientUnaryCall;
    public getHoroscopeInfo(request: services_horoscope_v1_horoscope_pb.HoroscopeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_horoscope_v1_horoscope_pb.HoroscopeResponse) => void): grpc.ClientUnaryCall;
}
