const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line


router.post('/add-commodity-route', function (req, res) {
  var addCommodity = req.session.data['add-commodity']
  var conformUKRegulations = req.session.data['conform-uk-regulations']
  // if user wants to add more commodities, redirect back to Commodity page
  if (addCommodity == "Yes"){
    res.redirect('02-01-commodity')
  }
})


router.post('/submit-notification', function (req, res) {
  var gvmsAnswer = req.session.data['gvms']
  var riskRoute = req.session.data['risk-category']
  // if GVMS is yes, redirect to GVMS confrimation page
  if (gvmsAnswer == "Yes"){
    res.redirect('10-01c-submitted-using-gvms')
  } 
  // if GVMS is no or no answer is given,
    // and risk category is low, redirect to Inspection not required confirmation page
    else if (riskRoute == "low"){
      res.redirect('10-01a-submitted-inspection-not-required')
    }
    // in any other case, redirect to Inspection required page
    else {
      res.redirect('10-01b-submitted-inspection-required-entry')
    }
})
 


  




module.exports = router