import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Todolist from "./components/Todolist";

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className='mb-5'>
        <h1>Todo List</h1>
      </header>
      <div className='container'>
        <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
        <Todolist todos={todos} setTodos={setTodos} />
      </div>
    </div >
  );
}

export default App;

/* Todo style #1 */

{/* <div className='input-group mb-3'>
  <div className='input-group-text'>
    <input className='form-check-input' type='checkbox'></input>
  </div>
  <div className='card card-body'>Task #1</div>
</div> */}

/* Todo style #2 */

{/* <div className='mb-3 card card-body'>
  <div className='form-check'>
    <input className='form-check-input' type='checkbox' value=''></input>
    <label className='form-check-label'>
      Task #2
                </label>
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
</div> */}