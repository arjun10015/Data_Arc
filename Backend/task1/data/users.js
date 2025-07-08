const bcrypt = require('bcryptjs');

const users = [
    {
        id: 1,
        username: 'john',
        password: bcrypt.hashSync('password123', 10), // Pre-hashed password
        email: 'john@example.com'
    },
    {
        id: 2,
        username: 'arjun',
        password: bcrypt.hashSync('password123', 10), // Pre-hashed password
        email: 'arjun@example.com'
    }
];

module.exports = users;
