import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/todos");
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos", error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <h2>Todo List</h2>
            {todos.map((todo) => (
                <div key={todo._id}>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
