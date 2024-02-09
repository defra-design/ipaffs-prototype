const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line

// Check if postcode is empty and send user to postcode not found page
router.post('/validate-postcode', function (req, res) {
  var billingAddressPostocode = req.session.data['billing-address-postcode']

  // Check whether the variable matches a condition
  if (billingAddressPostocode == "" ){
    // Send user to postcode not found page
    res.redirect('02b-billing-postcode-not-found')
  }  else {
    // Send user to select billing address page
    res.redirect('03-select-billing-address')
  }

})

module.exports = router