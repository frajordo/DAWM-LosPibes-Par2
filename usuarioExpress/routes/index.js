var express = require('express');
var router = express.Router();

const Sequelize=require("sequelize");
const users=require("../models").users;

/* GET home page. */
router.get('/', function(req, res, next) {
  users.findAll({
    where:{tipo:0},
    attributes: { exclude: ["id"]}
  })
  .then(users=>{
    res.json(users);
  })
  .catch(error=>res.status(400).send(error))
  
});

router.get("/admins",function(req,res,next){
  users.findAll({
    where:{tipo:1},
    attributes: { exclude: ["id"]}
  })
  .then(users=>{
    res.json(users);
  })
  .catch(error=>res.status(400).send(error))
});

module.exports = router;
