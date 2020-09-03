var mongoose = require('mongoose')

var movieSchema = mongoose.Schema({
    name : String,
    img : String,
    desc : String
})

var movieModel = mongoose.model('movies', movieSchema)

module.exports = movieModel