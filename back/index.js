import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'
import RestaurantsDAO from './dao/restaurantsDAO.js'
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
        await RestaurantsDAO.injectDB(client)  // how we get reference to collection ins database
        app.listen(port, () => {
            console.log(`on port ${port}`)
        })
    })
