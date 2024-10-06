const express = require('express')
const app = express();
const tasks = require('./routes/tasks.js')
const connectDB = require('./db/connect.js')
require('dotenv').config()

const port = 3000;

//middleware

app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks',tasks)

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
