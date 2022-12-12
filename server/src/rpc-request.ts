import { credentials, ServiceError } from "@grpc/grpc-js";
import { HoroscopeServiceClient } from "../generated-proto/services/horoscope/v1/horoscope_grpc_pb";
import {
  HoroscopeRequest,
  HoroscopeResponse,
} from "../generated-proto/services/horoscope/v1/horoscope_pb";
import { Request, Response } from "express";

class GrpcRequest {
  private static horoscopeResponse: HoroscopeResponse;
  private static client: HoroscopeServiceClient = new HoroscopeServiceClient(
    "localhost:50051",
    credentials.createInsecure()
  );

  /**
   * Sends the HoroscopeRequest to GRPC endpoint
   * @param request the callback request
   */
  public static sendRequest(request: Request) {
    // Implement the HoroscopeRequest that will be sent through the rpc
    const horoscopeRequest: HoroscopeRequest = new HoroscopeRequest();
    horoscopeRequest.setName(request.body.name);
    horoscopeRequest.setHoroscopeSign(request.body.horoscope_sign);

    // Make rpc horoscopeRequest and receive the response as a callback
    GrpcRequest.client.getHoroscopeInfo(
      horoscopeRequest,
      (error: ServiceError | null, horoscopeResponse: HoroscopeResponse) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(horoscopeResponse.toObject());
        this.horoscopeResponse = horoscopeResponse;
      }
    );
  }

  // Method to return the GRPC Horoscope response
  public static getHoroscopeResponse() {
    return this.horoscopeResponse.toObject();
  }
}

const horoscopeUserDetails = (request: Request, response: Response): any => {
  GrpcRequest.sendRequest(request);
  response.status(200);
};

const getHoroscopeDetailsForUser = (req: Request, res: Response): any => {
  console.log("GET request was called");
  res.status(200).send(GrpcRequest.getHoroscopeResponse());
};

export { horoscopeUserDetails, getHoroscopeDetailsForUser };
