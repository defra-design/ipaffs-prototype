const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// console.log( 'This is the V1 _routes file' );


/* 
  Run this when submitting the form on 05-commodity-genus page
    to check if user wants to add more commodities,
    and if not,
      then check if importing conforming or non conforming goods,
        and redirect to appropriate Main reason for importing page
*/

//  - How to add hc
router.post('/route-cheda-how-add', function (req, res) {
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
    res.redirect('03-02-documents')
  }  
})

//  - Confirm radio routing - this one is for when user has already reviewed and wants to amend
router.post('/route-x-a-docs-info-amend', function (req, res) {
  // Make a variable and give it the value from name
  var ecertRoute = req.session.data['addhc']
  if (ecertRoute == "Clone-info") {
    res.redirect('07-00-review-clone-success')
  }
  else if (ecertRoute == "Clone-docs") {
    res.redirect('03-01-certificate-clone')
  }
  
 else {
    res.redirect('03-01-certificate-clone')
  }  
})


  
  //  - Confirm radio routing
  router.post('/route-x-a-docs-info', function (req, res) {
    // Make a variable and give it the value from name
    var ecertRoute = req.session.data['docs-info']
    if   (ecertRoute == "all"){
      res.redirect('07-00-review-clone-info-error')
   }
   else {
      res.redirect('03-01-certificate-clone')
    }  
  })
  
  //  - documents - 10-additional-details
  router.post('/add-documents', function (req, res) {
    var riskRoute = req.session.data['risk-category']
    if (riskRoute == "low"){
      res.redirect('03-02-documents')
    }
   else {
      res.redirect('03-01-certificate')
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
  
 
  
  
  
  module.exports = router