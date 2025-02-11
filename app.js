require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Configuration EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware pour les fichiers statiques (CSS et images)
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));  // Pour traiter les données POST

// Route pour gérer la soumission du formulaire
app.post("/contact", (req, res) => {
    const { nom, prenom, email, message } = req.body;
    console.log(`Message reçu : ${nom} ${prenom} - ${email} : ${message}`);
    res.send("Merci pour votre message ! Nous vous répondrons bientôt.");
});


// Route principale
app.get("/", (req, res) => {
    res.render('index');
});

//Route équipe
app.get("/equipes", (req,res) => {
    res.render('equipe');
});

// Route Classement
app.get("/classement", (req, res) => {
    res.render('classement');
});

// Route Contact
app.get("/contact", (req, res) => {
    res.render('Contact');
});

// Route Divers
app.get("/divers", (req, res) => {
    res.render('Divers');
});

app.use((req, res) => {
    res.status(404).render('404');
});


module.exports = app;
