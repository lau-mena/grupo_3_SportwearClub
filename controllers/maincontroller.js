const fs = require('fs');
const path = require('path');


const productFilePath = __dirname + '/../data/products.json';

function getProducts () {
	let productsContent = fs.readFileSync(productFilePath, 'utf-8');
	let finalProducts = productsContent == '' ? [] : JSON.parse(productsContent); 
	return finalProducts;
}
function storeProduct (newProduct) {
	let allProducts = getProducts();
	allProducts.push(newProduct);
	fs.writeFileSync(productFilePath, JSON.stringify(allProducts, null, ' '));
}
function generateProductId () {
	let allProducts = getProducts();
	if (allProducts.length == 0) {
		return 1;
	}
	let lastProduct = allProducts.pop();
	return lastProduct.id + 1;
}

let controller = {
    home : (req, res) => {
        res.render('index', {
            title : 'Home',
            bodyName : 'home',
        })
    },

    productDetail : (req, res) => {
        res.render('productDetail', {
            title : 'Detail',
            bodyName : 'detail',
        })
        
        },
    
    productCart : (req, res) => {
        res.render('productCart', {
            title : 'Product cart',
            bodyName : 'cart',
        })
        
        },

    register : (req, res) => {
        res.render('register', {
            title : 'Register',
            bodyName : 'register',
        })
        
        },

    productShow : (req, res) => {
        res.render('productAdd', {
            title : 'Product Add',
            bodyName : 'add',
        })
        
        },
    productAdd : (req, res, next) => {
        let newAddProduct = {
            id: generateProductId(),
			nombre: req.body.productName,
			precio: req.body.productPrice,
			descripcion: req.body.productDescription,
			categoria: req.body.category,
            tipo: req.body.type,
            status: req.body.status,
            avatar: req.file.filename,
          
            
        };
        
        console.log(next);
        
		storeProduct(newAddProduct);
        },

    FAQ : (req, res) => {
           res.render('FAQ',{
               title: 'FAQ',
               bodyName : 'faq',

           })
        },

    Nosotros : (req, res) => {
            res.render('nosotros', {
                title : 'Nosotros',
                bodyName : 'nosotros',
            });
         
         },

     Hombre : (req, res) => {
            res.render('hombre', {
                title : 'Hombres',
                bodyName : 'hombre',
            })
           
                    },

     Mujer : (req, res) => {
            res.render('mujer', {
                title: 'Mujeres',
                bodyName : 'mujer',
            })
        
                        },   

     Nenes: (req, res) => {
             res.render('nenes',  {
                 title : 'Nenes',
                 bodyName : 'nenes',
             })
            
                   },  

    Lonuevo: (req, res) => {
           res.render('lonuevo', {
               title : 'New',
               bodyName : 'new',
           })
         
                          }, 

    Sale: (req, res) => {
            res.render('sale', {
                title : 'Sale',
                bodyName : 'sale',
            })
            
                     },     

    login : (req, res) => {
            res.render('login',{
                title : 'Login',
                bodyName : 'bodyLogin',
            })
            
                       },
                
    
};

module.exports = controller;