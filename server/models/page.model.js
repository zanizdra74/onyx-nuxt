const {model, Schema} = require('mongoose')

const imagesData = new Schema({
  name: { type: String, unique: true, required: true },
  cacheKiller: { type: Number, required: true },
  typeFile: { type: String, required: true },
})

const textContent = new Schema({
  name: { type: String, unique: true, required: true },
  text: { type: String, required: true }
})

const pageSchema = new Schema({
  slug: {
    type: String, unique: true, required: true
  },
  images: [ imagesData ],
  textContents: [ textContent ]
})

module.exports = model('pages', pageSchema)
