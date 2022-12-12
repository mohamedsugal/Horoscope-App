# Welcome to the Dark-side (server)
**Powered by**

<img width="100" alt="buff" src="https://user-images.githubusercontent.com/32971892/206874324-d5e38ea9-04d0-4a12-9481-4034b4dd9fc1.jpg">

> Buf's goal is to shift API development toward a schema-driven paradigm and thus pave the way for a future in which APIs are defined in a way that service owners and clients can depend on.

There are some steps you need to take in order to run the server side code smoothly. Please do them in order, or you might run into issues.

```shell
npm install             # to install the dependencies
npm run codegen:buf     # to generate the protobuf files
npm run build           # to generate the JavaScript files
npm run start           # to start the server
```

## Note

**`npm run build`** is required everytime you make changes to the code in `server/src` directory.

## Learning Resources
[Node GRPC](https://grpc.io/docs/languages/node/basics/) <br>
[Buf Docs](https://docs.buf.build/introduction)
