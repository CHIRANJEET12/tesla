const express = require("express")
const mongoose = require("mongoose")
const path = require("path")


const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.urlencoded({extended:false}))
app.use(express.json());

// Set view engine to EJS and define the views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get("/",(req,res)=>{
  res.render("home")
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
