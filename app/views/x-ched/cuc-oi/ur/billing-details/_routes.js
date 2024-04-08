const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line

// Check if postcode is empty and send user to postcode not found page
router.post('/route-validate-postcode', function (req, res) {
  var postcodeSearch = req.session.data['postcode-search']

  // Check whether the variable matches a condition
  if (postcodeSearch == "" ){
    // Send user to postcode not found page
    res.redirect('02-billing-postcode-errors')
  }  else {
    // Send user to select billing address page
    res.redirect('03-select-billing-address')
  }

})

module.exports = router