import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'
dotenv.config();
const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000   // || is a fallback


MongoClient.connect(
    process.env.REST_URL,
    {
        poolSize: 50,
        wtimeout: 2500,
        useNewUrlParser: true }
)
    .catch(error => {
        console.error(error.stack)
        process.exit();
    })
    .then(async client => {
        app.listen(port, () => {
            console.log(`on port ${port}`)
        })
    })
