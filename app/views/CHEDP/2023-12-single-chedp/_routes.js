const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line


//  - add more commodities question - 05-commodity-genus
router.post('/add-comm-route', function (req, res) {

  // Make a variable and give it the value from name
  var addCommRoute = req.session.data['add-commodity']
  if (addCommRoute == "yes"){
    res.redirect('04-commodity')
  }

 else if (addCommRoute == "no"){
    res.redirect('06-about-consignment')
  }
  
  })


//  - risk route question - 06a-risk-category
router.post('/risk-route', function (req, res) {

  // Make a variable and give it the value from name
  var riskRoute = req.session.data['risk-category']
  if (riskRoute == "medium"){
    res.redirect('06b-risk-high')
  }

 else if (riskRoute == "low"){
    res.redirect('07-check-answers')
  }
  
  })


  // Part 1 ordinary accompanying docs page
router.post('/accom-docs-route', function (req, res) {

  // Make a variable and give it the value from name
  var accomDocRoute = req.session.data['accDocRoutelink']
  if (accomDocRoute == "Add documents"){
    res.redirect('12a-accompanying-docs-upload')
  }

 else if (accomDocRoute == "Save and continue"){
    res.redirect('13-approved-est')
  }
  
  })



// Run this code when a form is submitted to 'submit-notification'
router.post('/submit-notification', function (req, res) {

  // Make a variable and give it the value from 'gvms'
  var gvmsAnswer = req.session.data['gvms']

  // Check whether the variable matches a condition
  if (gvmsAnswer == "Yes"){
    // Send user to 20-submitted-gvms-yes page
    res.redirect('20-submitted-gvms-yes')
  } 
  else if (gvmsAnswer == "No"){
    // Send user to 20-submitted-inspection-not-required page
    res.redirect('20-submitted-inspection-not-required')
  }

})


module.exports = router