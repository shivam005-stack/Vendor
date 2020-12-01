
const Approval = require('../models/approval');

exports.sequential = (req,res,next)=>{
     let user = req.user;
     if(Approval.findOne(level)==='sequential'){
     Approval.findOne({status:'approve'})
     .then(
      res.json({
          result:"WorkFlow Is Active"
      })
     );
        next();
}
}

exports.roundRobin = (req,res,next) => {
       if(Approval.level==='Round-Robin'){
        Approval.findOne({status:'Rejected'})
        .then(
          res.json({
               result:"WorkFlow Is Terminated"
          })
        )
       }
          next();
}

exports.anyOne = (req,res) => {
      if(Approval.level==='Anyone') {
          Approval.findOne({status:'Anyone'})
          .then(
               res.json({
                   result:"Work Is Terminated"
               })
          )
      }
};