const mongoose = require("mongoose")
 
mongoose.connect("mongodb+srv://admin:AyHkfAphLYmrOnG9@cluster0.hdtsg27.mongodb.net/")
const todoSchema= mongoose.Schema({
    title: String,
    description: String,
    completed:{
        type:Boolean,
        default:false
    }
})

const todo = mongoose.model('todo_table' , todoSchema) ;

module.exports={
    todo    
}