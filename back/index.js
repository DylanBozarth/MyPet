import express from 'express'
import bodyparser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();
//setting up to send out requests
app.use(bodyparser.json({limit: "30mb", extended: true}))
app.use(bodyparser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

//credentials to database
const CONNECTIONURL = "mongodb+srv://steve:Dontforget1!@cluster0.lyt6y.mongodb.net/cluster0?retryWrites=true&w=majority";
// port number
const PORT = process.env.PORT || 5000

// connecting to database 
mongoose.connect(CONNECTIONURL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`server is at port: ${PORT}`)))
.catch(() => () => console.log(error.message));


mongoose.set('useFindAndModify', false);