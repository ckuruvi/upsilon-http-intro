var router=require('express').Router();


router.get('/',function(req,res){
  res.send('books');
})

module.exports=router;
