import express from "express"

const app = express()
app.get('/', (_, res)=>{
    res.send('Hey there!')
})

app.listen(3000, ()=> console.log(`http://localhost:3000`))