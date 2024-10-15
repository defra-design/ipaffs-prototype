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

//  - radio routing - which certificate they see, dependant on ched type selected
router.post('/route-ecerttype', function (req, res) {
  // Make a variable and give it the value from name
  var ecerttypeRoute = req.session.data['cert-type']
  if (ecerttypeRoute == "CHEDA") {
    res.redirect('03-certificate-found-cheda')
  }
  else if (ecerttypeRoute == "CHEDP") {
    res.redirect('03-certificate-found-chedp')
  }
  
 else if (ecerttypeRoute == "CHEDPP"){
    res.redirect('03-certificate-found-chedpp')
  }  
})


module.exports = router




