import express, { urlencoded } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express();
dotenv.config();

//middlewares
app.use(cors())
app.use(express.json())
app.use(urlencoded({extended: true}))

mongoose.connect(
    process.env.MONGO_URL,
    {useNewUrlParser:true})
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch(()=>{
        console.log("Couldn't connect to MongoDB");
    }
)


// routes
import registationRoute from './routes/registration.route.js';
import userRoute from './routes/user.route.js';
import examTypeRoute from './routes/examType.route.js';
import boardRoute from './routes/board.route.js';

// app.post('/api/v1/registation/submit', async(req, res)=> {
//     console.log(req.body)
//     res.send(200)
// })

app.use('/api/v1/registation', registationRoute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/board', boardRoute)
app.use('/api/v1/examType', examTypeRoute)

app.listen(process.env.PORT, ()=>{
    console.log("Server running at PORT : ", process.env.PORT);
})