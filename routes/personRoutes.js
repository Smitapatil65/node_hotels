const express=require('express');
const router=express.Router();

router.post('/',async(req,res)=>{
  try{
     const data=req.body;
     const newPerson=new Person(data);
     const response=await newPerson.save();
     console.log("data saved");
     res.status(200).json(response);

  }catch(err){
   console.log(err);
   res.status(500).json({error:'Invalid server error....'});
  }
})

router.get('/',async(req,res)=>{
  try{
   const data=await Person.find();
   console.log("data fetched");
   res.status(200).json(data);
  }catch(err){
   console.log(err);
   res.status(500).json({error:'Internal Server Error'});
  }
})


router.get('//:workType',async(req,res)=>{
  try{
    const workType=req.params.workType;
   if(workType=='chef' || workType=='manager' || workType=='waiter')
    {
       const response=await Person.find({work:workType});
       console.log('response fetched');
       res.sendStatus(200).json(response);
    }else{
        res.status(404).json({error:'invalid work type'});
    }
  }catch(err){
     console.log(err);
     res.status(500).json({error:'Internal Server Error '});
  }

})




module.exports=router;




