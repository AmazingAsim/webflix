module.exports = (err,req,res,next)=>{
   let status = err.statusCode || 500;
   let message = err.message;
   let data = err.data
   let validation = err.validation;
   res.status(status).json({
    message,data,validation
   })
};