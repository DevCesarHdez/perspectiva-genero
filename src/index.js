const express = require('express')
const morgan = require('morgan')

const app = express();

//Importing Routes
const indexRoutes = require("./routes/index")

//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'))

//Routes
app.use("/", indexRoutes)

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})
