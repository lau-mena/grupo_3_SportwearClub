const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

/* Usanado multer para almacenar imagenes */

const storageDisk = multer.diskStorage({
	destination: (req, file, cb) => {
        cb(null, __dirname + '/../public/images/avatars');
        
	},
	filename: (req, file, cb) => {
		let imageFinalName = `user_avatar_${Date.now()}${path.extname(file.originalname)}`;
		cb(null, imageFinalName);
	}
});

const upload = multer({ storage: storageDisk });




/* requiriendo los contraladores */

const mainController = require('../controllers/mainController');

/* Rutas a los archivos */

router.get('/', mainController.home);
router.get('/productDetail/:id', mainController.productDetail);
router.get('/productCart', mainController.productCart);
router.get('/register', mainController.register);
router.get('/productAdd', mainController.productShow);
router.post('/productAdd', upload.single('avatar'), mainController.productAdd);
router.get('/FAQ', mainController.FAQ);
router.get('/Nosotros', mainController.Nosotros);
router.get('/Hombre', mainController.Hombre);
router.get('/Mujer', mainController.Mujer);
router.get('/Nenes', mainController.Nenes);
router.get('/Lonuevo', mainController.Lonuevo);
router.get('/Sale', mainController.Sale);
router.get('/login', mainController.login);
router.get('/indumentaria', mainController.indumentaria);
router.get('/accesorios', mainController.accesorios);
router.get('/calzado', mainController.Calzado);

module.exports = router;
