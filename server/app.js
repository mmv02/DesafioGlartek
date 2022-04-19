const express= require('express');

const cors = require('cors');

var fs = require("fs");

/*

const axios = require("axios").create({baseUrl: "http://api.openweathermap.org/data/2.5/forecast?id=2267056&APPID=3e6291afc1801b5aec1d61a3027111ec"});

Axios.post("http://127.0.0.1:3020/refresh",{
    message:"Atualizar"
  }).then((response)=>{
    setListaDados(response.data);
  })

*/
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


function atualizarDadosLocais(){
    var newData = {};

    fs.readFile(__dirname+"/"+"cities.json","utf8", function (err, data){
        const dados = JSON.parse(data);
        const identifiers = [dados.Lisboa.codigo, dados.Leiria.codigo,dados.Porto.codigo, dados.Faro.codigo, dados.Coimbra.codigo];
        
       
        for (let index = 0; index < identifiers.length; index++) {
            const element = identifiers[index];
            router.get("http://api.openweathermap.org/data/2.5/forecast?id="+element+"&APPID=3e6291afc1801b5aec1d61a3027111ec", (req, res, data) => {
                newData.push(JSON.parse(data));
                console.log(res);
            })
        }




    })
    //console.log(newData);
    //fs.writeFile(__dirname+"/cities.json",JSON.parse(newData));

}

atualizarDadosLocais();
//



app.use('/',router);

app.listen(3020, () => {
    console.log("porta 3020");
});

console.log('servidor ligado');




