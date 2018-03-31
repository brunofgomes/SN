let express = require('express');
let app = express();
let cfgServer = require('./core/config/server');

let path = require('path');
let dirViews = [
    path.join(__dirname, './public/views/pages'),
    path.join(__dirname, './signin/views/pages'),
    path.join(__dirname, './signup/views/pages'),
    path.join(__dirname, './profil/views/pages'),
    path.join(__dirname, './user/views/pages'),
    path.join(__dirname, './post/views/pages'),
    path.join(__dirname, './friends/views/pages')
];
app.set('views', dirViews);
app.set('view engine', 'ejs');

let session = require('express-session');
app.use(session({secret:"ah bah", resave:true,saveUninitialized:true}));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let serverPort = require('./core/config/server')
let cfgDatabase = require('./core/config/database')

let friendRoutes = require('./friends/routes');
app.use(friendRoutes);

let publicRoutes = require('./public/routes');
app.use(publicRoutes);

let postRoutes = require('./post/routes');
app.use(postRoutes);

let ProfilRoutes = require('./profil/routes');
app.use(ProfilRoutes);

let SignInRoutes = require('./signin/routes');
app.use(SignInRoutes);

let SignUpRoutes = require('./signup/routes');
app.use(SignUpRoutes);

app.use('/css', express.static(path.join(__dirname,'ressources/css')));

let my_db = require('./core/config/database.js');
let mongoose = require('mongoose');
mongoose.connect(my_db.url ,function(err){
    if(err) throw err;
    else{
        console.log("Database connected!");
    }
});





app.listen(cfgServer.port);
console.log("Express Server running on port " + cfgServer.port);
