const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getDrinks,
    addDrink,
    deleteDrink,
    likeDrink
} = require('./controller')

app.get('/getDrinks', getDrinks)
app.post('/addDrink', addDrink)
app.delete('/deleteDrink/:id', deleteDrink)
app.put('/likeDrink/:id', likeDrink)

app.listen(4567, () => console.log(`Avengers assemble on port 4567`))