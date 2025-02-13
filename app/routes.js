const express = require('express')
const router = express.Router()



// Add your routes here - above the module.exports line


// Start folder specific route
// router.use('/v1', require('./views/v1/_routes'))

// x baseline routes
router.use('/baseline/chedpp/part1', require('./views/baseline/chedpp/part1/_routes'))
router.use('/baseline/cheda/part1', require('./views/baseline/cheda/part1/_routes'))
router.use('/baseline/chedp/part1', require('./views/baseline/chedp/part1/_routes'))
router.use('/baseline/chedp/part1/iuu', require('./views/baseline/chedp/part1/iuu/_routes'))
router.use('/baseline/clone', require('./views/baseline/clone/_routes'))
router.use('/baseline/clone/cheda-retro-clone', require('./views/baseline/clone/cheda-retro-clone/_routes'))


// x ched routes
router.use('/x-ched/cuc-foundations/latest/billing-details', require('./views/x-ched/cuc-foundations/latest/billing-details/_routes'))
router.use('/x-ched/cuc-foundations/iteration-1/billing-details', require('./views/x-ched/cuc-foundations/iteration-1/billing-details/_routes'))
router.use('/x-ched/cuc-ci/latest/billing-details', require('./views/x-ched/cuc-ci/latest/billing-details/_routes'))
router.use('/x-ched/cuc-ci/ur/billing-details', require('./views/x-ched/cuc-ci/ur/billing-details/_routes'))
//router.use('/x-ched/dashboard-results', require('./views/x-ched/dashboard-results/_routes'))
router.use('/x-ched/provision-of-billing-details/latest/billing-details', require('./views/x-ched/provision-of-billing-details/latest/billing-details/_routes'))
router.use('/x-ched/gdpr-cloning', require('./views/x-ched/gdpr-cloning/_routes'))

// ched p routes
router.use('/chedp/gvms/iteration-04', require('./views/chedp/gvms/iteration-04/_routes'))

// ched a routes
router.use('/cheda/single-cheda/v1/part1', require('./views/cheda/single-cheda/v1/part1/_routes'))
router.use('/cheda/single-cheda/latest/part1', require('./views/cheda/single-cheda/latest/part1/_routes'))

router.use('/cheda/cr37-clone-after/latest/chedp', require('./views/cheda/cr37-clone-after/latest/chedp/_routes'))
router.use('/cheda/cr37-clone-after/latest/cheda', require('./views/cheda/cr37-clone-after/latest/cheda/_routes'))

//gvms or no-match routes
router.use('/x-ched/gvms/part-1-chedp', require('./views/x-ched/gvms/part-1-chedp/_routes'))
router.use('/x-ched/gvms/part-1-chedpp', require('./views/x-ched/gvms/part-1-chedpp/_routes'))
router.use('/x-ched/no-match/part-1-chedp', require('./views/x-ched/no-match/part-1-chedp/_routes'))

// ched d routes
// router.use('/chedd/imp-to-chedd', require('./views/chedd/imp-to-chedd/_routes'))


// ched pp routes
//router.use('/chedpp/latest', require('./views/chedpp/latest/_routes'))

// UX ideas routes
// router.use('/UX-ideas/same-commodity/cheda', require('./views/UX-ideas/same-commodity/cheda/_routes'))
// router.use('/UX-ideas/same-commodity/chedp', require('./views/UX-ideas/same-commodity/chedp/_routes'))
// router.use('/UX-ideas/same-commodity/chedpp', require('./views/UX-ideas/same-commodity/chedpp/_routes'))


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

