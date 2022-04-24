const {Router} = require('express')
const {login, createUser} = require('../controllers/auth.controller')
const router = Router()

// /api/auth/admin/login
router.post('/admin/login', login)

// console.log ('all routes -> ', router.stack)
module.exports = router
