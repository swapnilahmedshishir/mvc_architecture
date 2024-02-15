const express = require('express')
const route = express.Router();
const { getAllUsers,createUser,UpdateUser,deleteUser } = require('../controllers/users.controllers');

// users get
route.get("/" , getAllUsers)
route.post("/" , createUser)
route.put("/:id" , UpdateUser)
route.delete("/:id" , deleteUser)


module.exports = route;