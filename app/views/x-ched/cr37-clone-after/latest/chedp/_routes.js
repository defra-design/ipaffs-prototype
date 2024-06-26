const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line



//  - How to add hc
router.post('/route-chedp-how-add', function (req, res) {
  // Make a variable and give it the value from name
  var howAdd = req.session.data['addhc']
  if (howAdd == "Clone-info") {
    res.redirect('03a-certificate-reference')
  }
  else if (howAdd == "Clone-doc") {
    res.redirect('03a-certificate-reference')
  }
 else if (howAdd == "Manual") {
    res.redirect('03-01-certificate')
  }
 else {
    res.redirect('03-01-certificate')
  }  
})

//  - Confirm radio routing - this one is for when user has already reviewed and wants to amend
router.post('/route-x-p-docs-info-amend', function (req, res) {
  // Make a variable and give it the value from name
  var ecertRoute = req.session.data['addhc']
  if (ecertRoute == "Clone-info") {
    res.redirect('07-00-review-clone-success-data')
  }
  else if (ecertRoute == "Clone-docs") {
    res.redirect('07-00-review-clone-success')
  }
  
 else {
    res.redirect('03-01-certificate-clone')
  }  
})


 //  - risk route question - 06a-risk-category
 router.post('/route-x-p-docs-info', function (req, res) {
  
  // Make a variable and give it the value from name
  var ecertRoute = req.session.data['docs-info']
  if (ecertRoute == "all"){
    res.redirect('07-00-review-clone-info-error')
  }
 else {
    res.redirect('03-01-certificate-clone')
  }  
})

/* 
  Run this when submitting the form on 05-commodity-genus page
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
    else if (conformUKRegulations == "ncg"){
      res.redirect('06-about-consignment-ncg')
    } 
    // in any other case, redirect to Main reason for importing conforming goods
    else {
      res.redirect('06-about-consignment-cg')
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
    res.redirect('00-check-answers')
  }
  
})

//  - documents - 10-additional-details
router.post('/add-documents', function (req, res) {
  var riskRoute = req.session.data['risk-category']
  if (riskRoute == "low"){
    res.redirect('03-02-documents')
  }
 else {
    res.redirect('01-ac-04-how-add-hc')
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

// 
/* 
  Run this code when the notification is submitted on 07-02-declaration
    to check if GVMS is used,
    and if not,
      then check risk-category is low,
        and redirect to appropriate Confirmation page
*/
router.post('/submit-notification', function (req, res) {
  var gvmsAnswer = req.session.data['gvms']
  var riskRoute = req.session.data['risk-category']
  // if GVMS is yes, redirect to GVMS confrimation page
  if (gvmsAnswer == "Yes"){
    res.redirect('20-submitted-gvms-yes')
  } 
  // if GVMS is no or no answer is given,
    // and risk category is low, redirect to Inspection not required confirmation page
    else if (riskRoute == "low"){
      res.redirect('20-submitted-inspection-not-required')
    }
    // in any other case, redirect to Inspection required page
    else {
      res.redirect('20-submitted-inspection-required')
    }

})


module.exports = router