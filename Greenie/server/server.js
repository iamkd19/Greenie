const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost/userDB', { useNewUrlParser: true, useUnifiedTopology: true });
// Enable cors middleware
app.use(cors());

// Enable body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  city: String,
  pincode: String,
  country: String,
  id: String,
  date: Date,
});

const User = mongoose.model("User", userSchema);

// API endpoint for fetching user data
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API endpoint for dummy account creation
app.post("/api/createAccount", async (req, res) => {
  const { name, email, number, city, date, pincode, country } = req.body;

  console.log("Received creationDate:", date);

  try {
    const newUser = new User({
      name,
      email,
      number,
      city,
      date: date || new Date(),
      pincode,
      country,
    });

    const savedUser = await newUser.save();

    res.json({ message: "Account created successfully!", user: savedUser });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/users/search", async (req, res) => {
  const { name } = req.query;

  try {
    const users = await User.find({ name: new RegExp(name, 'i') });

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
