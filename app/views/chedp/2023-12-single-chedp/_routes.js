const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line


/* Run this when submitting the form on 05-commodity-genus page
    to check if user wants to add more commodities,
    and if not,
      then check if importing conforming or non conforming goods,
        and redirect to appropriate Main reason for importing page
*/
router.post('/add-commodity-route', function (req, res) {
  var addCommodity = req.session.data['add-commodity']
  var conformUKRegulations = req.session.data['conform-uk-regulations']
  // if user wants to add more commodities, redirect back to Commodity page
  if (addCommodity == "Yes"){
    res.redirect('04-commodity')
  }
  // if user doesn't want to add more commodities or no answer is given, 
    // and is importing non conforming goods, redirect to Main reason for importing non conforming goods
    else if (conformUKRegulations == "No"){
      res.redirect('06-about-consignment-ncg')
    } 
    // and is importing conforming goods, or no answer is given, redirect to Main reason for importing conforming goods
    else {
      res.redirect('06-about-consignment')
    }
})


//  - risk route question - 06a-risk-category
router.post('/risk-route', function (req, res) {

  // Make a variable and give it the value from name
  var riskRoute = req.session.data['risk-category']
  if (riskRoute == "medium"){
    res.redirect('06b-risk-high-or-medium')
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

//  - approved establishment question
router.post('/ae-route', function (req, res) {

  // Make a variable and give it the value from name
  var appEstRoute = req.session.data['add-establishment']
  if (appEstRoute == "add"){
    res.redirect('13a-approved-est-search')
  }

 else if (appEstRoute == "Save and continue"){
    res.redirect('14-addresses')
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
  else {
    // Send user to 20-submitted-inspection-not-required page
    res.redirect('20-submitted-inspection-not-required')
  }

})


module.exports = router