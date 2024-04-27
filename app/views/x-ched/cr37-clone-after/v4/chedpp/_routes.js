const express = require('express')
const router = express.Router()


// Add your routes here - above the module.exports line

// console.log( 'This is the V1 _routes file' );

module.exports = router


// Manual or CSV radio question
router.post('/chedpp-route-how-enter', function (req, res) {
  
    // Make a variable and give it the value from name
    var manCsvRoute = req.session.data['addcommodity']
    if (manCsvRoute == "Manual entry"){
      res.redirect('02-dg-01-commodity')
    }
  
    else if (manCsvRoute == "Upload from a CSV file"){
      res.redirect('02-dg-01-01-upload')
    }
  
   else {
      res.redirect('00-check-answers')
    }
    
    })


      //  - How to add hc
router.post('/route-chedpp-how-add', function (req, res) {
  // Make a variable and give it the value from name
  var howAdd = req.session.data['addhc']
  if (howAdd == "Clone") {
    res.redirect('03a-certificate-reference')
  }
 else if (howAdd == "Manual") {
    res.redirect('03-do-01a-phyto')
  }
 else {
    res.redirect('03-do-01-documents')
  }  
})

    