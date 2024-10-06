const express = require('express')
const app = express();
const tasks = require('./routes/tasks.js')
const connectDB = require('./db/connect.js')
require('dotenv').config()
const notFound = require('./middleware/404-not-found.js')
const errorHandlerMiddleware = require('./middleware/error-handler.js')

const port = process.env.PORT || 3000;

//middleware

app.use(express.static('./public'))
app.use(express.json())


//routes
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async ()=> {
    try{
        await connectDB(process.env.MONGO_URI);
        console.log('CONNECTED TO DB...')
        app.listen(port, console.log(`Server listening on port ${port}.....`));
    }
    catch(error){
        console.log(error);
    }
}

start()
