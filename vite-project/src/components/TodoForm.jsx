import React, { useEffect, useRef, useState } from 'react'

const TodoForm = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.value : "");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();                        //basically it will stop the reloading of a page 

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInput('');          //once add todo button is clicked the input will be empty
    }


    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (<> <input type="text" placeholder='Update Your Todo' onChange={handleChange} value={input} className='todo-input' name='text' ref={inputRef} />
                <button className="todo-button">Update Todo</button> </>) : (<><input type="text" placeholder='Add Your Todo' onChange={handleChange} value={input} className='todo-input' name='text' ref={inputRef} />
                    <button className="todo-button">Add Todo</button> </>)}
        </form>
    )
}

export default TodoForm