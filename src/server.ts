import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.send('Hi there! Welcome to the Generate Fake People API.')
})

const port = 3333;

app.listen(port, () => console.log(`The server is running on port: ${port}`))