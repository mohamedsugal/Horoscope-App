import express, { Express, Request, Response } from "express";
import { GrpcRequest } from './rpc-request';

// Port number
const PORT = 7777;
const app: Express = express();

app.use(express.json());

app.post("/user", (req: Request, res: Response) => {
  const grpc_request = new GrpcRequest();
  grpc_request.GetGrpcRequest(req.body["name"], req.body["horoscope_sign"])
  
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
