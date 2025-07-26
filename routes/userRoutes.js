const express=require('express')
const {home,createUser, getUsers,deleteUser}=require('../controllers/userController.js')

const router=express.Router()
router.get('/',home)
router.post('/createUser',createUser)
router.get('/getUsers',getUsers)
router.delete('/deleteUser/:id',deleteUser)


module.exports=router










