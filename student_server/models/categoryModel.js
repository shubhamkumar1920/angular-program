const mongoose = require('mongoose');
var Category = mongoose.model('Category',{
    studentname:{type: String},
    studentrollno:{type:String},
    studentaddress:{type:String},
    studentemail:{type:String},
    studentmobileno:{type:String},
});
module.exports={Category};