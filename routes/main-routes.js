const express = require('express');
const router = express.Router();
const { waterPlant } = require('./lib/particle');

module.exports = () => {
    router.get('/water-plant', async (req, res) => {
        waterPlant();
        res.sendStatus(200);
    });

    return router;
};
