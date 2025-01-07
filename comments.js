//create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/', commentController.getComments);
router.get('/create', commentController.createComment);
router.post('/create', commentController.postComment);
router.get('/delete/:id', commentController.deleteComment);