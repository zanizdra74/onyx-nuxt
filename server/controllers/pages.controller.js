const Page = require('../models/page.model')

/**
 *
 */
module.exports.save = async (req, res) => {
  console.log('controller', req.body)
  const setData = {
    slug: req.body.images,
    images: req.body.images,
    textContents: req.body.textContents,
  }
  try {
    const page = await Page.findOneAndUpdate({
      slug: req.body.slug
    }, {setData}, {new: true})
    res.json(page)
  } catch (e) {
    res.status(500).json(e)
  }
}
