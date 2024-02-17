const {v4:uuidv4} = require('uuid');

const users = [
    {
        id:uuidv4(),
        userName: "swapnil ahmed",
        email : "ahmedshishirusa@gmail.com"
    },
    {
        id:uuidv4(),
        userName:"ahmed shishir",
        email: "swapnilahmedshishir2018@gamil.com"
    },
];

module.exports = users;

