var express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  user = {}

app.use(bodyParser.json())
app.use("/", express.static("./public"))
  // sets the url

app.post("/signup", function(req, res) {
  user = req.body
  res.send("Got it.")
})


app.post("/login", function(req, res) {
  login = req.body
  if (user.username === login.username && user.password === login.password){
    res.send("You logged in.")
  } else {
    res.sendStatus(403)
  }
})


app.get("/user", function(req, res) {
  res.send(user)
})


app.listen(3000)
  // sets the port
