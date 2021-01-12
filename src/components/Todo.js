import React from "react";

const Todo = ({ todo, todos, setTodos }) => {
    const removeTodoHandler = () => {
        var newTodos = [...todos];
        var index = newTodos.indexOf(todo);
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const completeTodoHandler = (e) => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

    return (
        <div className='mb-3 card card-body'>
            <div className='form-check'>
                <input onClick={completeTodoHandler} className='form-check-input' type='checkbox' ></input>
                <label className='form-check-label'>
                    {todo.text}
                </label>
                <button onClick={removeTodoHandler} type="button" class="btn-close" aria-label="Close"></button>
            </div>
        </div>
    )
}

export default Todo;