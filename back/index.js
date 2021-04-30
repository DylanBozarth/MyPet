import express from 'express'
import bodyparser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();
//setting up to send out requests
app.use(bodyparser.json({limit: "30mb", extended: true}))
app.use(bodyparser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());