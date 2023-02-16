module.exports = (app, Message) => {
    app.get('/api/all', async (req,res) => {
        const messages = await Message.find({})
        res.send(messages);
    })

    app.get('/api/:id', async (req,res) => {
        const message = await Message.findById(req.params.id)
        res.send(message);
    })
}