import express, { Express, Request, Response } from 'express';

const PORT = 7777;
const app: Express = express();

app.use(express.json());

app.post('/user', (req, res) => {
    console.log(req.body);
});

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});
