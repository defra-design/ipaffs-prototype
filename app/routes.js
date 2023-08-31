const express = require('express')
const router = express.Router()



// Add your routes here - above the module.exports line


// Start folder specific route
router.use('/v1', require('./views/v1/_routes'))

router.use('/create-cheda', require('./views/create-cheda/_routes'))

module.exports = router



// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/part-2/iuu/06-laboratory', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var laboratoryTests = req.session.data['laboratory-tests']
  
    // Check whether the variable matches a condition
    if (laboratoryTests == "Yes"){
      // Send user to next page
      res.redirect('/part-2/iuu/06a-laboratory')
    } else {
      // Send user to ineligible page
      res.redirect('/part-2/iuu/07a-decision')
    }
  
  })