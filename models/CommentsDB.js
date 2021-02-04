"use strict"

var db = require('../db-connection'); 
const Comment = require('../models/Comment');

class CommentsDB {
    getAllComments(request, respond) 
    { 
        var sql = "SELECT * FROM movie_review.comment";
        db.query(sql, function(error, result){
            if (error) { 
                throw error; 
            } 
            else { 
                respond.json(result);
            }
        });
    }

    addComment(request, respond){
        var now = new Date();
        
        var commentObject = new Comment(null, request.body.movieId, request.body.movie, request.body.review, 
            request.body.username, request.body.rating, now.toString());
        
        var sql = "INSERT INTO movie_review.comment (movieId, movie, review, username, rating, datePosted) VALUES(?,?,?,?,?,?)";
        
        var values = [commentObject.getMovieId(), commentObject.getMovie(), commentObject.getReview(), 
            commentObject.getUsername(), commentObject.getRating(), commentObject.getDatePosted()];
        
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }
}
module.exports = CommentsDB;