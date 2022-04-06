const express= require('express');

const cors = require('cors');

var fs = require("fs");

const app = express();


app.use(express.json());


app.use(cors());

const router = express.Router();

router.get('/cities',function(req,res) {
    fs.readFile(__dirname+"/"+"cities.json","utf8", function (err, data){
        return res.send(data);
    })

});

router.get("/",function(req,res) {
    //res.sendFile('../client/public/index.html');
});

app.use('/',router);

app.listen(3020, () => {
    console.log("porta 3020");
});

console.log('server ligado');




