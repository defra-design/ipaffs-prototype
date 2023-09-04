const express = require('express')
const router = express.Router()



// Add your routes here - above the module.exports line


// Start folder specific route
router.use('/v1', require('./views/v1/_routes'))

router.use('/create-cheda', require('./views/create-cheda/_routes'))

module.exports = router



// Part 2 laboratory tests question
router.post('/laboratory-test', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
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



// Part 1 iuu docs page
router.post('/iuu-doc-route', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
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

// Part 1 docs entered page
router.post('/iuu-doc-route-entered', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var iuuRoute = req.session.data['iuuDocType']
  if (iuuRoute == "Save and continue"){
    res.redirect('/part-1-chedp/iuu/09e-iuu-confirmation')
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
    res.redirect('/part-1-chedp/iuu/09e-iuu-confirmation')
  }
  
  })

  // Part 1 docs entered page
router.post('/iuu-doc-route-entered2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var iuuRoute2 = req.session.data['iuuDocType']
  if (iuuRoute2 == "Save and continue"){
    res.redirect('/part-1-chedp/iuu/09e-iuu-confirmation')
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
    res.redirect('/part-1-chedp/iuu/09e-iuu-confirmation')
  }
  
  })

  // Part 1 docs confirmation page
router.post('/iuu-doc-confirmation-route', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var iuuConfRoute = req.session.data['iuuConflink']
  if (iuuConfRoute == "Yes"){
    res.redirect('/part-1-chedp/iuu/09d-iuu-docs-details-entered')
  }

 else {
    res.redirect('/part-1-chedp/iuu/12-accompanying-docs')
  }
  
  })

// Part 1 ordinary accompanying docs page
router.post('/accom-docs-route', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var accomDocRoute = req.session.data['accDocRoutelink']
  if (accomDocRoute == "Add documents"){
    res.redirect('/part-1-chedp/iuu/12a-accompanying-docs-upload')
  }

 else if (accomDocRoute == "Save and continue"){
    res.redirect('/part-1-chedp/iuu/13-approved-est')
  }
  
  })