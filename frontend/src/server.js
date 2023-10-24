const express = require("express");

const ViteExpress = require("vite-express");

const app = express();


const server = app.listen(3000, () => {
    console.log("Server is listening...");
});

ViteExpress.bind(app, server);