const express=require('express')
const {home,createUser, getUsers,deleteUser, editUser}=require('../controllers/userController.js')

const router=express.Router()
router.get('/',home)
router.post('/createUser',createUser)
router.get('/getUsers',getUsers)
router.delete('/deleteUser/:id',deleteUser)
router.put('/editUser/:id',editUser)


module.exports=router










