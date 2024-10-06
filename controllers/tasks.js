const Task = require('../models/task.js')
const asyncWrapper = require('../middleware/asyncWrapper.js')
const {customErrorHandler} = require('../errors/custom-error.js')
const getAllItems  = asyncWrapper (async (req,res) => {
   
    const task = await Task.find({});
    res.status(200).json({task})
})

const createTask = asyncWrapper(async (req,res) => {

    const task  = await Task.create(req.body)
    res.status(201).json({task});
})

const getTask = asyncWrapper(async (req,res) => {
    
    const taskID = req.params.id;
    const task = await Task.findOne({_id: taskID});
    if(!task){
        return next(customErrorHandler(`No task found with id : ${taskID}`,404))
    }
    res.status(200).json({task})
   
})
const updateTask = asyncWrapper(async (req,res) => {
    
    const taskID = req.params.id;
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
        new:true,
        runValidators:true
    })
    if(!task){
        return next(customErrorHandler(`No task found with id : ${taskID}`,404))
    }
    res.status(200).json({task})
})

const deleteTask = asyncWrapper(async(req,res) => {
    const taskID = req.params.id;
    const task  = await Task.findOneAndDelete({_id: taskID}).exec()
    if(!task){
        return next(customErrorHandler(`No task found with id : ${taskID}`,404))
        }
        res.status(200).json({msg: `Deleted task with Id: ${taskID}`})
})


module.exports = {
    getAllItems,deleteTask,updateTask,getTask,createTask,
}