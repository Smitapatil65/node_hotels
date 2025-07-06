// console.log("server running......")


// function add(a,b)
// {
//     return a+b;
// }
// var add=function(a,b)
// {
//     return a+b;
// }

// var add=(a,b)=>{return a+b;}

// var r=add(6.9,7);
// console.log(r)


// (function(){
//     console.log('Prince');
// })();

// function callback() {
//     console.log('prince is reading')
// }

// const add=function (a,b,callback) {
//     var r=a+b;
//     console.log('res='+r)  
//     callback();
// }
// add(4,3,callback)


// var fs=require('fs');
// var os=require('os');

// var user=os.userInfo();
// console.log(user.username);

// fs.appendFile('gr.txt','hi'+user.username+'!\n',()=>{
//     console.log('file created.........');
// });

// console.log(fs);


// const notes=require('./notes.js');
// var _ = require('lodash');

// console.log('server file is available..........')
// var age=notes.age;
// console.log(age)

// var res=notes.add(4,3);
// console.log("res="+res)



// var d=[1,1,2,2,'person','nm',age];
// var f=_.uniq(d);
// console.log(f);

// const js='{"nm":"sp","age":23}';
// const jo=JSON.parse(js);
// console.log(js);

// const jo={
//     "nm":"sp",
//     "age":23
// };
// const js=JSON.stringify(jo);
// console.log(js);

// console.log(typeof(js))
// console.log(typeof(jo))



import express, { response } from 'express';
const app = express();

import db from './db.js';
import Person from './models/person.js';
import bodyParser from 'body-parser';
import MenuItem from './models/menuItem.js';


//const bodyParser=require('body-parser');
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World hi i am smita')
});


app.post('/person',async(req,res)=>{
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

app.get('/person',async(req,res)=>{
  try{
   const data=await Person.find();
   console.log("data fetched");
   res.status(200).json(data);

  }catch(err){
   console.log(err);
   res.status(500).json({error:'Internal Server Error'});

  }
})
app.get('/menu',async(req,res)=>{
  try{
   const data=await Person.find();
   console.log("data fetched");
   res.status(200).json(data);

  }catch(err){
   console.log(err);
   res.status(500).json({error:'Internal Server Error'});

  }
})

app.get('/person/:workType',async(req,res)=>{
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

import personRoutes from './routes/personRoutes.js'
app.use('/person',personRoutes);









// app.get('/eggs',(req,res)=>{
//     var e={
//         name:'egg curry',
//         size:'10 cm diameter',
//         is_sambhar:true,
//         chatni:false
//     }
//     res.send(e)
// })
// app.post('/items',(req,res)=>{
//     res.send("data is saved...");
// })


app.listen(3000,()=>{
    console.log("server jinda haiii...on 3000")
});










