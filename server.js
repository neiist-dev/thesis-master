import express from 'express';

const app = express();

//servir o /client em www.xxx.

app.get('/', (req, res) => {
    console.log(req);
})

app.listen(3000, () => {
    console.log('app is running on port 3000');
})