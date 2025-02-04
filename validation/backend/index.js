const express = require('express')
const routes = require('./router/student.router')
const dbconnect = require('./config/db')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())






app.use("/",routes)


app.listen(8090,()=>{
    console.log('Server is running on port:8090')
   dbconnect()
})
