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
        let html = readHTML('index');
        res.send(html);
    },

    productDetail : (req, res) => {
        let html = readHTML('productDetail');
        res.send(html);
        },
    
    productCart : (req, res) => {
        let html = readHTML('productCart');
        res.send(html);
        },

    register : (req, res) => {
        let html = readHTML('register');
        res.send(html);
        },

    productAdd : (req, res) => {
        let html = readHTML('productAdd');
        res.send(html);
        },
    FAQ : (req, res) => {
            let html = readHTML('FAQ');
            res.send(html);
            },
    Nosotros : (req, res) => {
                let html = readHTML('Nosotros');
                res.send(html);
                },
     Hombre : (req, res) => {
             let html = readHTML('Hombre');
             res.send(html);
                    },
     Mujer : (req, res) => {
            let html = readHTML('Mujer');
            res.send(html);
                        },         
     Nenes: (req, res) => {
             let html = readHTML('Nenes');
            res.send(html);
                   },       
    Lonuevo: (req, res) => {
            let html = readHTML('Lonuevo');
            res.send(html);
                          },   
    Sale: (req, res) => {
            let html = readHTML('Sale');
            res.send(html);
                     },           
    login: (req, res) => {
            let html = readHTML('login');
            res.send(html);
                       },
                
    
};

module.exports = controller;