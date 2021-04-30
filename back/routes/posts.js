import express from 'express'

const router = express.Router();
//setting up routes for node
router.get("/", (req, res) => {
 res.send('works')
})

export default router 