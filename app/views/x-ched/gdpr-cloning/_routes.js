const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Postcode validation
router.post('/route-validate-reference-number', function (req, res) {
  var enteredPostocde = req.session.data['reference-search']
  const validPostcodes = ['GERMAN-IJKML68689900-13579002468']
  if (validPostcodes.includes(enteredPostocde)) {
    res.redirect('03-certificate-found')
  } else {
    res.redirect('03a-certificate-not-found-page')
  }
  
})

module.exports = router