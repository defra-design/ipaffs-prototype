const express = require('express')
const router = express.Router()



// Add your routes here - above the module.exports line


// Start folder specific route
router.use('/v1', require('./views/v1/_routes'))

router.use('/create-cheda', require('./views/create-cheda/_routes'))
router.use('/part-1-chedp/iuu-round-2', require('./views/par-1-chedp/iuu-round-2/_routes'))

module.exports = router



// Part 2 laboratory tests question
router.post('/laboratory-test', function (req, res) {

    // Make a variable and give it the value from name
    var laboratoryTests = req.session.data['labTestsRequired']
  
    // Check whether the variable matches a condition
    if (laboratoryTests == "true"){
      // Send user to next page
      res.redirect('/part-2/iuu/06a-laboratory')
    } else {
      // Send user to ineligible page
      res.redirect('/part-2/iuu/07-decision')
    }
  
  })


 

// Part 1 iuu docs page - first step with no docs added
router.post('/iuu-doc-route', function (req, res) {

  // Make a variable and give it the value from name
  var iuuDocRoute = req.session.data['iuuDocType']

  // Check whether the variable matches a condition
  if (iuuDocRoute == "Catch certificates"){
    // Send user to next page
     // Store the value in localStorage

    res.redirect('/part-1-chedp/iuu/09aa-multi-upload-catch')
  }
  
  else if (iuuDocRoute == "Processing statements") {
    res.redirect('/part-1-chedp/iuu/09a-multi-upload')
  }

 else if (iuuDocRoute == "Storage statements") {
  res.redirect('/part-1-chedp/iuu/09a-multi-upload')
}

else if (iuuDocRoute == "Save and return to task list") {
  res.redirect('/part-1-chedp/iuu/07-check-answers')
}


 else if (iuuDocRoute == "Save and continue"){
  res.redirect('/part-1-chedp/iuu/09e-iuu-confirmation')
}

})

// Part 1 iuu - catch certs entered page
router.post('/iuu-doc-route-entered', function (req, res) {

  // Make a variable and give it the value from name
  var iuuRoute = req.session.data['iuuDocType']
  if (iuuRoute == "Save and continue"){
    res.redirect('/part-1-chedp/iuu/09-catch-certificates')
  }

  if (iuuRoute == "Catch certificates"){
    res.redirect('/part-1-chedp/iuu/09aa-multi-upload-catch')
  }

  else if (iuuRoute == "Processing statements") {
    res.redirect('/part-1-chedp/iuu/09a-multi-upload')
  }

 else if (iuuRoute == "Storage statements") {
  res.redirect('/part-1-chedp/iuu/09a-multi-upload')
}

 else {
    res.redirect('/part-1-chedp/iuu/07-check-answers')
  }
  
  })

  // Part 1 iuu docs - catch certs and processing statements entered page
router.post('/iuu-doc-route-entered2', function (req, res) {

  // Make a variable and give it the value from name
  var iuuRoute2 = req.session.data['iuuDocType']
  if (iuuRoute2 == "Save and continue"){
    res.redirect('/part-1-chedp/iuu/09-catch-certificates')
  }

  if (iuuRoute2 == "Catch certificates"){
    res.redirect('/part-1-chedp/iuu/09aa-multi-upload-catch')
  }

  else if (iuuRoute2 == "Processing statements") {
    res.redirect('/part-1-chedp/iuu/09a-multi-upload')
  }

 else if (iuuRoute2 == "Storage statements") {
  res.redirect('/part-1-chedp/iuu/09a-multi-upload')
}

 else {
    res.redirect('/part-1-chedp/iuu/07-check-answers')
  }
  
  })

 // Part 1 add more catch certs question
 router.post('/09bb-iuu-doc-more', function (req, res) {

  // Make a variable and give it the value from name
  var iuuConfRoute = req.session.data['iuuConflink']
  if (iuuConfRoute == "Yes"){
    res.redirect('/part-1-chedp/iuu/09aa-multi-upload-catch')
  }

 else {
    res.redirect('/part-1-chedp/iuu/09d-iuu-docs-details-entered')
  }
  
  })

  // Part 1 add more other docs question
 router.post('/09b-iuu-doc-more', function (req, res) {

  // Make a variable and give it the value from name
  var iuuConfRoute = req.session.data['iuuConflink']
  if (iuuConfRoute == "Yes"){
    res.redirect('/part-1-chedp/iuu/09a-multi-upload')
  }

 else {
    res.redirect('/part-1-chedp/iuu/09dd-iuu-docs-details-entered')
  }
  
  })

  // Part 1 docs confirmation page
router.post('/iuu-doc-confirmation-route', function (req, res) {

  // Make a variable and give it the value from 'name'
  var iuuConfRoute = req.session.data['iuuConflink']
  if (iuuConfRoute == "Yes"){
    res.redirect('/part-1-chedp/iuu/09d-iuu-docs-details-entered')
  }

 else {
    res.redirect('/part-1-chedp/iuu/12-accompanying-docs')
  }
  
  })

// Part 1 ordinary accompanying docs page
router.post('/accom1-docs-route', function (req, res) {

  // Make a variable and give it the value from name
  var accomDocRoute = req.session.data['accDocRoutelink']
  if (accomDocRoute == "Add documents"){
    res.redirect('/part-1-chedp/iuu/12a-accompanying-docs-upload')
  }

 else if (accomDocRoute == "Save and continue"){
    res.redirect('/part-1-chedp/iuu/13-approved-est')
  }
  
  })

  // Part 1 ordinary accompanying docs page
router.post('/09g-inform-choice', function (req, res) {

  // Make a variable and give it the value from name
  var iuu100DocRoute = req.session.data['iuu100DocChoice']
  if (iuu100DocRoute == "Yes"){
    res.redirect('/part-1-chedp/iuu/12-accompanying-docs')
  }

 else if (iuu100DocRoute == "No"){
    res.redirect('/part-1-chedp/iuu/09-iuu-docs')
  }
  
  })

