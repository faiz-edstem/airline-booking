const express = require('express');
const { PORT } = require('./config');
const apiRoutes = require('./routes/index')

const app = express();

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Started server at port: ${PORT}`);
})