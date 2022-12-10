"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
const horoscope_grpc_pb_1 = require("../generated-proto/services/horoscope/v1/horoscope_grpc_pb");
const horoscope_pb_1 = require("../generated-proto/services/horoscope/v1/horoscope_pb");
// Create a stub
const client = new horoscope_grpc_pb_1.HoroscopeServiceClient("localhost:50051", grpc_js_1.credentials.createInsecure());
// Implement the HoroscopeRequest that will be sent through the rpc
const request = new horoscope_pb_1.HoroscopeRequest();
request.setName("Mohamed");
request.setHoroscopeSign("libra");
// Make rpc request and receive the response as a callback
client.getHoroscopeInfo(request, (err, response) => {
    if (err) {
        console.log(err);
        return;
    }
    const responseObj = response.toObject();
    console.log(responseObj);
});
