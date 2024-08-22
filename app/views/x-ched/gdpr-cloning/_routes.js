const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Reference number validation
router.post('/route-validate-reference-number', function (req, res) {
  var enteredReference = req.session.data['reference-search']
  const validReference = ['GERMAN-IJKML68689900-13579002468']
  if (validReference.includes(enteredReference)) {
    res.redirect('03-certificate-found')
  } else {
    res.redirect('03a-certificate-not-found-page')
  }
  
})

module.exports = router



