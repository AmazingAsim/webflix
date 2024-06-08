let mongoose = require('mongoose');

let local_db = process.env.LOCAL_URL ||  `mongodb://localhost:27017/webflix`;

let dbConnect = function(){ 
  return mongoose.connect(local_db)
  .then(res=>console.log('db is connected'))
  .catch(err=>console.log(err))
}

module.exports = dbConnect;