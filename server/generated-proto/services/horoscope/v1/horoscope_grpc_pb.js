// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_horoscope_v1_horoscope_pb = require('../../../services/horoscope/v1/horoscope_pb.js');

function serialize_services_horoscope_v1_HoroscopeRequest(arg) {
  if (!(arg instanceof services_horoscope_v1_horoscope_pb.HoroscopeRequest)) {
    throw new Error('Expected argument of type services.horoscope.v1.HoroscopeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_horoscope_v1_HoroscopeRequest(buffer_arg) {
  return services_horoscope_v1_horoscope_pb.HoroscopeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_horoscope_v1_HoroscopeResponse(arg) {
  if (!(arg instanceof services_horoscope_v1_horoscope_pb.HoroscopeResponse)) {
    throw new Error('Expected argument of type services.horoscope.v1.HoroscopeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_horoscope_v1_HoroscopeResponse(buffer_arg) {
  return services_horoscope_v1_horoscope_pb.HoroscopeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HoroscopeServiceService = exports.HoroscopeServiceService = {
  getHoroscopeInfo: {
    path: '/services.horoscope.v1.HoroscopeService/GetHoroscopeInfo',
    requestStream: false,
    responseStream: false,
    requestType: services_horoscope_v1_horoscope_pb.HoroscopeRequest,
    responseType: services_horoscope_v1_horoscope_pb.HoroscopeResponse,
    requestSerialize: serialize_services_horoscope_v1_HoroscopeRequest,
    requestDeserialize: deserialize_services_horoscope_v1_HoroscopeRequest,
    responseSerialize: serialize_services_horoscope_v1_HoroscopeResponse,
    responseDeserialize: deserialize_services_horoscope_v1_HoroscopeResponse,
  },
};

exports.HoroscopeServiceClient = grpc.makeGenericClientConstructor(HoroscopeServiceService);
