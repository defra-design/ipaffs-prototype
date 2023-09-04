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



// Part 1 iuu accompanying docs page
router.post('/iuu-doc-route', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var iuuDocRoute = req.session.data['iuuDocType']

  

  // Check whether the variable matches a condition
  if (iuuDocRoute == "Catch certificates"){
    // Send user to next page
     // Store the value in localStorage

    res.redirect('/part-1-chedp/iuu/09aa-multi-upload-catch')
  }
  else if (iuuDocRoute == "catchcert1") {
    // Send user to ineligible page
    res.redirect('/part-1-chedp/iuu/09-iuu-docs-1entered')
  }
  
  else if (iuuDocRoute == "Processing statements") {
    // Send user to ineligible page
    res.redirect('/part-1-chedp/iuu/09a-multi-upload')
  }

  else if (iuuDocRoute == "processingstatement1") {
    // Send user to ineligible page
    res.redirect('/part-1-chedp/iuu/09-iuu-docs-1entered')
  }

 else if (iuuDocRoute == "Storage statements") {
  // Send user to ineligible page
  res.redirect('/part-1-chedp/iuu/09a-multi-upload')
}

else if (iuuDocRoute == "storagedoc1") {
  // Send user to ineligible page
  res.redirect('/part-1-chedp/iuu/09-iuu-docs-1entered')
}

else if (iuuDocRoute == "Save and return to task list") {
  // Send user to ineligible page
  res.redirect('/part-1-chedp/iuu/07-check-answers')
}


 else   {
  // Send user to ineligible page
  res.redirect('/part-1-chedp/iuu/09e-iuu-confirmation')
}

})

