const express = require('express')
const app = express()
const path = require('path');
const port = 9000

// TODO: 
const data = {message: 'idan',
array: [
    'a', 'b', 'c'
]}

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.get('/api/data', (req, res) =>
    res.json(data))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))