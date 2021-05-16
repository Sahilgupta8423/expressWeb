const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname, '../public')
const tempalePath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
app.set('view engine', 'hbs')
app.set('views', tempalePath)
app.use(express.static(staticPath))
hbs.registerPartials(partialsPath)

app.get('/', (req, res) => {
    res.render("index")
})
app.get('/about', (req, res) => {
    res.render("about")
})
// app.get('/about/*', (req, res) => {
//     res.render("error404",{errorMsg: "Oops Sorry ! Page Not found"})
// })
app.get('/weather', (req, res) => {
    res.render("weather")
})
app.get('/*', (req, res) => {
    res.render("error404",{errorMsg: "Oops ! Page Not found"})
})

app.listen(port, () => {
    console.log("Listing at 3000")
})