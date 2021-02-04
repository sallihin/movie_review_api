"use strict" 

class Comment { 

    constructor(id, movieId, movie, review, username, rating, datePosted) { 
        this.id = id; 
        this.movieId = movieId;
        this.movie = movie;
        this.review = review;
        this.username = username;
        this.rating = rating;
        this.datePosted = datePosted;
    }

    setMovieId(movieId) {
        this.movieId = movieId;
    }
    setMovie(movie) { 
        this.movie = movie;
    }
    setReview(review) { 
        this.review = review;
    }
    setUsername(username) { 
        this.username = username;
    }
    setRating(rating) { 
        this.rating = rating;
    }
    setDatePosted(datePosted) { 
        this.datePosted = datePosted;
    }
    getMovieId() {
        return this.movieId;
    }
    getMovie() { 
        return this.username;
    }
    getReview() { 
        return this.review;
    }
    getUsername() { 
        return this.username;
    }    
    getRating() { 
        return this.rating;
    }
    getDatePosted() { 
        return this.datePosted;
    }    
}

module.exports = Comment;