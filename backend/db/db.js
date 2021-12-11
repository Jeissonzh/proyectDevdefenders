const mongoose = require("mongoose")
const connectionString = "mongodb+srv://Camila:1234@mongotest.5bspg.mongodb.net/Devdefenders?retryWrites=true&w=majority"

const connectDB = async () =>{
    try{
        await mongoose.connect(connectionString).then(()=>{
            console.log("Se ha establecido conexión con la base de datos!")
        })
    }catch(err){
        console.log(err.message)
    }
}

module.exports = {
    connectDB
}