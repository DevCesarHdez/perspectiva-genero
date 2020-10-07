const express = require('express')
const router = express.Router()

//import data from '../content/data.json'

router.get("/", (req, res) => {
    res.send('Pagina de inicio')
})

module.exports = router
