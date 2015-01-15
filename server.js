//dependent variable
var express = require('express');
var hbs = require('hbs');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
//User model
var homeController = require('./controllers/home');
var usersController = require('./controllers/users');
var aboutController = require('./controllers/about');
//var users = require('./user');
var app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: false
        
    }));
app.use(express.static('public'));//static folder we can change also
mongoose.connect('mongodb://localhost:27017/match');
mongoose.connection.on('error',function(){
      console.error('Mongodb is not connected check if mongodb is running');
   });

//Routes
//app.get('/', function(request,response){
//   // console.log(users.getUsers()+'this is it');
//    response.render('index',{
//        title: "Home",
//        users: usersController.getUsers()});
//
//});
app.get('/',homeController.index);
 
app.get('/users',usersController.getAllUser);
//app.get('/dump',usersController.saveDumpUser);
app.get('/addusers',usersController.createUser);
app.get('/users/:id',usersController.getUserById);

app.get('/users/age/:age',usersController.findUserByage);
app.post('/addusers',usersController.postNewUser);
//app.delete('/users/:id',usersController.deleteuser);
app.get('/users/del/:id',usersController.deleteUser);
app.get('/users/delbyname/:name',usersController.deleteUserByName);





//app.get('/users/:id',usersController.getUserById);
//app.get('/home',function(request,response){
//    response.render('index',users.getUsers);
//});
//
//app.get('/login',usersController.login);
//app.get('/signup',usersController.getsignup);
//app.get('/about',aboutController.about);
//app.post('/login',usersController.postLogin);








//app.get('/login', function(request,response){
//    response.sendfile('./views/login.html');
//
//});



//app.get('/signup', function(request,response){
//    response.sendfile('./views/signup.html');
//
//});
//app.get('/about', function(request,response){
//    response.sendfile('./views/aboutus.html');
//
//});


app.listen(3000);