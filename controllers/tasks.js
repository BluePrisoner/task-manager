const Task = require('../models/task.js')

const getAllItems  = async (req,res) => {
    try {
        const task = await Task.find({});
        res.status(200).json({task})
    } catch (error) {
        res.status(404).send({msg: error})
    }
}

const createTask = async (req,res) => {

    try {
        const task  = await Task.create(req.body)
        res.status(201).json({task});
    } catch (error) {
        res.status(500).send({msg: error})
    }
   
}
const getTask = async (req,res) => {
    try {
        const taskID = req.params.id;
        const task = await Task.findOne({_id: taskID}).exec();
        if(!task){
            return res.status(404).send({msg: `No task found with id : ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).send({msg: error})
    }
}
const updateTask = async (req,res) => {
    try {
        const taskID = req.params.id;
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new:true,
            runValidators:true
        })
        if(!task){
            return res.status(404).send({msg: `No task found with id : ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
const deleteTask = async(req,res) => {
    try {
        const taskID = req.params.id;
        const task  = await Task.findOneAndDelete({_id: taskID}).exec()
        if(!task){
         return res.status(404).send({msg: `No task found with id : ${taskID}`})
         }
         res.status(200).json({msg: `Deleted task with Id: ${taskID}`})
     } catch (error) {
         res.status(500).json({msg: error})
     }
}


module.exports = {
    getAllItems,deleteTask,updateTask,getTask,createTask,
}