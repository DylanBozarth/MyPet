import express from 'express' 
import RestaurantsController from './restaurants.controller.js'
import ReviewsController from './reviews.controller.js'
const router = express.Router();

router.route('/').get(RestaurantsController.apiGetRestaurants)
// this is where the view is set. use ?zipcode=000 to filter in browser
router 
.route('/review')
.post(ReviewsController.apiPostReview)
.put(ReviewsController.apiUpdateReview)
.delete(ReviewsController.apiDeleteReview)
export default router