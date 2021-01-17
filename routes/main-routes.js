const express = require('express');
const router = express.Router();
const path = require('path');
const { waterPlant } = require('../lib/particle');

module.exports = () => {
    router.get('/', async (req, res) => {
        res.sendFile(path.join(process.cwd(), 'views', 'index.html'));
    });

    router.get('/water-plant', async (req, res) => {
        waterPlant();
        res.sendStatus(200);
    });

    return router;
};
