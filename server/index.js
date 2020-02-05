const express = require('express')
const app = express()
const messageController = require('./controllers/messages_controller.js')
app.use(express.json()) 
let port = 3001

app.use(express.static(__dirname + '/../public/build'));

app.get('/api/messages', messageController.read)
app.post('/api/messages', messageController.create)
app.put('/api/messages/:id', messageController.update)
app.delete('/api/messages/:id', messageController.delete)

app.listen(port, () => {
    console.log('It is working')
})

