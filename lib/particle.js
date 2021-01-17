const Particle = require('particle-api-js');
const particle = new Particle();
const { deviceId, accessToken } = require('../config/env').particle;

const waterPlant = async () => {
    try {
        const response = await particle.callFunction({ deviceId, name: 'waterPlant', auth: accessToken });
        console.log(response);
    } catch (e) {
        console.log(e);
    }
};

const flashDevice = async () => {
    try {
        const response = await particle.flashDevice({ deviceId, files: { file1: './firmware/index.ino' }, auth: accessToken });
        console.log(response);
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    waterPlant,
    flashDevice,
};
