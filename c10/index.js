const express = require('express');
const formular = require('./controllers/formular');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/form', formular.getForm);
app.post('/form', formular.postForm);
app.get('/studenti', formular.getStudenti);
app.get('/brishi', formular.getBrishi);

app.listen(10000, err => {
    if(err) return console.log(err);
    console.log('Server successfully started on port 10000');
});