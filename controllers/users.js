var userModel=require('../models/Users');

exports.getAllUser=function(req,res){
    
userModel.find(function(err,user){
    if(err)
        res.send(err);
    res.json(user);
    
});
}
exports.createUser=function(req,res){
    res.render('create');
}
exports.postNewUser=function(req,res){
    
    var user=new userModel();
    user.name=req.body.name;
    user.username=req.body.username;
    user.password=req.body.password;
    user.age=req.body.age;
    user.save();
    //res.send(req.body.name+" "+req.body.username+" "+req.body.password+req.body.age+" "+'done');

   
}
exports.getUserById=function(req,res){
 userModel.findById(req.params.id,function(err,user){
     if(err)
         res.send(err);
     res.render('profile',{
     title:'userprofile',
         user:user
     });
        
 });
}

exports.findUserByage=function(req,res){
 userModel.find({age:req.params.age},function(err,users){
     if(err)
         res.send(err);
     res.render('index',{
     title:'userprofile',
         users:users
     });
        
 });
}
exports.deleteUser=function(req,res){
    userModel.remove({_id:req.params.id},function(err,user){
            if(err)
                res.send(err);
            res.json({
                message:'sucessfully deleted user'
            });
        });
}

//exports.serchUser=function(req,res){
//    userModel.search({_id:req.params.id},find(err,user){
//            if(err)
//                res.send(err);
//            res.json({
//                message:'sucessfully deleted user'
//            });
//        });
//}
exports.deleteUserByName=function(req,res){
    userModel.remove({ name:req.params.name},function(err,user){
            if(err)
                res.send(err);
            res.json({
                message:'sucessfully deleted user'
            });
        });
}
//exports.saveDumpUser=function(req,res){
//    
//    var userObject=new userModel();
//    userObject.name="anirudh",
//        userObject.username="Anirudh4053",
//            userObject.id=1,
//            userObject.save();
//    res.send(userObject);
//}