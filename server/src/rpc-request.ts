import { credentials } from "@grpc/grpc-js";
import { HoroscopeServiceClient } from "../generated-proto/services/horoscope/v1/horoscope_grpc_pb";
import { HoroscopeRequest } from "../generated-proto/services/horoscope/v1/horoscope_pb";

export class GrpcRequest {
  
  public GetGrpcRequest(name:string, horoscopeSign:string) {
      // Create a stub
    const client = new HoroscopeServiceClient(
      "localhost:50051",
      credentials.createInsecure()
    );
    
    // Implement the HoroscopeRequest that will be sent through the rpc
    const request: HoroscopeRequest = new HoroscopeRequest();
    request.setName(name);
    request.setHoroscopeSign(horoscopeSign);
    
    // Make rpc request and receive the response as a callback
    client.getHoroscopeInfo(request, (err, response) => {
      if (err) {
        console.log(err);
        return;
      }
      const responseObj = response.toObject();
      console.log(responseObj);
    });
}
}
