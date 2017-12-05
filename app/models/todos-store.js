class TodosStore {
    constructor(mysqlConnection) {
        this.mysqlConnection = mysqlConnection;
    }

    getTodos() {
        let query = 'SELECT * FROM todos';
        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, (err, result) => {
                err ? reject(err) : resolve(result)
            })
        })
    }

    addTodo(todo) {
        let query = 'INSERT INTO todos SET ?';
        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, [todo], (err, result) => {
                err ? reject(err) : resolve(result)
            })
        })
    }

    updateTodo(todo) {
        let query = 'UPDATE todos SET element= ? where id= ?';
        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, [todo.element, todo.id], (err, result) => {
                err ? reject(err) : resolve(result);
            })
        })
    }

    deleteTodo(id) {
        let query = 'DELETE FROM todos WHERE id = ?';
        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, [id], (err, result) => {
                err ? reject(err) : resolve(result)
            })
        })
    }

}

module.exports = TodosStore;