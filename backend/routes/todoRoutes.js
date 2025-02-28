const express = require("express");
const Todo = require("../models/todo");

const router = express.Router();

// Create a new todo (POST)
router.post("/add", async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTodo = new Todo({ title, description });
        console.log(newTodo)
        await newTodo.save();
        res.status(201).json({ message: "Todo added successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Error adding todo" });
    }
});

// Get all todos (GET)
router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find();
        console.log(todos,"allist")
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: "Error fetching todos" });
    }
});

module.exports = router;
