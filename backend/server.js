const express = require("express");
const env = require("./config/envConfig");
const connect = require("./config/db");
const cors=require('cors')
const userRoutes=require('./routes/userRoutes')
const categoryRoutes=require('./routes/categoryRoute')
const productRoutes=require('./routes/productRoutes')


const app = express();

//DB connection
connect();

app.use(cors());
app.use(express.json());

//user Routres
app.use('/api',userRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);





const port = env.PORT || 5000;



app.listen(port, () => {
    console.log(`Your server is running at port number: ${port}`);
  });