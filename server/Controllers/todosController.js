
const Todos = require('../model/todosSchema')

const addNewTodo = async(req,res) => {

    try {
        const newTodo = await Todos.create(req.body.todo)
        
        await newTodo.save()
        return res.status(200).json(newTodo)
    }catch(err) {
        return res.status(500).json(err.message)
    }
}

const getAllTodos = async (req,res) => {

    try{

        const allTodos = await Todos.find({})
        res.status(200).json(allTodos)

    }catch(err) {
        res.status(500).json(err.message)
    }
}

module.exports = {getAllTodos,addNewTodo}