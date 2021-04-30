import express from 'express'
import bodyparser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'
const app = express();
//setting up to send out requests
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.use('/', postRoutes)
//credentials to database, this is just a test database so don't worry
const CONNECTIONURL = 'mongodb+srv://steve:1@test.lyt6y.mongodb.net/test?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;
// connecting to database 
mongoose.connect(CONNECTIONURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB started'))
    .catch(() => () => console.log(error.message));


mongoose.set('useFindAndModify', false);

app.listen(PORT, () => console.log(`server is at port: ${PORT}`))