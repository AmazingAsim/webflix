let userRepo = require('../repo/user_repo');
let path = require('path');

let getusers = async(req,res)=>{
    try {
        let result = await userRepo.showUser();
        res.send(result);
    } catch (err) {
        console.log(err)
    }
}

let signUp =async(req,res)=>{
    try {
        let user = req.body;
        let result = await userRepo.signUp(user);
        res.send({message:"account is created",res:result});
        
    } catch (error) {
        console.log(error);
        res.send({message:"someting went wrong",res:error});
    }
}

let login = async(req,res)=>{
    
        let user = req.body;
        console.log(user);
        let result = userRepo.login(user);
        if(result === 'invalid email' || result ==='invalid password'){
            res.send({message:'invalid password or email',res:result,validLogin:false})
        }

        res.cookie('jwt',result);
        res.send({message:"Login successfull",validLogin:true,email:user.user_email})

}

let currentUser = async(req,res)=>{
    try {
    let email = req.params.email;
    let result = await userRepo.currentUser(email);
    if(result != null){
        res.send(result)
    }
    
    } catch (error) {
        res.send({message:"someting went wrong",res:error})
    }
}

let addProfile = async(req,res)=>{
    if(!req.file){
        res.send({message:"no file is selected",flag:false});
    }
    else{
        let fileName = req.body._id+ path.extname(req.file.originalname);
        let result = await userRepo.addProfile(req.body._id,fileName);
        res.send({message:'profile image saved',flag:true,res:result})
    }
}

let getImage = async(req,res)=>{
    res.sendFile(path.join(__dirname,'..','profiles',req.params.profileImage))
}

module.exports = {addProfile,getImage,login,signUp,getusers,currentUser}