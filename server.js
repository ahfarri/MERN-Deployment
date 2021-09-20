const express = require("express");
const app = express();
const cors = require('cors') 
const port = 8000;
app.use(cors());
app.use( express.json() ); //tells my app that it can parse json
app.use( express.urlencoded({ extended: true }) ); //tells my app that it can gather form information


require("./server/config/config");

require("./server/routes/pets.route")(app)



//app.listen needs to be at the end of the file
app.listen( port, () => console.log(`Listening on port: ${port}`) );