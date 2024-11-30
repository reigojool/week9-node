const express = require('express');
const app = express();

app.use(express.static('public'));


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
});

app.get('/about', (request, response) => {
    response.send('<h1>Hello world</h1>');
});

app.listen(3000, ()=>{
    console.log('Server is running on Port 3000.');
});
