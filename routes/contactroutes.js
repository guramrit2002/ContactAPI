const express = require('express');
const router = express.Router()
const {getController, postController, putController, deleteController, getOneController} = require('../controllers/controller')



router.route('/').get(getController).post(postController);


router.route('/:id').get(getOneController).put(putController).delete(deleteController);




module.exports = router