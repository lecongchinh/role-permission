class BooksStore {
    constructor(mysqlConnection) {
        this.mysqlConnection = mysqlConnection;
    }

    getBooks() {
        let query = 'SELECT * FROM books';
        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, (err, result) => {
                err ? reject(err) : resolve(result)
            })
        })
    }

    addBook(book) {
        let query = 'INSERT INTO books SET ?';
        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, [book], (err, result) => {
                err ? reject(err) : resolve(result)
            })
        })
    }

    updateBook(book) {
        let query = 'UPDATE books SET name= ?, author= ?, publishing_year= ? where id= ?';
        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, [book.name, book.author, book.publishing_year, book.id], (err, result) => {
                err ? reject(err) : resolve(result);
            })
        })
    }

    deleteBook(id) {
        let query = 'DELETE FROM books WHERE id = ?';
        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, [id], (err, result) => {
                err ? reject(err) : resolve(result)
            })
        })
    }

}

module.exports = BooksStore;