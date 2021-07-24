const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/STUDENTDB',{ useNewUrlParser: true },(err)=>{
    if(!err)
    {
        console.log('Connection Success..');
    }
    else{
        console.log('Error in connection '+JSON.stringify(err,undefined,2));
    }
});
