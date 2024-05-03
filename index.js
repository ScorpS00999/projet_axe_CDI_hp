const bodyParser = require("body-parser");

const ip = require("ip");

const express = require("express");
const routes = require("./routes/start");
const cors = require("cors");
const app = express();
const port = 3000;
const idAdder = ip.address();

app.use(cors());
//app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

let lastHouseVisited = "Gryffindor";

app.get("/", (req, res) => {
    res.json({ message: lastHouseVisited });
});

app.post("/", (req, res) => {
    lastHouseVisited = req.body.house;
    res.json({ message: lastHouseVisited });
});

app.listen(port, () => {
    console.log(`Server run http://${idAdder}:${port}`);
});

// Get /users = montre tous les utilisatuers
// Post /users = ajouter un utilisateur
// Get /users/:id = recup un utilisateurs
// Put /users/id = modifier un profil
// Delete /users/id = suppr un utilisateur

/* 
app.get("/users", (req, res) => {
    return res.status(200).send(users);
});

app.post("/users", (req, res) => {
    const body = req.body;
    users.push(body);
    return res.status(201).send(users);
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find((element) => element.id === parseInt(id));

    if (user === undefined) {
        return res.status(404).send("User not found");
    }

    return res.status(200).send(user);
});

app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    let user = users.find((element) => element.id === parseInt(id)); //le truc element marche comme le foreach

    if (user === undefined) {
        return res.status(404).send("User not found");
    }

    user = body;

    return res.send(users);
});

app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find((element) => element.id === parseInt(id));

    if (user === undefined) {
        return res.status(404).send("User not found");
    }

    users = users.filter((element) => element.id !== parseInt(id));

    return res.status(200).send(users);
});
*/
