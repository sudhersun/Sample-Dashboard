import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import style from './Style.module.css';

const Todos = ({ todos, setTodos }) => {
    const handleDelete = (id) => {
        const Delete = todos.filter((item) => (item.id !== id));
        return setTodos(Delete);
    }

    return (
        <div className={style.todoContainer}>
            {todos.map((data, i) => (
                <li key={data.id} style={{ listStyle: 'none' }}>
                    <div className={style.todoHeading}>
                        {i + 1}
                        <h1>{data.title}</h1>
                        <div className={style.todoAction}>
                            <button onClick={() => handleDelete(data.id)}><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    </div>
                    <span>{data.describe}</span>
                </li>
            ))}
        </div>
    );
}

export default Todos;
