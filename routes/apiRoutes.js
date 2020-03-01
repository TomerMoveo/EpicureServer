const express = require('express');
let router = express.Router();

const login = require('./login');
const allChefs = require('./chefsR');
const allMeals = require('./mealsR');
const allRestuarants = require('./restuarantsR');
const popularRes = require('./popularR');
const signatureMeals = require('./signatureR');
const resByChef = require('./chefByIdR');

router.use('/login', login);
router.use('/chefs', allChefs);
router.use('/meals', allMeals);
router.use('/restuarants', allRestuarants);
router.use('/popular', popularRes);
router.use('/signature', signatureMeals);
router.use('/resbychef', resByChef);

module.exports = router;