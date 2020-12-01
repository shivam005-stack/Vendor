const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
require('dotenv').config();

const controller = require('./controllers/workflow');

const app = express();

mongoose.connect(process.env.DATABASE,{
      useFindAndModify:true,
      useUnifiedTopology:true,
      useNewUrlParser: true
}).then(console.log("DB Connected"));

app.use(bodyParser.json());
app.use(expressValidator());

const PORT = process.env.PORT|| 3000;

app.listen(PORT,()=>{
      console.log(`Server Running On ${PORT}`);
});