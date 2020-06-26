const express= require('express');
const mainRouter=express.Router();
function router(nav){

        mainRouter.get('/',function(req,res){
            res.render("main",{
            nav,
            title:'Library'

            });
        });


        return mainRouter;
}


module.exports = router;