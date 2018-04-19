const {MongoClient,ObjectID}= require('mongodb');

 

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
      return  console.log("Unable to connect to MongoDB server");

    }
    console.log('Connected to MongoDB server');
    const db= client.db('TodoApp');
  
    // db.collection('Todos').deleteMany({text:"cake walk"}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text:"cake walk"}).then((result)=>{
    //     console.log(result);
    // })

    // db.collection('Todos').findOneAndDelete({text:"cake walk"}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('users').findOneAndDelete({_id: new ObjectID("5ad89eda1cca2678aa4303db")}).then((result)=>{
        console.log(result);
    })

   // client.close();
});