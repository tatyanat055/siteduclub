const http = require("http");
const app = require("./app");
console.log("Le module 'app' est chargé !");


const PORT = 1211;
const server = http.createServer(app);

server.listen(PORT, () => {
    const date = new Date();
    console.log(
        `${date.toLocaleDateString()} ${date.toLocaleTimeString()} - Le serveur est activé au port : ${PORT}`
    );
});
