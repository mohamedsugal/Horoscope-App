import express, { Express, Request, Response } from "express";
import * as grpcRequest from "./rpc-request";

// Port number
const PORT = 7777;
const app: Express = express();

app.use(express.json());

app.post("/user-details", grpcRequest.horoscopeUserDetails);

app.get("/horoscope-details", grpcRequest.getHoroscopeDetailsForUser);

// console.log(grpcRequest.getHoroscopeDetailsForUser);

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});

export default app;
