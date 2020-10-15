const express = require('express')
const morgan = require('morgan')

const app = express()

//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'))

app.use('/css', express.static(__dirname + '/css'));

//Routes
app.get("/", (req, res) => {
  res.render('index.ejs')
})

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})
