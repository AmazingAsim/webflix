let mongoose = require('mongoose');

let local_db = process.env.REMOTE_URL;

const options = {
  maxPoolSize:50,
  wtimeoutMS:2500,
  useNewUrlParser:true
}


let dbConnect = function(){ 
  return mongoose.connect(local_db,options)
  .then(res=>console.log('db is connected'))
  .catch(err=>console.log(err))
}

module.exports = dbConnect;