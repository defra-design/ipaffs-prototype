const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/route-validate-reference-number', function (req, res) {
  var enteredReference = req.session.data['certificate-reference-number']
  if (enteredReference == "GERMAN-IJKML68689900-13579002468") {
    res.redirect('03a-certificate-found')
  }
  if (enteredReference == "NETHER-IJKML12345678-8989664400") {
    res.redirect('03b-phyto-certificate-found')
  }

  else if (enteredReference == "") {
    res.redirect('02a-select-country-origin-all-errors')
  }

  else {
    res.redirect('04a-certificate-not-found')
  }
})

module.exports = router




