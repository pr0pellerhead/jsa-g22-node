const express = require('express');
const calc = require('./controllers/calculator');

const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/calculator', calc.getCalculator);
app.post('/calculator', calc.postCalculator);

app.listen(10000, err => {
    if(err) return console.log(err);
    console.log('Server started!');
});