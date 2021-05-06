import express from 'express' 
import RestaurantsController from './restaurants.controller.js'
const router = express.Router();

router.route('/').get(RestaurantsController.apiGetRestaurants)
// this is where the view is set. use ?zipcode=000 to filter in browser
export default router