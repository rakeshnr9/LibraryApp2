const express = require("express");

const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');

function router(nav){


    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",
            {
               nav,
            title:'Library',
            authors
            });
        })

    });

    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
         res.render('author',{
             nav,
             title:'Library',
             author
         });
        })

     });

     authorsRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOneAndDelete({_id:id})
            .then(function(authors){
                res.redirect('/authors');
            });
});

authorsRouter.get('/edit/:id',function(req,res){
    const id = req.params.id;
    Authordata.findOne({_id:id})
    .then(function(author){
        res.render('editAuthor',{
            nav,
            title:'Library',
            author
        });
       })

    });
    authorsRouter.post('/edit/:id',function(req,res){
        const id = req.params.id;
       Authordata.findOne({_id:id})
            .then(function(author){
                    if (!author){
                        return next(new Error('cant load'));
                    }
                    else {
                        var itemedit = {

                            author: req.body.author,
                            genre:  req.body.genre,
                            image:  req.body.image
                        }

                        Authordata.findByIdAndUpdate(id,itemedit,(er,author1) => {
                            res.redirect('/authors/'+author1._id);
                        });
                    }
            });
    });

    return authorsRouter;
}



module.exports = router;