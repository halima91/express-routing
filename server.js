const express=require("express")
const app=express()
 

app.use(date=(req,res,next)=>{
 
    const date=new Date()
    let hour = date.getHours()

  if(hour >= 16 && hour <= 17) res.send("you are welcome") ,next()
    else res.send("Our office is not open now")


})

app.get("/home",(req,res)=>{

res.sendFile(__dirname+'/public/home.html')

})
 
app.get("/service",(req,res)=>{

    res.sendFile(__dirname+'/public/ourservices.html')
})

app.get("/contact",(req,res)=>{

    res.sendFile(__dirname+'/public/contact.html')

})



app.listen("3000",err=>{
 if (err) console.log("there is an error")
 else console.log("server is runnig on port 3000")


})