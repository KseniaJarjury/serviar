const express = require("express");
const mysql = require('mysql');
const path = require ('path')
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors());

// Hacer que node sirva los archivos de nuestro app React
app.use(express.static(path.resolve(__dirname, '../frontend')));

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "serviar"
});

app.post('/registrar', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    db.query(
        "INSERT INTO Usuario (email, password) VALUES (?, ?)",
        [email, password],
        (err, result) => {
            console.log(err);
        }
    );
    
});

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});




// const ViteExpress = require("vite-express");

// const app = express();


// const server = app.listen(3000, () => {
//     console.log("Server is listening...");
// });

// ViteExpress.bind(app, server);