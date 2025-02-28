const db = require('./dbconnection/db')
db()
const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data (for form submissions)
app.use(bodyParser.json()); // Parse JSON data
const PORT = 4000;


const cors = require("cors");
app.use(cors());

// const User = require("./models/user")
const userRoutes = require("./routes/userRoutes");
app.use("/api/users",userRoutes)


const todoRoutes = require("./routes/todoRoutes")




app.get('/', (req, res) => {
    res.send("gariam");
});



app.use("/api/todos",todoRoutes)






app.get("/status", (req, res) => {
    res.json({ message: "Server is running" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});