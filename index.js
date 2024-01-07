import express from "express";

const app = express();
const port = 3000;
// const path = require('path');

app.get('/', (req, res)=> {
    res.send('<h1>HI</h1>');
});

// app.get('/about', (req, res)=> {
//     res.sendFile(path.join(__dirname, 'about.html'));
// });

app.get('/contact', (req, res)=> {
    res.send(`<h2>Contact info</h2>`);
});

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
})