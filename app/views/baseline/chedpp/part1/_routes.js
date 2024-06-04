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
      res.redirect('02-01-commodity-tree-genus-search')
    }
  
    else if (manCsvRoute == "Upload from a CSV file"){
      res.redirect('02-01-01-upload')
    }
  
   else {
      res.redirect('00-notification-hub')
    }
    
    })

