const {MongoClient,ObjectID}= require('mongodb');

 

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
      return  console.log("Unable to connect to MongoDB server");

    }
    console.log('Connected to MongoDB server');
    const db= client.db('TodoApp');
  
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5ad875b2d4f17ec4a06f34a0")
    // },{
    //     $set:{ completed: true}
    // },{
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('users').findOneAndUpdate({
        _id: new ObjectID("5ad877ae0cb247d284080457")
    },{
        $set:{
            name: 'Kaycee'
        }
    ,
        $inc:{
            age:1
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

   // client.close();
});