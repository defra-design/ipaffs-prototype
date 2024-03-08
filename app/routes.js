const express = require('express')
const router = express.Router()



// Add your routes here - above the module.exports line


// Start folder specific route
// router.use('/v1', require('./views/v1/_routes'))

// x baseline routes
router.use('/baseline/chedpp/part1', require('./views/baseline/chedpp/part1/_routes'))
router.use('/baseline/cheda/part1', require('./views/baseline/cheda/part1/_routes'))

// x ched routes
router.use('/x-ched/cr37-clone-after/chedpp', require('./views/x-ched/cr37-clone-after/chedpp/_routes'))
router.use('/x-ched/cr37-clone-after/chedp', require('./views/x-ched/cr37-clone-after/chedp/_routes'))
router.use('/x-ched/cr37-clone-after/cheda', require('./views/x-ched/cr37-clone-after/cheda/_routes'))
router.use('/x-ched/e-cert-chedp', require('./views/x-ched/e-cert-chedp/_routes'))
router.use('/x-ched/cuc-foundations/latest/billing-details', require('./views/x-ched/cuc-foundations/latest/billing-details/_routes'))
router.use('/x-ched/cuc-foundations/iteration-1/billing-details', require('./views/x-ched/cuc-foundations/iteration-1/billing-details/_routes'))
router.use('/x-ched/cuc-oi/latest/billing-details', require('./views/x-ched/cuc-oi/latest/billing-details/_routes'))


// ched p rotes
router.use('/chedp-gvms', require('./views/chedp-gvms/_routes'))
router.use('/chedp-gvms-iteration-02', require('./views/chedp-gvms-iteration-02/_routes'))
router.use('/chedp-gvms-iteration-03', require('./views/chedp-gvms-iteration-03/_routes'))
router.use('/chedp-gvms-iteration-04', require('./views/chedp-gvms-iteration-04/_routes'))
router.use('/chedp/2023-12-single-chedp', require('./views/chedp/2023-12-single-chedp/_routes'))
router.use('/part-1-chedp/iuu-round-2', require('./views/part-1-chedp/iuu-round-2/_routes'))
router.use('/part-1-chedp/iuu', require('./views/part-1-chedp/iuu/_routes'))
router.use('/part-1-chedp/iuu-final', require('./views/part-1-chedp/iuu-final/_routes'))

// ched a routes
router.use('/cheda/part-1-latest', require('./views/cheda/part-1-latest/_routes'))

// ched d routes
// router.use('/chedd/imp-to-chedd', require('./views/chedd/imp-to-chedd/_routes'))
router.use('/chedd/part-1-chedd-single', require('./views/chedd/part-1-chedd-single/_routes'))

// ched pp routes
router.use('/chedpp/latest', require('./views/chedpp/latest/_routes'))


// Start folder specific routes




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

module.exports = router

