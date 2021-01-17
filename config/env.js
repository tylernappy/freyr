require('dotenv').config();

const nodeEnv = process.env.NODE_ENV || 'development';

const environments = {
    development: {
        environment: 'development',
        particle: {
            username: process.env.PARTICLE_USERNAME,
            password: process.env.PARTICLE_PASSWORD,
            deviceId: process.env.PARTICLE_DEVICE_ID,
            accessToken: process.env.PARTICLE_ACCESS_TOKEN, // generated programmtically but stored here b/c expires ini 90 days https://docs.particle.io/reference/SDKs/javascript/#logging-in
        },
    },
    test: {
        environment: 'test',
    },
    staging: {
        environment: 'staging',
    },
    production: {
        environment: 'production',
        particle: {
            username: process.env.PARTICLE_USERNAME,
            password: process.env.PARTICLE_PASSWORD,
            deviceId: process.env.PARTICLE_DEVICE_ID,
        },
    },
};

module.exports = environments[nodeEnv];
