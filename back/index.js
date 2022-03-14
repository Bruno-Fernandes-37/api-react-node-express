const express = require('express');
const app = express();
const connection = require("./connection");
const wilderController = require("./controllers/WildersController");
require('dotenv').config();
const PORT = process.env.PORT;
/* app.use(cors()); */

//middleware to add in order to read json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes 
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'api wilder');
});

app.get('/api/wilders/', wilderController.read);
app.post('/api/wilders/create', wilderController.create);
app.post("/api/wilders/update", wilderController.update);
app.delete("/api/wilders/:id/delete", wilderController.delete);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
