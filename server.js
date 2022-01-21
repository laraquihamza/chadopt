const express = require('express'); //Line 1

const app = express(); //Line 2
app.use(express.json())
var cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));

app.set('view engine', 'jade');
const port = process.env.PORT || 5000; //Line 3


var Users = [];
var currentUser={};
var Cats=[];
var Adoptions=[];
app.get('/signup', function(req, res){
   res.render('signup');
});
app.post('/signup', function(req, res){
   console.log(req.query)

   if(!req.query.id || !req.query.password){
      console.log(req.query)
      res.status("400");
      res.send("Invalid details!");
      var user={}
   } else  if(Users.filter(user=>{
      console.log(user.id)
      return user.id===req.query.id;
   }).length>0){
      res.status("400");
      res.send("User already exists");
      }
      else{
         var newUser = {id: req.query.id, password: req.query.password};
         Users.push(newUser);
         console.log(Users)
         res.status("200");
         res.send("User created!");
         currentUser=newUser;         
      }
});

app.get('/signin', function(req, res){
   res.render('signin');
});
app.post('/signin', function(req, res){
   console.log(req.query)

   if(!req.query.id || !req.query.password){
      console.log(req.query)
      res.status("400");
      res.send("Invalid details!");
      var user={}
   } else  if(Users.filter(user=>{
      console.log(user.id)
      return user.id===req.query.id && user.password===req.query.password;
   }).length>0){
      res.status("200");
      res.send("User logged in  succesfully !");
      currentUser={id:req.query.id,password:req.query.password}
      }
      else{
         res.status("400");
         res.send("Incorrect credentials!");
      }
});

app.get('/addcat', function(req, res){
   res.render('addcat');
});
app.post('/addcat', function(req, res){
   console.log(req.query)

   if(!req.query.name || !req.query.gender || !req.query.image || !req.query.race || !req.query.city || !req.query.description || !req.query.birthdate){
      console.log(req.query)
      res.status("400");
      res.send("Invalid details!");
      var user={}
   } else  {
      Cats.push({
         name:req.query.name,
         birthdate:req.query.birthdate,
         race:req.query.race,
         gender:req.query.gender,
         city:req.query.city,
         description:req.query.description,
         image:req.query.image,
         adoptionStatus:"disponible"
 
      })
         console.log(Cats);
         res.status("200");
         res.send("Cat added succesfully!");
      }
});

app.get('/deletecat', function(req, res){
   res.render('deletecat');
});
app.post('/deletecat', function(req, res){
   console.log(req.query)

   if(!req.query.index){
      console.log(req.query)
      res.status("400");
      res.send("Invalid details!");
      var user={}
   } else  {
      Cats=Cats.filter((cat,index)=>{
         console.log(index.toString()===req.query.index.toString());
         return index.toString()!=req.query.index.toString()
      })
         console.log(Cats);
         res.status("200");
         res.send(Cats);
      }
});



app.get('/getcats',function(req,res){
   res.status("200");
   res.send(Cats);
});


app.get('/editcat', function(req, res){
   res.render('editcat');
});
app.post('/editcat', function(req, res){
   console.log(req.query)

   if(!req.query.index||!req.query.name || !req.query.gender || !req.query.image || !req.query.race || !req.query.city || !req.query.description || !req.query.birthdate){
      console.log(req.query)
      res.status("400");
      res.send("Invalid details!");
      var user={}
   } else  {
      Cats[req.query.index]={...Cats[req.query.index],
         name:req.query.name,
         birthdate:req.query.birthdate,
         race:req.query.race,
         gender:req.query.gender,
         city:req.query.city,
         description:req.query.description,
         image:req.query.image
      }
         console.log(Cats);
         res.status("200");
         res.send("Cat edited succesfully!");
      }
});

app.get('/demandcat', function(req, res){
   res.render('demandcat');
});
app.post('/demandcat', function(req, res){
   console.log(req.query.index)

   if(!req.query.index){
      console.log(req.query)
      res.status("400");
      res.send("Invalid details!");
   } else  {
      Cats[req.query.index]={...Cats[req.query.index],adoptionStatus:"en attente"}
         console.log(Cats);
         res.status("200");
         res.send(Cats);
      }
});
app.get('/adoptcat', function(req, res){
   res.render('adoptcat');
});

app.post('/adoptcat', function(req, res){
   console.log(req.query)

   if(!req.query.index){
      console.log(req.query)
      res.status("400");
      res.send("Invalid details!");
   } else  {
      Cats[req.query.index]={...Cats[req.query.index],adoptionStatus:"adopté"}
         console.log(Cats);
         res.status("200");
         res.send(Cats);
      }
});
app.get('/canceldemandcat', function(req, res){
   res.render('canceldemandcat');
});

app.post('/canceldemandcat', function(req, res){
   console.log(req.query)

   if(!req.query.index){
      console.log(req.query)
      res.status("400");
      res.send("Invalid details!");
   } else  {
      Cats[req.query.index]={...Cats[req.query.index],adoptionStatus:"disponible"}
         console.log(Cats);
         res.status("200");
         res.send(Cats);
      }
});



// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11
app.get('/bidoof', (req, res) => { //Line 9
  res.json({ "bidoof": 'bidoodf' }); //Line 10
}); //Line 11
