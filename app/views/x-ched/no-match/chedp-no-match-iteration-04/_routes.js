const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'submit-notification'
router.post('/submit-notification', function (req, res) {

  // Make a variable and give it the value from 'gvms'
  var gvmsAnswer = req.session.data['gvms']

  // Check whether the variable matches a condition
  if (gvmsAnswer == "Yes"){
    // Send user to 20-submitted-gvms-yes page
    res.redirect('20-submitted-gvms-yes')
  } 
  else if (gvmsAnswer == "No"){
    // Send user to 20-submitted-inspection-not-required page
    res.redirect('20-submitted-inspection-not-required')
  }

})


module.exports = router