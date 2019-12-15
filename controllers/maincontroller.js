const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let filePath = path.join(__dirname, `/../views/${fileName}.html`);
	let htmlFile = fs.readFileSync(filePath, 'utf-8');
	return htmlFile;
};

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

    productAdd : (req, res) => {
        res.render('productAdd', {
            title : 'Product Add',
            bodyName : 'add',
        })
        
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