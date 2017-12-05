const DBConnection = require('../../../database/DBConnection');
const UserStore = require('../../models/user-store');
let userStore = new UserStore(DBConnection);

getUsers = (req, res, next) => {
    userStore.getUsers().then(result => {
        res.json(result);
    })
        .catch(next);
};

addUser = (req, res, next) => {
    userStore.addUser(req.body).then(result => {
        res.json(result);
    })
        .catch(next);
};

updateUser = (req, res, next) => {
    userStore.updateUser(req.body).then(result => {
        res.json(result);
    })
        .catch(next);
};

deleteUser = (req, res, next) => {
    userStore.deleteUser(req.params.id).then(result => {
        res.json(result);
    })
        .catch(next);
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
