const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes.js');
const app = express();

const mongoURI = 'mongodb+srv://bharath:<password>@cluster0.rccbs0v.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true})
const conn = mongoose.connection;

conn.on('open' , () => {
    console.log('MongoDB connected');
});

app.use(express.json());
app.use('/user', routes);
app.listen(3001,() => {console.log('Server started on port 3001')});