const Message = require('../models/Message');

module.exports = {
  index: function(req,res){
    Message.find({}, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
  },
  create: function(req,res) {
    Message.create(req.body)
    .then(Message=>{
      res.status(200).json(Message);
    }).catch(error=>{
      res.status(422).json({error});
    })
  },
  findById: function (req,res,next){
    Message.findById(req.params.id).then(message=>{
      req.mainObj = message;
      req.message = message;
      next();
    }).catch(next);
  },
  findByTag: function (req,res,next){
    Message.find({tags: req.params.id}).then(messages=>{
      req.mainObj = messages;
      req.messages = messages;
      next();
    }).catch(next);
  },
  showById: function (req,res){
    res.json(req.message);
  },
  showByTag: function (req,res){
    res.json(req.messages);
  }
}
