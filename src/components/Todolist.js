import React from 'react';
import Todo from './Todo';

const Todolist = ({ todos, setTodos }) => {
    return (
        <div className='todos-container'>
            {
                todos.map((todo, idx) => (
                    <Todo todo={todo} todos={todos} setTodos={setTodos} />
                ))
            }

        </div>
    )
}

export default Todolist;