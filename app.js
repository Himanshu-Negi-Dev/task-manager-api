const express = require('express');
const app = express();
const taskRouter = require('./routes/tasks');
const { connectDB } = require('./db/connect');
require('dotenv').config();


app.use(express.urlencoded({extended: false}));
app.use(express.json({extended: false}));

app.use('/api/v1', taskRouter);
const port = process.env.PORT || 7000;

const start = async () =>{
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, ()=>{
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) { 
    console.log(error);
  }
}
start();