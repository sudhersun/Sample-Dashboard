import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todos from './Todos';
import style from './Style.module.css';

const InputForm = () => {
    const [input, setInput] = useState({ title: '', describe: '' });
    const [todos, setTodos] = useState([]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, { id: uuidv4(), title: input.title, describe: input.describe, completed: false }]);
        setInput({ title: '', describe: '' });
    }
    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.header}>
                    <h1>Todo List</h1>
                </div>
                <div className={style.formInput}>
                    <input value={input.title} name='title' placeholder='Title' onChange={handleChange} />
                    <input value={input.describe} name='describe' placeholder='Descripation' size='30' onChange={handleChange} />
                </div>
                <button type='submit'>Add</button>
                <Todos todos={todos} setTodos={setTodos} />
            </form>
        </div>
    );
}

export default InputForm;
