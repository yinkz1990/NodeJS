const path =  require('path');
const express =  require('express');

const adminRoute = require('./Routes/admin');
const shopRoute = require('./Routes/shop');
const aboutRoute = require('./Routes/about')






const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'pug');
app.set('views', 'views');


app.use(adminRoute.router);
app.use(shopRoute);
app.use(aboutRoute)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,  "views", "page-not-found.html"));
});


app.listen(3000);



