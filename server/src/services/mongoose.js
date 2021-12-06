const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
    console.log("connected")
})


mongoose.connection.on("error", (err)=> {
    console.log(err)
})

async function mongooseConnection () {
     await mongoose.connect("mongodb+srv://Olayinka:idumu_1990@cluster0.axjfq.mongodb.net/Restaurant?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true
     })
}

module.exports = {
    mongooseConnection
}

