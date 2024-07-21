const express = require('express');
const {Infontroller} = require('../../controllers/index');

const router = express.Router();

router.get('/info', Infontroller.info);

module.exports = router;