const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Start folder specific route
router.use('/v1', require('./views/v1/_routes'))

router.use('/v2', require('./views/v2/_routes'))
