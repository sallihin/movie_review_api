"use strict"

const moviedb = require('../models/MoviesDB');

var moviesDBObject = new moviedb(); 

function routeMovies(app) { 
    app.route('/movies')
        .get(moviesDBObject.getAllMovies);
}
module.exports = {routeMovies};
