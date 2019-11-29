var express = require('express');
var router = express.Router();

/* requiriendo los contraladores */

const mainController = require('../controllers/mainController');

/* Rutas a los archivos */
router.get('/', mainController.home);
router.get('/productDetail', mainController.productDetail);
router.get('/productCart', mainController.productCart);
router.get('/register', mainController.register);
router.get('/productAdd', mainController.productAdd);

module.exports = router;
