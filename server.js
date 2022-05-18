const express = require('express')

// variabelen aanmaken en declareren
const app = express();
const port = 1337;

// routes
app.get('/', (req, res) => {
    res.send('Hello world')
})


// server starten
app.listen(port, () => {
    console.log('Listening on port 1337');
})