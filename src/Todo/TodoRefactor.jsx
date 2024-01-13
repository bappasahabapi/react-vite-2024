import { useState } from "react";

export default function RefactorTodo() {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value, // this will dynamically update value
    });
  };

  const { title, description } = todo;

  return (
    <div>
      <hr />
      <h4>Example1 Todo</h4>
      <p style={{ backgroundColor: "yellow" }}>Title: {title}</p>
      <br />
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <textarea
        placeholder="Enter your text"
        name="description"
        value={description}
        onChange={handleInputChange}
      />
      <hr />
    </div>
  );
}