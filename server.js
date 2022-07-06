const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')

const business = require('./business')
const category = require('./category')
const products = require('./products')
const home = require('./homex')

const app = express()
app.set('port', process.env.PORT || PORT)

const whitelist = [
    'http://localhost:3000'
]

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'suitte'
}

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors({
    origin : whitelist
}));

// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API Suitte')
})
app.use('/business', business)
app.use('/category', category)
app.use('/products', products)
app.use('/homex', home)

// server running -----------------------------------
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`server running on port ${PORT}`);
});