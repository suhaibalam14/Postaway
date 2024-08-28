import express from 'express'
import userRouter from './src/user/user.routes.js';
import bodyParser from 'body-parser';
const app = express();

app.get('/', (req, res)=>{
    res.send('Welcome to ExpressJS Postaway server :-)')
})

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))


//api's routes

app.use("/api/users", userRouter);







app.listen(4200, ()=>{
    console.log("Server is listening at http://localhost:4200")
})