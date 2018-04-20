var {ObjectID} =require('mongodb');

var {mongoose} =require('./../server/db/mongoose');
var {Todo}= require('./../server/models/todo');
var {User}= require('./../server/models/user');

// var id="6ad9f529e89425ff828eee23";

// if(!ObjectID.isValid(id)){
//     console.log("id not valid");
// }

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//          return console.log("id not found");
//     }
//     console.log("Todo by id",todo);
// }).catch((e)=> console.log(e));

User.findById('5ad9bfdbd6e6d38ce1830d13').then((user)=>{
    if(!user){
        return console.log("id not found");
    }
    console.log(user);
},(e)=>{
    console.log(e);
});