var {ObjectID} =require('mongodb');

var {mongoose} =require('./../server/db/mongoose');
var {Todo}= require('./../server/models/todo');
var {User}= require('./../server/models/user');


// Todo.findByIdAndRemove('5b3c5ae1e362d12fe0c5c50a').then((result)=>{
//     console.log(result);
// });

Todo.remove({}).then((result)=>{
    console.log(result);
});