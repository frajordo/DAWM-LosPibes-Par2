var express = require('express');
var router = express.Router();

const Sequelize=require("sequelize");
const users=require("../models").users;

/* GET home page. */
router.get('/users', function(req, res, next) {
  users.findAll({
    where:{tipo:0},
    attributes: { exclude: ["id"]}
  })
  .then(users=>{
    res.json(users);
  })
  .catch(error=>res.status(400).send(error))
  
});

router.post("/users", function(req,res,next){
  if (!req.body.user){
    res.status(400).send({
      message:"Content can not be empty!"
    });
    return
  }

  const user={
    user: req.body.user,
    password: req.body.password,
    edad: req.body.edad,
    email: req.body.email,
    gender: req.body.gender,
    why: req.body.why,
    tipo: "0"
  };

  users.create(user)
  .then(data=>{
    res.send(data);
  })
  .catch(err=>{
    res.status(500).send({
      message:
      err.message || "Some error ocurred while creating an User."
    });
  });
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

router.post("/admins", function(req,res,next){
  if (!req.body.user){
    res.status(400).send({
      message:"Content can not be empty!"
    });
    return
  }

  const user={
    user: req.body.user,
    password: req.body.password,
    edad: req.body.edad,
    email: req.body.email,
    gender: req.body.gender,
    why: "",
    tipo: "1"
  };

  users.create(user)
  .then(data=>{
    res.send(data);
  })
  .catch(err=>{
    res.status(500).send({
      message:
      err.message || "Some error ocurred while creating an User."
    });
  });
});

module.exports = router;