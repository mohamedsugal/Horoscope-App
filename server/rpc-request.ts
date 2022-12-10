import { credentials } from "@grpc/grpc-js";
import { HoroscopeServiceClient } from "./generated-proto/services/horoscope/v1/horoscope_grpc_pb";
import { HoroscopeRequest } from "./generated-proto/services/horoscope/v1/horoscope_pb";

const client = new HoroscopeServiceClient(
  "localhost:50051",
  credentials.createInsecure()
);

const request: HoroscopeRequest = new HoroscopeRequest();
request.setName("Mohamed");
request.setHoroscopeSign("Libra");

client.getHoroscopeInfo(request, (err, response) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(response);
});
