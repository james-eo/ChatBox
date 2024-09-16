const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');

const app = express();

dotenv.config(/*{ path: __dirname + "/.env" }*/);


// app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
//   console.log(req.params.id);
const singleChat = chats.find((chat) => chat._id === req.params.id);
res.send(singleChat);
});

// app.use("/api/user", userRoutes);
// app.use("/api/chats", chatRoutes);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server started on port ${PORT}`/*.yellow.bold*/));