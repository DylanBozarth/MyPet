import express from 'express'
import {getPosts, createPosts} from '../controllers/posts.js'
const router = express.Router();
//setting up routes for node
router.get("/", getPosts)
router.post("/posts", createPosts)


export default router 