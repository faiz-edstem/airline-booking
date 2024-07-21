const express = require('express');
const { ServerConfig, Logger } = require('./config');
const apiRoutes = require('./routes/index')

const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Started server at port: ${ServerConfig.PORT}`);
    // Logger.info("Successfully Started the server", "root", {})
})