import React, { useState } from 'react';
import '/Users/cnestel-admin/Desktop/Flatiron-Projects/phase-4-project/To-Do-App/client/src/todo/Todo.css'

const NewTodo = ({ user }) => {

    const [title, setTitle] = useState("");
    const [instructions, setInstructions] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    setTitle(e.target.value)
    setInstructions(e.target.value)
  }


  const handleSubmit = e => {
      e.preventDefault();
      setIsLoading(true);
      fetch("/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          instructions,
        }),
      }).then(() => {
        setIsLoading(false);
      });
      }

return (
<div>
<h2>Create a new to-do </h2>
<form className="form-container" onSubmit={ handleSubmit }>
{/* <h2>By {user.username}</h2> */}
        <div>
            <label htmlFor='title'>Weekday: </label>
            <input type='text' name='title' id='title' value={title} onChange={ handleChange } />
        </div>
        <div>
            <label htmlFor='instructions'>Todo: </label>
            <input type='text' name='instructions' id='instructions' value={instructions} onChange={ handleChange } />
        </div>
        <div>
        <input className='center-submit' type="submit" value='Enter' />
        </div>
    </form>
</div>
  );
}


export default NewTodo;