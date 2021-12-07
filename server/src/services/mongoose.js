const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
    console.log("connected")
})


mongoose.connection.on("error", (err)=> {
    console.log(err)
})

async function mongooseConnection () {
     await mongoose.connect(`mongodb+srv://${process.env.database_connection}`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
     })
}

module.exports = {
    mongooseConnection
}

