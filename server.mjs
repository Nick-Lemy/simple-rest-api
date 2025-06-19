import express from "express"
import bodyParser from "body-parser"
import cors from 'cors'
import userRouter from "./routes/user.route.mjs"
import dotenv from "dotenv";

dotenv.config();

const app = express()
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(express.json())
app.use(bodyParser.json())

app.get('/', (_, res) => {
    res.redirect('/users')
})

app.use('/users', userRouter)

app.listen(PORT, () =>
    console.log(`Listening on port ${PORT} 
http://localhost:${PORT}`)
)
