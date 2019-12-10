const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();

//import routes
const userRoutes = require('./routes/products')

//middleware
app.use(cors());

//routes middleware
app.use('/api', userRoutes)


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})