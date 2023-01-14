const express = require('express')
const app = express()


app.post("/contacto",(req, res) => {

    const {name, email, tel, mensaje} = req.body

    console.log(name, email, tel, mensaje);
    res.json({message: 'Email sent!!!'})
})


app.listen(5173, () => console.log('Server started on 5173'))