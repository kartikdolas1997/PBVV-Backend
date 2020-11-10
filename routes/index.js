let router = require('express').Router()


router.use('/customize', require('./customize'))

// router.use('/api/users', require('./user'))
// router.use('/api/utils', require('./util'))

// Controllers
router.get('/api', (req, res) => {
  res.send('Please read documentation for the API.')
})

router.get('/', (req, res) => {
  res.redirect('/api')
})

module.exports = router