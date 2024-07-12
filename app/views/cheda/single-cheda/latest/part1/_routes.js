const express = require('express')
const router = express.Router()

//  02-01-commodity-tree-code-search
router.post('/commodity-code-validation', function (req, res) {
  var commodityCode = req.session.data['commodity-code']
  if (commodityCode == "01061900") {
    res.redirect('02-02a-commodity-tree-code-search-expanded-error')
  }
  else {
    res.redirect('02-03-commodity-species')
  }
})
  
 
module.exports = router