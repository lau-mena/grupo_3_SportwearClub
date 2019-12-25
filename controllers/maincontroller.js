const fs = require('fs');
const path = require('path');


const productFilePath = __dirname + '/../data/products.json';

function getProducts() {
    let productsContent = fs.readFileSync(productFilePath, 'utf-8');
    let finalProducts = productsContent == '' ? [] : JSON.parse(productsContent);
    return finalProducts;
}

function storeProduct(newProduct) {
    let allProducts = getProducts();
    allProducts.push(newProduct);
    fs.writeFileSync(productFilePath, JSON.stringify(allProducts, null, ' '));
}

function generateProductId() {
    let allProducts = getProducts();
    if (allProducts.length == 0) {
        return 1;
    }
    let lastProduct = allProducts.pop();
    return lastProduct.id + 1;
}

function getProductById(id) {
    let allProducts = getProducts();
    let productToFind = allProducts.find(product => product.id == id);
    return productToFind;
}


let controller = {
    home: (req, res) => {
        res.render('index', {
            title: 'Home',
            bodyName: 'home',
        })
    },

    productDetail: (req, res) => {
        let productsContent = fs.readFileSync(productFilePath, 'utf-8');
        let products = JSON.parse(productsContent);
        let productId = req.params.id;
        let productFind = products.find(producto => producto.id == productId);



        res.render('productDetail', {
            productFind: productFind,
            title: 'Detail',
            bodyName: 'detail',
        })

    },

    productCart: (req, res) => {
        res.render('productCart', {
            title: 'Product cart',
            bodyName: 'cart',
        })

    },

    register: (req, res) => {
        res.render('register', {
            title: 'Register',
            bodyName: 'register',
        })

    },

    productShow: (req, res) => {
        res.render('productAdd', {
            title: 'Product Add',
            bodyName: 'add',
        })

    },
    productAdd: (req, res, next) => {
        let newAddProduct = {
            id: generateProductId(),
            nombre: req.body.productName,
            precio: req.body.productPrice,
            descripcion: req.body.productDescription,
            categoria: req.body.category,
            tipo: req.body.type,
            color: req.body.color,
            talle: req.body.size,
            status: req.body.status,
            avatar: req.file.filename,


        };

        console.log(next);

        storeProduct(newAddProduct);
    },

    FAQ: (req, res) => {
        res.render('FAQ', {
            title: 'FAQ',
            bodyName: 'faq',

        })
    },

    Nosotros: (req, res) => {
        res.render('nosotros', {
            title: 'Nosotros',
            bodyName: 'nosotros',
        });

    },

    Hombre: (req, res) => {
        let productsContent = fs.readFileSync(productFilePath, 'utf-8');
        let products = JSON.parse(productsContent);
        res.render('hombre', {
            products: products,
            title: 'Hombres',
            bodyName: 'hombre',
        })

    },

    Mujer: (req, res) => {
        let productsContent = fs.readFileSync(productFilePath, 'utf-8');
        let products = JSON.parse(productsContent);
        res.render('mujer', {
            products: products,
            title: 'Mujeres',
            bodyName: 'mujer',
        })

    },

    Nenes: (req, res) => {
        res.render('nenes', {
            title: 'Nenes',
            bodyName: 'nenes',
        })

    },

    Lonuevo: (req, res) => {
        res.render('lonuevo', {
            title: 'New',
            bodyName: 'new',
        })

    },

    Sale: (req, res) => {
        res.render('sale', {
            title: 'Sale',
            bodyName: 'sale',
        })

    },

    login: (req, res) => {
        res.render('login', {
            title: 'Login',
            bodyName: 'bodyLogin',
        })

    },

    Calzado:(req, res) => {
        let productsContent = fs.readFileSync(productFilePath, 'utf-8');
        let products = JSON.parse(productsContent);
        res.render('calzado', {
            products : products,
            title: 'Calzado',
            bodyName: 'bodyCalzado',
        })
    },

    indumentaria:(req, res) => {
        let productsContent = fs.readFileSync(productFilePath, 'utf-8');
        let products = JSON.parse(productsContent);
        res.render('indumentaria', {
            products : products,
            title: 'Indumentaria',
            bodyName: 'bodyIndumentaria',
        })
    },

    accesorios:(req, res) => {
        let productsContent = fs.readFileSync(productFilePath, 'utf-8');
        let products = JSON.parse(productsContent);
        res.render('accesorios', {
            products : products,
            title: 'Accesorios',
            bodyName: 'bodyAccesorios',
        })
    },
};

module.exports = controller;