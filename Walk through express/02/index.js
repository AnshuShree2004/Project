const express = require('express')
const app = express()
const port = 3000

let counter = 0;


app.use(express.json());
app.get('/', (req, res) => {
res.json({counter})
})

app.get('/increment', (req, res) => {
    counter++
    res.json({counter})
    })

    app.get('/decrement', (req, res) => {
        counter--
        res.json({counter})
        })
app.listen(port, () => {
console.log(`Server up and listening on port ${port}`)
})