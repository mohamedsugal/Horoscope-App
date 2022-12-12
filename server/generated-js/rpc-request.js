"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHoroscopeDetailsForUser = exports.horoscopeUserDetails = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const horoscope_grpc_pb_1 = require("../generated-proto/services/horoscope/v1/horoscope_grpc_pb");
const horoscope_pb_1 = require("../generated-proto/services/horoscope/v1/horoscope_pb");
class GrpcRequest {
    /**
     * Sends the HoroscopeRequest to GRPC endpoint
     * @param request the callback request
     */
    static sendRequest(request) {
        // Implement the HoroscopeRequest that will be sent through the rpc
        const horoscopeRequest = new horoscope_pb_1.HoroscopeRequest();
        horoscopeRequest.setName(request.body.name);
        horoscopeRequest.setHoroscopeSign(request.body.horoscope_sign);
        // Make rpc horoscopeRequest and receive the response as a callback
        GrpcRequest.client.getHoroscopeInfo(horoscopeRequest, (error, horoscopeResponse) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log(horoscopeResponse.toObject());
            this.horoscopeResponse = horoscopeResponse;
        });
    }
    // Method to return the GRPC Horoscope response
    static getHoroscopeResponse() {
        return this.horoscopeResponse.toObject();
    }
}
GrpcRequest.client = new horoscope_grpc_pb_1.HoroscopeServiceClient("localhost:50051", grpc_js_1.credentials.createInsecure());
const horoscopeUserDetails = (request, response) => {
    GrpcRequest.sendRequest(request);
    response.status(200).end();
};
exports.horoscopeUserDetails = horoscopeUserDetails;
const getHoroscopeDetailsForUser = (req, res) => {
    res.status(200).send(GrpcRequest.getHoroscopeResponse());
};
exports.getHoroscopeDetailsForUser = getHoroscopeDetailsForUser;
