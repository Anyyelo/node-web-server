require('dotenv').config();
const express = require('express')
const hbs=require('hbs')
const app = express()
const port=process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
//Servir contenido estático
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home',{
        nombre: 'Angel Hurtado',
        titulo:'Curso de Node'
    });
})

app.get('/elements',(req,res)=>{
    res.render('elements');
})

app.get('/generic',(req,res)=>{
    res.render('generic');
})

app.listen(8080)