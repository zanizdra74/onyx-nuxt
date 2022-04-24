const bcrypt = require('bcrypt-nodejs')

const User = require('../models/user.model')

/**
 *
 */
module.exports.createUser = async (req, res) => {
  console.log('controller', req.body)
  const candidate = await User.findOne({login: req.body.login})
  if (candidate) {
    res.status(409).json({message: 'This login is already taken'})
  } else {
    const salt = bcrypt.genSaltSync(10)
    const user = new User({
      login: req.body.login,
      password: bcrypt.hashSync(req.body.password, salt)
    })

    await user.save()
    res.status(201).json(user)
  }
}
/**
 *
 */
module.exports.getAllUsers = async (req, res) => {
  console.log('controller getAllUsers')
  try {
    const users = await User.find().sort({login: 1})
    res.json(users)
  } catch (e) {
    res.status(500).json(e)
  }
}
