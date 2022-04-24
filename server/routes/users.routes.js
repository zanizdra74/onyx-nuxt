const {Router} = require('express')
const {createUser, getAllUsers } = require('../controllers/users.controller')
const router = Router()

// /api/users/admin/create
router.post('/admin/create', createUser)

router.get('/admin/getAllUsers', getAllUsers)

// console.log ('all routes -> ', router.stack)
module.exports = router
