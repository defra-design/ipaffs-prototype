const express = require('express')
const router = express.Router()

//  02-01-commodity-tree-code-search
router.post('/commodity-code-validation', function (req, res) {
  var commodityCode = req.session.data['commodity-code']
  if (commodityCode == "01061900") {
    res.redirect('02-01a-commodity-tree-code-search-error')
  }
  else {
    res.redirect('02-03-commodity-species')
  }
})

//  05-01-transport-to-poe
router.post('/means-of-transport', function (req, res) {
  var transportMeans = req.session.data['transport-means-before']
  if (transportMeans == "Airplane") {
    res.redirect('05-02-transport-after-poe')
  }
  else {
    res.redirect('05-03-goods-movement-services')
  }
})
  
 
module.exports = router