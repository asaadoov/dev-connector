const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// DB config
const devConnectorDB = require("./config/keys").mongoURI;

// connect do mongoDB
mongoose
  .connect(devConnectorDB, { useNewUrlParser: true })
  .then(() => console.info("MongoDB is connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Welcome, "));

//use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 2098;

app.listen(port, () => console.log(`Server is running on port ${port}...`));
