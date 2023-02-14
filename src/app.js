const express = require('express')
const  db  = require('./utils/database')
const responseHandlers = require('./utils/handleresponse')
const app = express()
const userRouter = require('./users/users.router')
const initModels = require('./models/initModels')

app.use(express.json())


db.authenticate() 
    .then(() => {
        console.log('Database Credentials are correct')
    })
    .catch((err) => {
        console.log(err) 
    })

db.sync() 
    .then(() => {
        console.log('Database sync successfully')
    })
    .catch(err => {
        console.log(err) //! error en las tablas, propiedades, etc
    })


app.get('/', (req, res) => {
    responseHandlers.success({
        res,
        status: 200,
        message: 'Servidor inicializado correctamente',
        data: {
            "users": "http://localhost:9000/api/v1/users",
            "conversations": "http://localhost:9000/api/v1/conversations"
        }
    })
})

app.use('/api/v1', userRouter)
initModels()

//? Esta debe ser la ultima ruta en mi app
app.use('*', (req, res)=> {
    responseHandlers.error({
        res,
        status: 404,
        message: 'URL not found, please try with http://localhost:9000/',
    })
})


app.listen(9000,() => {
    console.log('Server started at port 9000')
})