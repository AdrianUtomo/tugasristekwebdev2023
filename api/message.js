module.exports = (app, Message) => {
    app.get('/api/all', async (req,res) => {
        const messages = await Message.find({})
        res.send(messages);
    })
    
    app.post('/api/create', async (req,res) =>{
        const message = new Message(req.body)
        await message.save()
        res.send(message)
    })

    app.get('/api/:id', async (req,res) => {
        const message = await Message.findById(req.params.id)
        res.send(message);
    })
    
    app.put('/api/:id', async (req,res) => {
        const {id} = req.params
        const message = await Message.findByIdAndUpdate(id, {...req.body})
        res.send(message)
    })

    app.delete('/api/:id', async (req,res) => {
        const {id} = req.params
        const message = await Message.findByIdAndDelete(id);
        res.send(message)
    })
}