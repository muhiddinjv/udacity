import express from "express";

const app = express();

app.get('/',(req, res)=>{
  res.send('<h1>Hello Muhiddin</h1>')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));