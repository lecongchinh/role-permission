const DBConnection = require('../../../database/DBConnection');
const BooksStore = require('../../models/books-store');
let booksStore = new BooksStore(DBConnection);

getBooks = (req, res, next) => {
    booksStore.getBooks().then(result => {
        res.json(result);
    })
        .catch(next);
};

addBook = (req, res, next) => {
    booksStore.addBook(req.body).then(result => {
        res.json(result);
    })
        .catch(next);
};

updateBook = (req, res, next) => {
    booksStore.updateBook(req.body).then(result => {
        res.json(result);
    })
        .catch(next);
};

deleteBook = (req, res, next) => {
    booksStore.deleteBook(req.params.id).then(result => {
        res.json(result);
    })
        .catch(next);
};

exports.getBooks = getBooks;
exports.addBook = addBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
