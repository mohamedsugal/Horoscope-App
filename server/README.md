# Welcome to the Dark-side (server)

There are some steps you need to take in order to run the server side code smoothly. 

```shell
npm install
```
That will generate the `node_modules` directory that will hold all the packages you need. 

Additionally, these commands below are helpful to know.

```shell
npm run build
```
You need to run that every time you make changes to the `ts` files in the `server/src` directory. So, this command 
generates the `js` files for you in `server/generated-js` directory. Then you can use the generated `js` for any tasks you 
might want. 

```shell
npm run codegen:buf
```
This command is useful when you make changes to the `server/proto` directory, as it generates a fresh protobuf files in `server/generated-proto` directory.

```shell
npm run start
```
Yes, you guessed it right! This command is when you want to start the server.
