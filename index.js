const express = require("express")
const activity = require('./routes/activity.routes')
const todo = require('./routes/todo.routes')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

const port = 3030

app.use("/activity-groups", activity)
app.use("/todo-items", todo)

app.get('*', (req, res) => {
    res.status(404).send({ message : 'Resource Not Found'})
})

app.listen(port, () => {
    console.log(`Berhasil jalan di port ${port}`)
})