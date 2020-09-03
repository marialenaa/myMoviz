var express = require('express');
var router = express.Router();
var request = require('sync-request')
var movieModel = require('../models/movies')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('hello')
  res.render('index', { title: 'Express' });
});

router.get('/newmovies', function(req, res, next) {
var getDataMovies = request("GET", 'https://api.themoviedb.org/3/movie/550?api_key=f66883e275f3268e4f6d307f690060f2&language=fr-FR&include_image_language=fr&sort_by=popularity.desc')
var getDataMoviesJson = JSON.parse(getDataMovies.getBody())
console.log(getDataMoviesJson)
  res.json({ title: 'Express' });
});

router.post('/addmovie', async function(req, res, next) {
  var addMovie = new movieModel ({
    name : req.body.name,
    img : req.body.img,
    desc : req.body.desc
  })
  await addMovie.save()

  console.log(addMovie, 'yo')

  var result = false
  if(addMovie.name){
    result = true
  }
  res.json({ result,addMovie});
});

router.delete('/deletemovie', async function(req, res, next) {
  var toDelete = await movieModel.deleteOne({name: "val"})

  console.log(toDelete, 'delete')

  var result = false
  if(toDelete.ok === 1){
    result = true
  }
  res.json({result,toDelete});
});

router.put('/wishlist', async function(req, res, next) {
  var wishList = await movieModel.find()

  console.log(wishList, 'wishlist')

  var result = false
  if(wishList.length){
    result = true 
  }
  res.json({result,wishList});
});
module.exports = router;
