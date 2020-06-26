const express= require('express');
const app = express();
const nav= [
    {
        link:'/main',name:'HOME'
    },

    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/signin',name:'SignIn'
    },
    {
        link:'/signup',name:'SignUp'
    },

    {
        link:'/signin',name:'Logout'
    },
    {
        link:'/admin/addbook',name:'Add Book'
    },
    {
        link:'/admin/addauthor',name:'Add Author'
    }
]
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const signinRouter = require('./src/routes/signinRoutes')(nav)
const signupRouter = require('./src/routes/signupRoutes')(nav)
const mainRouter = require('./src/routes/mainRoutes')(nav)
const adminRouter = require('./src/routes/adminRoutes')(nav)

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);
app.use('/main',mainRouter);
app.use('/admin',adminRouter);

app.get('/',function(req,res){
res.render("index",{
nav,
title:'Library'
});

});

app.get('/signup',function(req,res){
    res.render("signup",{
    nav,
    title:'SignUp'
    });

    });
    app.get('/signin',function(req,res){
        res.render("signin",{
        nav,
        title:'SignIn'
        });

        });
        app.get('/main',function(req,res){
            res.render("main",{
            nav,
            title:'HOME'
            });

            });
app.listen(5000);
