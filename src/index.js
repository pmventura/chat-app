const path = require('path');
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.get('/', (req, res) => {

});

app.listen(3000, () => {
    console.log('app is running on port 3000');
});