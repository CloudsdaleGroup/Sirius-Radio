var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var hbs = require('express-handlebars');
var helmet = require('helmet')
var compression = require('compression')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//View Engine Setup (Handlebars setup)
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//setup Compressions
app.use(compression());
//Production Logging
morgan(":remote-addr :method :status :response-time :url");

//Error Handler
//later I'm lazy...

//Catch 404
app.use(function(err, req, res, next){
    next(createError(404));
});

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
