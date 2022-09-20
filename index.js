require('dotenv').config();
require('./DB');
const express=require('express');
const cors=require('cors');
const app=express();
const Login=require('./Routes/Login');
const Post=require('./Routes/Post');
const Dashbord=require('./Routes/Dashbord');
const Blogs=require('./Routes/Blogs');
const Message=require('./Routes/Messages');
app.use(cors());
app.use(express.json());

app.use('/login',Login);
app.use('/dashbord',Dashbord)
app.use('/post',Post);
app.use('/blogs',Blogs);
app.post('/message',Message);

app.listen(process.env.PORT||3001);