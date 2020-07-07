const express = require('express');
const bodyParser = require('body-parser');

const message = require('./routes/message_route');
const authenticate = require('./routes/authenticate_route');

const app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended: false}))

app.use('/',message);
app.use('/authenticate',authenticate);


app.listen(3000);
