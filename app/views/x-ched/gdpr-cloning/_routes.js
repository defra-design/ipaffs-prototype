const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/route-validate-reference-number', function (req, res) {
  var enteredReference = req.session.data['certificate-reference-number']
  if (enteredReference == "GERMAN-IJKML68689900-13579002468") {
    res.redirect('03-certificate-found')
  }
  else if (enteredReference == "") {
    res.redirect('02a-select-country-origin-all-errors')
  }
  else {
    res.redirect('03a-certificate-not-found-page')
  }
})

module.exports = router



