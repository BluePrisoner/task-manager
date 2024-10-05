const express = require("express");
const router = express.Router();
const {getAllItems, createTask,deleteTask,getTask,updateTask} = require('../controllers/tasks.js')

router.route('/').get(getAllItems).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;

