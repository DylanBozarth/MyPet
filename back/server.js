import express from 'express'
import restaurants from './api/restaurants.js'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json()) // now with body parser 

app.use("/api/v1/restaurants", restaurants);
app.use("*", (res, req) => res.status(404).json({error: "not found"}))