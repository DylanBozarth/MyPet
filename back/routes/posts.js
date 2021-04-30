import express from 'express'
import {getPosts} from '../controllers/posts.js'
const router = express.Router();
//setting up routes for node
router.get("/", getPosts)

export default router 