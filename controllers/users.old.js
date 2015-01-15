var userModel=require('../models/Users');
exports.getUserById=function(request,response){
           var user = usersController.getUser(request.params.id);
           response.render('profile',{title:" user Profile",
               users:user
           });
           
    
}

exports.login=function(request,response){
    response.render('login',{title:"Login"
});
}
exports.getsignup=function(request,response){
    response.render('signup',{title:"SignUp"
});
}
exports.getUsers=function(){
    return userModel.users;
}
exports.getUser=function(id){
        for(var i=0;i<users.length;i++) {
            if(userModel.users[i].id==id)
                return userModel.users[i];
        }
    }
    var compareAuth=function(username,password){
        for(var i=0;i<userModel.users.length;i++)
        {
            if(userModel.users[i].username==username && userModel.users[i].password==password)
            {
                return userModel.users[i];
//                return true;
            }
        }
        return false;
    }
    exports.postLogin=function(request,response){
    var result=compareAuth(request.body.email,request.body.password);

    if(result)
    {

        response.send("Login Successfully.Hi"+result.name);

    }
    else
    {
        response.send("Failed");
    }

}
