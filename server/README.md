# Welcome to the Dark-side (server)
**Powered by**

<img width="100" alt="buff" src="https://user-images.githubusercontent.com/32971892/206874324-d5e38ea9-04d0-4a12-9481-4034b4dd9fc1.jpg">


There are some steps you need to take in order to run the server side code smoothly. Please do them in order, or you might run into issues. 

1. Install all the dependencies `npm install`
2. Generate the protobuf files `npm run codegen:buf`
3. Generate the js files `npm run build`
4. Finally, you can start the server `npm run start`


Additionally, you have to run `npm run build` everytime you make changes to the files in the `server/src` directory, because these 
files are TypeScript files, and we need to generate the JavaScript counter-parts. The reason being, that most browsers can understand 
the JavaScript code, but might have trouble with the TypeScript code. 
