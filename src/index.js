const path = require('path')
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')))

// Template engine setup
app.engine('hbs', engine({
  extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/view'))

// Route to render the home page
app.get('/', (req, res) => {
  res.render('home'); 
});

app.get('/news', (req, res) => {
  res.render('news'); 
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
