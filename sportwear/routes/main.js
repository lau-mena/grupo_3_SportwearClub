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
router.get('/FAQ', mainController.FAQ);
router.get('/Nosotros', mainController.Nosotros);
router.get('/Hombre', mainController.Hombre);
router.get('/Mujer', mainController.Mujer);
router.get('/Nenes', mainController.Nenes);
router.get('/Lonuevo', mainController.Lonuevo);
router.get('/Sale', mainController.Sale);
router.get('/login', mainController.login);
module.exports = router;
