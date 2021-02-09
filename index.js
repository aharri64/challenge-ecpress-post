require('dotenv').config();
const express = require('express');
const axios = require('axios');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;

app.use(require('morgan')('dev'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    res.send('hi')
})

app.post('/posts/new', (req, res) => {

})

app.get('/results', (req, res) => {

})




const server = app.listen(port, function () {
    console.log('...listening on', port);
});