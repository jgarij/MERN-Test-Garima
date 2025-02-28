import React, { useState } from "react";
import axios from "axios";

const TodoForm = ({ fetchTodos }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/api/todos/add", { title, description });
            fetchTodos();  // Refresh list after adding
            setTitle("");
            setDescription("");
        } catch (error) {
            console.error("Error adding todo", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;
