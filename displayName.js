const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const errorCode = 404
const errorMessage = 'Page not found'

app.use(express.static(__dirname))

//Send request for web app
app.get('/', (req, res) => {

    //Give no access to web app
    //res.send(errorCode, errorMessage)

    //Give access to web app
    res.status(200)
    res.sendFile(path.join( __dirname + '/pageDisplay.html'))
    //res.end() will display a blank page
})

app.listen(port, () => console.log(`First web app, listening on port ${port}!`))