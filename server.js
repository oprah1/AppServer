//import
const express = require('express');
const server = express();
const models = require('./models');
const bodyParser = require('body-parser');
const cors = require('cors');


server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

//configure les routes
server.get('/users', (req, res ) => (
    models.users.findAll().then(user => user ? res.json(user) : res.status(404).json({
        error:'no users'
    }))
    //res.status(200).send('welcome to your server')

 ))

server.post('/users', (req, res) => {
    const newUsers = new models.users({
        name: req.body.name,
        fristname: req.body.fristname,
        phone:req.body.phone ,
        email:req.body.email ,
        status: req.body.status,
        startDate:req.body.startDate,
        update:req.body.update 
    });
    newUsers.save();
    res.end()
})


//lunch server
models.sequelize.sync().then(() => {
    server.listen(8080, function(){
        console.log('listening server') 
     });
})

models.export = server;
