"use strict"

const commentsdb = require('../models/CommentsDB');

var commentsDBObject = new commentsdb(); 

function routeComments(app) { 
    app.route('/comments')
        .post(commentsDBObject.addComment)
        .get(commentsDBObject.getAllComments);
}['?']

module.exports = {routeComments};