const app=require('./app');
const port=process.env.PORT||5000;

const connectDatabase=require('./Db/conn');

connectDatabase();

app.listen(port,()=>{
    console.log(`Server is working on port `+port)
})