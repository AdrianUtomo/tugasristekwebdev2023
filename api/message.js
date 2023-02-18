module.exports = (app, Message) => {
    app.get('/api/all', async (req,res) => {
        const messages = await Message.find({})
        res.send(messages);
    })
    
    app.post('/api/create', async (req,res) =>{
        const message = new Message(req.body)
        await message.save()
        console.log(req.body)
        res.send(req.body)
    })

    app.get('/api/:id', async (req,res) => {
        const message = await Message.findById(req.params.id)
        res.send(message);
    })
    
    app.put('/api/:id/edit', async (req,res) => {
        const {id} = req.params
        const message = await Message.findByIdAndUpdate(id, {...req.body})
        res.send(message)
    })
}