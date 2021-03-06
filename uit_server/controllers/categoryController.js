const express=require('express');
var router=express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var {Category} = require('../models/categoryModel');

router.post('/',(req,res) =>{
    var insertData = new Category({
        categoryname:req.body.categoryname,
    });
    insertData.save((err,doc) =>{
        if(!err) {res.send(doc); console.log(doc);}
        else {console.log('Error saving data : '+JSON.stringify(err));}
    });
});


router.get('/',(req,res) => {
    Category.find((err,docs) =>{
        if(!err) {res.send(docs);}
        else {console.log('Error in Retriving Category..!'+JSON.stringify(err));}
    });
});


router.get('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record given with id : ${req.params.id}`);

    Category.findById(req.params.id,(err,doc) =>{
        if(!err) res.send(doc);
        else console.log('Error Retriving Category Data : '+JSON.stringify(err));
    });
});

router.put('/:id',(req,res) =>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with Id : ${req.params.id}`);
    var updateData={
        categoryname: req.body.categoryname,
    };
    Category.findByIdAndUpdate(req.params.id, {$set: updateData}, {new: true}, (err,doc) => { if(!err) res.send(doc);
        else console.log('Error in Updating Update : '+JSON.stringify(err,undefined, 2 ));
    });
});

router.delete('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No records with given id : ${req.params.id}`);
    Category.findByIdAndRemove(req.params.id, (err, doc) =>{
        if(!err) res.send(doc);
        else console.log('No record with the given Id : '+JSON.stringify(err,undefined,2));
    });
});

module.exports = router;