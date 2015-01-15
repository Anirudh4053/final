exports.index=function(request,response){
    //console.log(users.getUsers()+'this is it');
    response.render('index',{
        title: "Home",
        
           });
}