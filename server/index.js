const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const csvCrawler = require('./businessLogic/csv-crawler')

const db = require('./db')
const movieRouter = require('./routes/movie-router')
const mindStatRouter = require('./routes/mind-statistics-router')
const { getMindStats } = require('./controllers/mind-statistics-ctrl')
const { insertMindStats } = require('./controllers/mind-statistics-ctrl')

const app = express()
const apiPort = 8080 

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', function(req, res){
    res.send('Hello World!!!!')
})

//app.use('/api', movieRouter)
app.use('/api', mindStatRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))


/*
// INSERTING CSV DATA
var datas = csvCrawler.loadCSV()
insertMindStats(datas)
*/

/*
// READING DATA FROM MONGO DB
getMindStats()
*/