const Authenticate = require('../models/Authenticate');

module.exports = {
  index: function(req,res){
    Authenticate.find({}, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
  },
  find: function(req,res,next){
    Authenticate.findOne({clave: req.body.clave}).then(authenticate=>{
      if(!authenticate)
      {
        //res.status(200).json('no existe');
        req.mainObj = authenticate;
        req.authenticate = authenticate;
        next();
      }else{
        res.status(403).json('registro ya existe');
        next(new Error('registro ya existe'));
      }
    }).catch(err=>{
      res.status(402).json({error});
    })
  },
  create: function(req,res) {
    Authenticate.create(req.body)
    .then(Message=>{
      res.status(200).json({code: '204'});
    }).catch(error=>{
      res.status(402).json({error});
    })
  }
}
