import express from 'express'
import restaurants from './api/restuarants.route.js'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json()) // now with body parser 

app.use("/api/v1/restaurants", restaurants);

export default app