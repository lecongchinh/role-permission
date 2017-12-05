const DBConnection = require('../../../database/DBConnection');
const TodosStore = require('../../models/todos-store');
let todosStore = new TodosStore(DBConnection);

getTodos = (req, res, next) => {
    todosStore.getTodos().then(result => {
        res.json(result);
    })
        .catch(next);
};

addTodo = (req, res, next) => {
    todosStore.addTodo(req.body).then(result => {
        res.json(result);
    })
        .catch(next);
};

updateTodo = (req, res, next) => {
    todosStore.updateTodo(req.body).then(result => {
        res.json(result);
    })
        .catch(next);
};

deleteTodo = (req, res, next) => {
    todosStore.deleteTodo(req.params.id).then(result => {
        res.json(result);
    })
        .catch(next);
};

exports.getTodos = getTodos;
exports.addTodo = addTodo;
exports.updateTodo = updateTodo;
exports.deleteTodo = deleteTodo;
