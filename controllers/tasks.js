const { query } = require("express");

const getAllItems  = (req,res) => {
    res.send('all items');
}

const createTask = (req,res) => {
    res.json(req.body);
}
const getTask = (req,res) => {
    res.json({id : req.params.id, query: req.query});
}
const updateTask = (req,res) => {
    res.send('update task');
}
const deleteTask = (req,res) => {
    res.send('delete task');
}


module.exports = {
    getAllItems,deleteTask,updateTask,getTask,createTask,
}