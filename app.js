const express = require("express");
//creating app
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

//send an HTTP response when receiving HTTP GET /
app.get("/", (req, res) => {
  res.render("index");
});
//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});

//route for contacts
app.get("/contacts", (req, res) => {
  res.render("contacts");
});

//route for logging in
app.get("/login", (req, res) => {
  res.render("signin");
});

//route for registering
app.get("/register", (req, res) => {
  res.render("register");
});

const router = require("./routes/apis.js");
app.use(router);

router.post("/api/catalog");
