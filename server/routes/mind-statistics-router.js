const express = require('express')

const MindStatCtrl = require('../controllers/mind-statistics-ctrl')

const router = express.Router()

router.get('/mindstats/list', MindStatCtrl.getMindStats)

module.exports = router