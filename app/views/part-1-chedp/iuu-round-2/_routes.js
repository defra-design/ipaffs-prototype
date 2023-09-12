const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line

//  - approved establishment qutesion
router.post('/ae-route', function (req, res) {

  // Make a variable and give it the value from name
  var appEstRoute = req.session.data['add-establishment']
  if (appEstRoute == "add"){
    res.redirect('13a-approved-est-search')
  }

 else if (appEstRoute == "Save and continue"){
    res.redirect('09-iuu-docs')
  }
  
  })



//  iuu docs page - question to if they need to add catch certs
router.post('/iuu-doc-route', function (req, res) {

  // Make a variable and give it the value from name
  var iuuDocRoute = req.session.data['iuuDocType']

  // Check whether the variable matches a condition
  if (iuuDocRoute == "yes"){
    // Send user to next page
    res.redirect('09aa-multi-upload-catch')
  }
  
  else if (iuuDocRoute == "no") {
    res.redirect('14-addresses')
  }
})

//  catch cert attachments  - question to if they need to add more catch certs
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

  // Part 1 docs confirmation page
router.post('/iuu-doc-confirmation-route', function (req, res) {

  // Make a variable and give it the value from 'name'
  var iuuConfRoute = req.session.data['iuuConflink']
  if (iuuConfRoute == "Yes"){
    res.redirect('09d-iuu-docs-details-entered')
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