let router = require('express').Router()


router.use('/customize', require('./customize'))
router.use('/results', require('./results'))

router.get('/', (req, res) => {
  res.send('Please read documentation for the API. (root)')
})

module.exports = router