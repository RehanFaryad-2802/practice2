const express = require('express');
const app = express();





let port = 8080

app.listen(port,(e)=>{
   console.log(`App is listening on port ${port}`);
})
let Page = 'Contact';
app.get('/:user',(req,res)=>{
    let {user} = req.params;
    let followers = ['Rehan', 'Hussain']
    console.log(user)
    res.render('index.ejs',{pageName: user,followers: followers});
})