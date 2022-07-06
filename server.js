const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')

const business = require('./business')
const category = require('./category')
const products = require('./products')
const home = require('./homex')

const app = express()
app.set('port', process.env.PORT || 9000)

const whitelist = [
    'https://suitte-front.herokuapp.com'
]

const dbOptions = {
    host: 'bsstzjrqbywd4asduwme-mysql.services.clever-cloud.com',
    port: 3306,
    user: 'uffhtcwwerfnzc2m',
    password: '9u874UOkqjs7HMuNFo6D',
    database: 'bsstzjrqbywd4asduwme'
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
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})