const data = require('./NAMES.json')
const path = require('path')
const express = require('express')

const app = express()

// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.json())

app.get('/random-name', (req, res) => {
    const { first_name } = data[Math.round(Math.random() * data.length)]
    const { last_name } = data[Math.round(Math.random() * data.length)]
    return res.json({ first_name, last_name })
})

app.get('/', (req, res) => {
    return res.render('index.ejs', { info: data })
})

// app.post('/addName', (req, res) => {
//     // .then (result => {
//     //     console.log('name added')

//     // })
// })

app.listen(4000, () => console.log("running on port 4000"))
console.log(data[0])