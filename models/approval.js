const mongoose = require('mongoose');


const approvalSchema = new mongoose.Schema({
    status:{
         type:String,
         enum:['Approve','Reject','Reject & Remove From WorkFlow']
    },
       level:{
            type:String,
            enum:['Sequential','Round-Robin','Anyone']
       }
});
      module.exports = mongoose.model("Approval",approvalSchema);