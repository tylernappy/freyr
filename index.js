const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

require('./cron-jobs/watering-cron');

const mainRoutes = require('./routes/main-routes');
app.use(mainRoutes());

app.listen(port);

