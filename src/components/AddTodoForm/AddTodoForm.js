import React from "react";
import { v4 as uuidv4 } from "uuid";

const AddTodoForm = () => {
  const handleAddTodoForm = (e) => {
    e.preventDefault();

    const id = uuidv4();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const priority = e.target.priority.value;

    const todo = {
      id,
      title,
      content,
      priority,
      completed: false,
    };

    e.target.reset();
  };

  return (
    <form onSubmit={handleAddTodoForm}>
      <input type="text" placeholder="todo title..." name="title" required />
      <textarea
        name="content"
        placeholder="todo content..."
        cols="30"
        rows="10"
      />
      <label htmlFor="priority">Choose todo priority: </label>
      <select name="priority" id="priority">
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      <button type="submit">add todo</button>
    </form>
  );
};

export default AddTodoForm;
