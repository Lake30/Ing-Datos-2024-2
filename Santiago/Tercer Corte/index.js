const express=require("express");
const mongoose=require("mongoose");

const app=express();
const PORT=3000;

//Crear el cierpo de las peticiones (Middleware)
app.use(express.json());

// conexión base de datos
mongoose.connect("mongodb://localhost:27017/mongo",{
     useNewURLParser:true,
     useUnifiedTopology: true
}).then(()=>console.log('Se conectó a mongo'))
.catch(err=>console.error('No se concentó a BD error:',err));

//iniciar el servidor
app.listen(PORT,()=>{
    console.log('Servidor ejecutandose sobre el puerto, ${PORT}');
});

