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
router.post('/route-clone-how-add', function (req, res) {
  // Make a variable and give it the value from name
  var howAdd = req.session.data['addhc']
  if (howAdd == "Clone-info") {
    res.redirect('20-02-certificate-reference')
  }
  else if (howAdd == "Clone-doc") {
    res.redirect('20-02-certificate-reference')
  }
 else if (howAdd == "Manual") {
    res.redirect('../cheda/03-02-latest-health-cert')
  }
 else {
    res.redirect('../cheda/03-03-accompanying-documents')
  }  
})

//  - Confirm radio routing - this one is for when user has already reviewed and wants to amend
router.post('/route-clone-docs-info-amend', function (req, res) {
  // Make a variable and give it the value from name
  var ecertRoute = req.session.data['addhc']
  if (ecertRoute == "Clone-info") {
    res.redirect('07-00-review-clone-success-data')
  }
  else if (ecertRoute == "Clone-docs") {
    res.redirect('07-00-review-clone-success')
  }
  
 else {
    res.redirect('07-00-review-clone-success-data')
  }  
})


  
  //  - Confirm radio routing
  router.post('/route-clone-docs-info', function (req, res) {
    // Make a variable and give it the value from name
    var ecertRoute = req.session.data['docs-info']
    if   (ecertRoute == "all"){
      res.redirect('07-00-review-clone-info-error')
   }
   else {
      res.redirect('03-01-certificate-clone')
    }  
  })
  
 
  
 
  
  
  
  module.exports = router