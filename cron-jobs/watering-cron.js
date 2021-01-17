const { CronJob } = require('cron');
const { waterPlant } = require('../lib/particle');

// run job every Sunday at 6:59a
const job = new CronJob('59 6 * * 0', waterPlant, null, false, 'America/New_York');
job.start();
