const path = require('path');
const http = require('http');
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.listen(3000, () => {
    console.log(`Server is up on port ${port}`);
});