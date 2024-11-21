// first we have to change your tsconfig file with kitchen sink api github
import express from "express"
import {BACKEND_URL} from "@repo/common/config"
const app = express()
console.log(BACKEND_URL);

app.get("/",(req,res)=>{
  res.json({
    message:"Hello world"
  })
})

app.listen(3000)
// to boot stap of your application we should add build dev and lint script in your application
//build will compile my bakcend server
// dev will start my bakcend server

//  now add common