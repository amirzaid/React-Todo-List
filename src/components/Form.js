import React from 'react';
const uniqid = require('uniqid');

var sorted = false

const Form = ({ inputText, setInputText, todos, setTodos }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText != '') {
            setTodos([
                ...todos,
                {
                    id: uniqid(),
                    completed: false,
                    text: inputText
                }
            ])
            setInputText('');
        }
    }

    // Sort todos alphabetically
    const sortTodosHandler = () => {
        let sort_btn = document.querySelector('#sort-btn i')

        if (sorted) {
            setTodos([...todos.reverse()])
            sorted = false
            sort_btn.classList.remove('fa-sort-up')
            sort_btn.classList.add('fa-sort-down')
        }
        else {
            setTodos([...todos].sort((a, b) => {
                let result = a.text.localeCompare(b.text)
                console.log(result)
                return result
            }))
            sorted = true
            sort_btn.classList.remove('fa-sort-down')
            sort_btn.classList.add('fa-sort-up')
        }
    }

    return (
        <div className='form'>
            <form className='mb-5'>
                <div className='input-group has-validation'>
                    <input value={inputText} onChange={inputTextHandler} className='form-control' type='text' required />
                    <button onClick={submitTodoHandler} className='btn btn-primary'>
                        <i className='fas fa-plus-square'></i>
                    </button>
                    <button type='button' onClick={sortTodosHandler} id='sort-btn' className='btn btn-primary'>
                        <i className='fas fa-sort-down'></i>
                    </button>

                    <div className='invalid-feedback'>
                        Can't be empty
                </div>
                </div>
            </form>

        </div >

    )
}

export default Form;