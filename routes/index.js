var express = require('express');
var router = express.Router();
var request = require('sync-request')
var movieModel = require('../models/movies')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log('hello')
//   res.render('index', { title: 'Express' });
// });

router.get('/newmovies', function(req, res, next) {
var getDataMovies = request("GET", 'https://api.themoviedb.org/3/movie/popular?api_key=f66883e275f3268e4f6d307f690060f2&language=fr-FR&sort_by=popularity.desc')
var getDataMoviesJson = JSON.parse(getDataMovies.getBody())
  res.json({result: true, movies:getDataMoviesJson.results});
});

router.post('/addmovie', async function(req, res, next) {
  
  console.log(req.body.name,'jjjjjjjjjjjjjjj')
  var addMovie = new movieModel ({
    name : req.body.nameFromFront,
    img : req.body.imgFromFront,
  })
  await addMovie.save()
  var result = false
  if(addMovie.name){
    result = true
  }
  res.json({ result,addMovie});
});

router.delete('/deletemovie/:name', async function(req, res, next) {
  console.log(req.params.name)
  var toDelete = await movieModel.deleteOne({name: req.params.name})
  var result = false
  if(toDelete.deletedCount === 1){
    result = true
  }
  res.json({result});
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
