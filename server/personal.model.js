const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PersonaSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 18,
        max: 90,
        default: 20,
    },
    isMarried: {
        type: Boolean,
        default: false,
    },
    phones: {
        type: [String],
        default: [],
    },
})

mongoose.model('persons', PersonaSchema)
