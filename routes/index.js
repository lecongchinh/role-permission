const express = require('express');
const router = express.Router();

let UserController = require('../app/Http/Controllers/user-controller');
let TodosController = require('../app/Http/Controllers/todos-controller');
let BooksController = require('../app/Http/Controllers/books-controller');

//User

router.get('/user', UserController.getUsers);
router.post('/user/add', UserController.addUser);
router.put('/user/update', UserController.updateUser);
router.delete('/user/delete', UserController.deleteUser);

//Todos

router.get('/todo', TodosController.getTodos);
router.post('/todo/add', TodosController.addTodo);
router.put('/todo/update', TodosController.updateTodo);
router.delete('todo/delete', TodosController.deleteTodo);

//Books

router.get('/book/', BooksController.getBooks);
router.post('/book/add', BooksController.addBook);
router.put('/book/update', BooksController.updateBook);
router.delete('/book/delete', BooksController.deleteBook);


module.exports = router;