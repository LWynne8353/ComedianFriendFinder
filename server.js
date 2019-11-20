//Given our server functionality
var express = require("express");

//using an express npm 
var app = express();

//Port
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Files for router or Router files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Activates the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });