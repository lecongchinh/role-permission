class UserStore {
    constructor(mysqlConnection) {
        this.mysqlConnection = mysqlConnection;
    }

    getUsers() {
        let query = 'SELECT * FROM user';
        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, (err, result) => {
                err ? reject(err) : resolve(result)
            })
        })
    }

    addUser(user) {
        let query = 'INSERT INTO user SET ?';
        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, [user], (err, result) => {
                err ? reject(err) : resolve(result)
            })
        })
    }

    updateUser(user) {
        let query = 'UPDATE user SET allow_access= ?, role= ? where id= ?';
        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, [user.allow_access, user.role, user.id], (err, result) => {
                err ? reject(err) : resolve(result);
            })
        })
    }

    deleteUser(id) {
        let query = 'DELETE FROM user WHERE id = ?';
        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(query, [id], (err, result) => {
                err ? reject(err) : resolve(result)
            })
        })
    }

}

module.exports = UserStore;