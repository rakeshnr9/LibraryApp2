const express = require("express");

const signupRouter = express.Router();
const Signupdata = require('../model/Signupdata');

function router(nav){


    signupRouter.get('/',function(req,res){
        res.render("signup",
        {
           nav,


        });
    });

    signupRouter.post('/newsignup',function(req,res){
        var item = {
       name:  req.body.name,
       gender: req.body.gender,
       dob: req.body.dob,
       phone: req.body.phone,
         email: req.body.email,
           password :req.body.password

        }
       var signup =  Signupdata(item);
       signup.save();//saving to database
       res.redirect('/signin');

      });

    return signupRouter;
}



module.exports = router;