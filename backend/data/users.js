const bcrypt = require('bcryptjs');

const Users = [
    {
        name: 'admin',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'john',
        email: 'john123@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'user',
        email: 'user123@user.com',
        password: bcrypt.hashSync('123456', 10)
    },
];

module.exports = Users;


