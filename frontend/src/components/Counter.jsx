import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Counter: {count}</h2>
            <div style={{ marginTop: "20px" }}>
                <button
                    style={{
                        padding: "10px 20px",
                        marginRight: "10px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                    onClick={() => setCount(count + 1)}
                >
                    Increment
                </button>
                <button
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#dc3545",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                    onClick={() => setCount(0)}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;
