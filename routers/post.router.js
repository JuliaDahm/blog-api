const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');


router.get('/posts', (req, res) => {
   Post.find({}, function(err, posts){
  	if(err) return res.status(500).json({err: err}); 
	return res.status(500).json({
	   posts: posts	
	});
   });
});

router.get('/posts/:postId', (req, res) => {
	res.send('getting that one post');
});

router.post('/posts', (req, res) => {
	res.send('creating a new post');
});

router.put('/posts/:postId', (req, res) => {
	res.send('updates on the post!');
});

router.delete('/posts/:postId', (req, res) => {
	res.send('deleting that one post'); 
});

module.exports = router;
