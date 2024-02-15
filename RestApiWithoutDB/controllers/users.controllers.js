let users = require("../models/user.model");
const {v4:uuidv4} = require('uuid');

// get all users Route
const getAllUsers= (req, res) => {
    res.status(200).json({users});
}
// create users route 
const createUser= (req, res) => {
    const userName = req.body.userName;
    const email = req.body.email;
    const id = uuidv4();
    const newUser= { userName , email , id};
    users.push(newUser)
    res.status(201).json(users);
} // must use postman in body router

// update users route 
const UpdateUser= (req, res) => {
    const userId = req.params.id;
    const {userName , email} = req.body;
    users.filter((user) => user.id == userId).map(
        (selectedUser) => {
            selectedUser.userName = userName ;
            selectedUser.email = email;
        }
    )
    res.status(200).json({users});
}
//delete users route 
const deleteUser= (req, res) => {
    const userId = req.params.id;
    users = users.filter((user) => user.id !== userId) 
    res.status(200).json({users});
}

module.exports = {
    getAllUsers,
    createUser,
    UpdateUser,
    deleteUser
}