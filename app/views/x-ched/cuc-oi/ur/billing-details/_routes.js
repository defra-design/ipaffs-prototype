const express = require('express')
const router = express.Router()
const util = require('util')
// Add your routes here - above the module.exports line

// Postcode validation
router.post('/route-validate-postcode', function (req, res) {
  var enteredPostocde = req.session.data['postcode-search']
  const validPostcodes = ['PR02AA', 'PR0 2AA', 'pr0 2aa', 'pr02aa', 
                          'WN3 2CW', 'WN32CW', 'wn3 2cw', 'wn32cw', 
                          'RG17 7LS', 'RG177LS', 'rg17 7ls', 'rg177ls', 
                          'RG21 7DB', 'RG217DB', 'rg21 7db', 'rg217db', 
                          'SP12 21AG', 'SP1221AG', 'sp12 21ag', 'sp1221ag',  
                          'SP4 7HW', 'SP47HW', 'sp4 7hw', 'sp47hw']
  if (validPostcodes.includes(enteredPostocde)) {
    res.redirect('03-select-billing-address')
  } else {
    res.redirect('02-billing-postcode-errors')
  }
  
})

module.exports = router