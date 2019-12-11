const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();

const origin = process.env.NODE_ENV !== 'production' ? 'http://localhost:8000/api' : 'prod-url'

//import routes
const userRoutes = require('./routes/products')

//middleware
app.use(cors({origin}));

//routes middleware
app.use('/api', userRoutes)


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})