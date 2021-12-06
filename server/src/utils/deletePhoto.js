const fs = require("fs");


function deleteFile(imageUrl) {
   fs.unlink(imageUrl, (err)=> {
       if(err){
           throw new Error(err);
       }
   })
}


module.exports = deleteFile;