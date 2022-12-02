const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000
const a =[{
    chave: 144,
    name: "Anthony",
    email: "teste123@gmail.com",
    senha: "teste",
    cash: 12000,
    credit: 1000,
    limite: 12000
},
{
    chave: 133,
    name: "Marcela",
    email: "marcela123@gmail.com",
    senha: "marcela",
    cash: 0,
    credit: 2000,
    limite: 0
},
{
    chave: 122,
    name: "Marcela",
    email: "aaa",
    senha: "123",
    cash: 0,
    credit: 2000,
    limite: 0
}]

app.use(express.json())
app.use(cors())




app.put('/sendPix', async (req, res) =>{
    const Ifound = a.findIndex(element => element.chave == +req.body.Ikey);
    const found = a.findIndex(element => element.chave == +req.body.key);
    if(a[found].cash >= +req.body.valor){
        a[found].cash -= +req.body.valor;
        a[Ifound].cash += +req.body.valor;
        res.send(a[found])
    }
})


app.post('/getvalues', (req, res) => {
    const data = req.body;
    console.log(req)
    const found = a.find(element => element.email == data.email)
    if(found != undefined){
        if(found.password == a.senha){
            res.send({
                token: true,
                name: found.name,
                credit: found.credit,
                limite: found.limite,
                cash: found.cash,
                chave: found.chave
            })
        }
        else if(found.senha != a.senha){
            console.log("to aqui")
            res.send(false)
        }
    
    }
    else{
        res.send(false)
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
