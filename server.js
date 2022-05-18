const express = require('express')

// variabelen aanmaken en declareren
const app = express();
const port = 1337;

// Middleware
app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/register', (req, res) => {
    res.send('Register here..... eventually')
})

app.get('/changepassword', (req, res) => {
    res.send('Change your password here..... eventually')
})

// Ongeldige routes geven 404
app.use( (req, res) => {
    res.status(404).send("Error 404: page not found")
})

// server starten
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})