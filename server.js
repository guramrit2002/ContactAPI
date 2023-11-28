const bodyParser = require('body-parser');
const express = require('express');
const errorHandeler = require('./middleware/errorHandeler');
const connectDb = require('./config/dbConnection');

connectDb()
// create a exoress app
const app = express()
// setup server port
const port = process.env.PORT||8080

app.use(bodyParser.json())

app.use("/api/contacts",require('./routes/contactroutes'))

app.use(errorHandeler)

app.listen(port,()=>{
    console.log('server is running on port ${port}')
})
