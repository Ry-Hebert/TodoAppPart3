const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const todoItemsSchema = new Schema({
    todo: String,
    complete: Boolean,
    category: String,
    categoryID: Number,
    id: Number
})

module.exports = Mongoose.model('todoItems', todoItemsSchema)
