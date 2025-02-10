require('dotenv').config();
const express = require ('express');
const app = express ();
const path = require ('path');

//Configuration EJS 
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

//Middleware pour les fichiers statiques (CSS et images)
app.use(express.static(path.join(__dirname,'public')));

//Route principale 
app.get("/", (req, res) => {
    res.render('accueil');
});

//Démarrer le serveur 
const PORT = 1345;
app.listen(PORT,() => {
    console.log ('Serveur lancé sur http://localhost:$PORT}')
});