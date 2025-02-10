const app = require("./app");
const PORT = process.env.PORT || 1345;

app.listen(PORT,() => {
    console.log('Serveur lancé sur http://localhost:${PORT}');
});

server.listen(PORT, () => {
    console.log(
        `${date.toLocaleDateString()} ${date.toLocaleTimeString()} - Le serveur est activé au port : ${PORT}`
    );
});
