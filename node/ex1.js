var fs=require('fs');
fs.readFile('text.txt','utf8',function(err,data){
    if(!err){
        console.log(data.toString());
    }else{
        console.log(err);
    }
});
//data=fs.readfilesync('text.txt','utf8');
//console.log(data.tostring());
console.log('end program');