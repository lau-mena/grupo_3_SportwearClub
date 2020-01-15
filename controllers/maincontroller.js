const fs = require('fs');
const path = require('path');


const productFilePath = __dirname + '/../data/products.json';
let productsContent = fs.readFileSync(productFilePath, 'utf-8');

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
        let products = getProducts();;
        res.render('hombre', {
            products: products,
            title: 'Hombres',
            bodyName: 'hombre',
        })

        // TODO ser cool
    },
    deleteProduct: (req, res) => {

        let productosArray = JSON.parse(productsContent);
        let productosSinElQueBorramos = productosArray.filter(function (unProducto) {
            return unProducto.id != req.params.id;
        })
        // guardo el array con los productos finales
        fs.writeFileSync(productFilePath, JSON.stringify(productosSinElQueBorramos, null, ' '));
        res.redirect('/');

    },
    editProductShow: (req, res) => {
        let productsContent = fs.readFileSync(productFilePath, 'utf-8');
        let products = JSON.parse(productsContent);
        let productId = req.params.id;
        let productFind = products.find(producto => producto.id == productId);

            let colors = [
                "Negro", "Blanco", "Gris", "Azul", "Verde", "Rojo", "Naranja", "Bordo", "Rosa", "Celeste", "Natural", "Fucsia", "Lila", "Mostaza"
            ]
            let colorFound = colors.filter(color => color != productFind.color);
            let colorSolo = colors.filter(color => color == productFind.color);
            let colorFinal = [...colorSolo, ...colorFound]

            
        console.log(colorFinal)
        
        res.render('productEdit', {
            productFind: productFind,
            colorFinal: colorFinal,
            title: 'Edit',
            bodyName: 'edit',
        })
    },
    editProduct: (req, res) => {
        2
        let products = getProducts();
        let productId = parseInt(req.params.id); //router.put('/productEdit/:id'

        //inicializo la variable a almacenar
        let productFound;

        //recorro el array
        products.map(product => {

            //pregunto si el id que recibo es igual al id del producto 
            if (product.id === productId) {

                //reasigno las propiedades del producto con lo que viene del form (req.body)
                product.nombre = req.body.productName,
                    product.precio = req.body.productPrice,
                    product.descripcion = req.body.productDescription,
                    product.categoria = req.body.category,
                    product.tipo = req.body.type,
                    product.color = req.body.color,
                    product.talle = req.body.size,
                    product.status = req.body.status,
                    product.avatar = req.file.filename

                // //asigno el valor a la variable inicializada
            }
            productFound = products;
        });
        fs.writeFileSync(productFilePath, JSON.stringify(productFound, null, ' '));

    },

    Mujer: (req, res) => {
        let productsContent = fs.readFileSync(productFilePath, 'utf-8');
        let products = getProducts();
        res.render('mujer', {
            products: products,
            title: 'Mujeres',
            bodyName: 'mujer',
        })

    },

    Nenes: (req, res) => {
        let productsContent = fs.readFileSync(productFilePath, 'utf-8');
        let products = getProducts();
        res.render('nenes', {
            products: products,
            title: 'Nenes',
            bodyName: 'nenes',
        })

    },

    Lonuevo: (req, res) => {
        let productsContent = fs.readFileSync(productFilePath, 'utf-8');
        let products = getProducts();
        res.render('lonuevo', {
            products: products,
            title: 'New',
            bodyName: 'new',
        })

    },

    Sale: (req, res) => {
        let productsContent = fs.readFileSync(productFilePath, 'utf-8');
        let products = getProducts();
        res.render('sale', {
            products: products,
            title: 'Sale',
            bodyName: 'sale',
        })

    },


    Calzado: (req, res) => {
        let productsContent = fs.readFileSync(productFilePath, 'utf-8');
        let products = getProducts();
        res.render('calzado', {
            products: products,
            title: 'Calzado',
            bodyName: 'bodyCalzado',
        })
    },

    indumentaria: (req, res) => {
        let productsContent = fs.readFileSync(productFilePath, 'utf-8');
        let products = getProducts();
        res.render('indumentaria', {
            products: products,
            title: 'Indumentaria',
            bodyName: 'bodyIndumentaria',
        })
    },

    accesorios: (req, res) => {
        let productsContent = fs.readFileSync(productFilePath, 'utf-8');
        let products = getProducts();
        res.render('accesorios', {
            products: products,
            title: 'Accesorios',
            bodyName: 'bodyAccesorios',
        })
    },
};

module.exports = controller;