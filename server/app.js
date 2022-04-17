const express= require('express');

const cors = require('cors');

var fs = require("fs");
const { response } = require('express');

const app = express();


app.use(express.json());


app.use(cors());

const router = express.Router();

function filtrarDados(Dados){

    var novaLista = [];
    
    for(const key in Dados)
    {
        novaLista.push({nome: Dados[key].nome, codigo: Dados[key].codigo, list: Dados[key].data.list});
    }    
    return novaLista;
}

router.post("/refresh",function(req,res) {
    fs.readFile(__dirname+"/"+"cities.json","utf8", function (err, data){
        return res.send(filtrarDados(JSON.parse(data)));
    })
});

app.use('/',router);

app.listen(3020, () => {
    console.log("porta 3020");
});

console.log('server ligado');




