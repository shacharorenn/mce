const express = require('express');
var usb = require('usb');
var tree = usb.getDeviceList();
const app = express();
const path = require('path');
const port = 9000;

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.get('/api/data', (req, res) => 
    {
        tree = usb.getDeviceList();
        res.json(tree)
    }
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))