// Importazione dei moduli necessari
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const dotenv = require('dotenv');

// Caricamento delle variabili d'ambiente
dotenv.config();

// Creazione dell'applicazione Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());  // Permette di leggere i dati JSON delle richieste POST

// Configurazione del database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    return console.error('Errore durante la connessione al database: ' + err.message);
  }
  console.log('Connesso al database MySQL con successo');
});

// Definizione di una route di prova
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Impostazione della porta e avvio del server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});