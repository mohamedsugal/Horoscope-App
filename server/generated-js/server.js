"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rpc_request_1 = require("./rpc-request");
// Port number
const PORT = 7777;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/user", (req, res) => {
    const grpc_request = new rpc_request_1.GrpcRequest();
    grpc_request.GetGrpcRequest(req.body["name"], req.body["horoscope_sign"]);
});
app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});
