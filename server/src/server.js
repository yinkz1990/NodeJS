const http =  require("http");
const { mongooseConnection } = require("./services/mongoose");


const app = require("./app");


const server = http.createServer(app);
const PORT = process.env.PORT || 8000


async function startServer (){
    await mongooseConnection();
    
}

server.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
})

startServer();