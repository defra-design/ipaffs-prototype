const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line



//  - add more commodities question -05-commodity-genus
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

  // - Do you have an existing health certificate?
  router.post('/creation-route', function (req, res) {

    var exisingHealthCertificate = req.session.data['existing-certificate']

    // if YES redirect to eCert path
    if (exisingHealthCertificate == "yes"){
      res.redirect('03a-certificate-reference')
    }

    // if NO redirect to manual creation path
    else if (exisingHealthCertificate == "no"){
      res.redirect('04-commodity')
    }

  })

  // - certificate reference number look up
  router.post('/certificate-lookup', function (req, res) {

    var certificateReferenceNumber = req.session.data['certificate-reference']

    // if certificate found redirect to certificate details page
    if (certificateReferenceNumber == "NZL2021/PPCS2/999999"){
      res.redirect('03aa-certificate-details')
    }

    // if certificate not found redirect to page saying it is not found
    else {
      res.redirect('03ab-certificate-not-found')
    }

  })

  //  - correct HC? 03aa-certificate-details
router.post('/correct-hc-route', function (req, res) {

  // Make a variable and give it the value from name
  var correctHCRoute = req.session.data['correctHC']
  var notCorrectHCRoute = req.session.data['notCorrectHC']
  if (correctHCRoute == "yes"){
    res.redirect('18-review-errors')
  }

 else if (notCorrectHCRoute == "reenter"){
    res.redirect('03a-certificate-reference')
  }

  else if (notCorrectHCRoute == "continue-manual"){
    res.redirect('04-commodity')
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



//  iuu docs page - question to if they need to add catch certs - 09-iuu-docs
router.post('/iuu-doc-route', function (req, res) {

  // Make a variable and give it the value from name
  var iuuDocRoute = req.session.data['iuuDocType']

  // Check whether the variable matches a condition
  if (iuuDocRoute == "yes"){
    // Send user to next page
    res.redirect('09aa-multi-upload-catch')
  }
  
  else if (iuuDocRoute == "no") {
    res.redirect('12-accompanying-docs')
  }
})

//  catch cert attachments page -  add more catch certs or details - 09-catch-certificates
router.post('/catchAttach-route', function (req, res) {

  // Make a variable and give it the value from name
  var iuuDocRoute = req.session.data['iuuCatchAttach']

  // Check whether the variable matches a condition
  if (iuuDocRoute == "yes"){
    // Send user to next page
    res.redirect('09aa-multi-upload-catch')
  }
  
  else if (iuuDocRoute == "no") {
    res.redirect('09bb-multi-doc-details-catch')
  }

  else if (iuuDocRoute == "add-details") {
    res.redirect('09bb-multi-doc-details-catch')
  }
  else if (iuuDocRoute == "add-details-2") {
    res.redirect('09bb-multi-doc-details-catch-3')
  }
  else if (iuuDocRoute == "Continue") {
    res.redirect('09e-iuu-confirmation')
  }
  else if (iuuDocRoute == "no-confirm") {
    res.redirect('09e-iuu-confirmation')
  }
})







// Part 1 iuu - catch certs entered page
router.post('/iuu-doc-route-entered', function (req, res) {

  // Make a variable and give it the value from name
  var iuuRoute = req.session.data['iuuDocType']
  if (iuuRoute == "Save and continue"){
    res.redirect('09-catch-certificates')
  }

  if (iuuRoute == "Catch certificates"){
    res.redirect('09aa-multi-upload-catch')
  }

  else if (iuuRoute == "Processing statements") {
    res.redirect('09a-multi-upload')
  }

 else if (iuuRoute == "Storage statements") {
  res.redirect('09a-multi-upload')
}

 else {
    res.redirect('07-check-answers')
  }
  
  })

  // Part 1 iuu docs - catch certs and processing statements entered page
router.post('/iuu-doc-route-entered2', function (req, res) {

  // Make a variable and give it the value from name
  var iuuRoute2 = req.session.data['iuuDocType']
  if (iuuRoute2 == "Save and continue"){
    res.redirect('09-catch-certificates')
  }

  if (iuuRoute2 == "Catch certificates"){
    res.redirect('09aa-multi-upload-catch')
  }

  else if (iuuRoute2 == "Processing statements") {
    res.redirect('09a-multi-upload')
  }

 else if (iuuRoute2 == "Storage statements") {
  res.redirect('09a-multi-upload')
}

 else {
    res.redirect('07-check-answers')
  }
  
  })

 // Part 1 add more catch certs question
 router.post('/09bb-iuu-doc-more', function (req, res) {

  // Make a variable and give it the value from name
  var iuuConfRoute = req.session.data['iuuConflink']
  if (iuuConfRoute == "Yes"){
    res.redirect('09aa-multi-upload-catch')
  }

 else {
    res.redirect('09d-iuu-docs-details-entered')
  }
  
  })

  // Part 1 add more other docs question
 router.post('/09b-iuu-doc-more', function (req, res) {

  // Make a variable and give it the value from name
  var iuuConfRoute = req.session.data['iuuConflink']
  if (iuuConfRoute == "Yes"){
    res.redirect('09a-multi-upload')
  }

 else {
    res.redirect('09dd-iuu-docs-details-entered')
  }
  
  })

  // Part 1 docs confirmation page - 09e-iuu
router.post('/iuu-doc-confirmation-route', function (req, res) {

  // Make a variable and give it the value from 'name'
  var iuuConfRoute = req.session.data['iuuConflink']
  if (iuuConfRoute == "Yes"){
    res.redirect('09-catch-certificates-complete')
  }

 else {
    res.redirect('12-accompanying-docs')
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

  // Part 1 ordinary accompanying docs page
router.post('/09g-inform-choice', function (req, res) {

  // Make a variable and give it the value from name
  var iuu100DocRoute = req.session.data['iuu100DocChoice']
  if (iuu100DocRoute == "Yes"){
    res.redirect('12-accompanying-docs')
  }

 else if (iuu100DocRoute == "No"){
    res.redirect('09-iuu-docs')
  }
  
  })




module.exports = router