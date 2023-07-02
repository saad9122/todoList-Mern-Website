const express = require('express')
const dotenv = require('dotenv')
const dbConncection = require('./DatabaseConnection/dbConnection')
const router = require('./Routes/route')
const bodyParser = require('body-parser')
const cors = require('cors')


dotenv.config()
dbConncection();


const port = process.env.PORT
const app = express()


app.use(bodyParser.json())
app.use(cors())
app.use('/',router)


app.listen(port,()=> {
    console.log('App is running on port',port)
})