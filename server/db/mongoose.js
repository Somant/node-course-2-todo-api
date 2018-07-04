var mongoose= require('mongoose');

var MONGODB_URI="mongodb://<Somant>:<1234>@ds251849.mlab.com:51849/mongoose-db"

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports={mongoose};