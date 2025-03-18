const {Router}=require('express')
const { user } = require('../controller/user.controller')

const routes=Router()
 
routes.post('/signup',user.signup)
routes.post('/login',user.login)
routes.patch('/update/:id',user.userupdate)

module.exports=routes