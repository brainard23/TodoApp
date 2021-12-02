import React, { useEffect } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? { title, id, completed } : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title); 
        } else {
            setInput("");
        }
    }, [setInput, editTodo]);

    const inputChange = (e) => {
        setInput(e.target.value);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
        setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
       
    }

    return (
        <form onSubmit={formSubmit}>
            <Input
            type="text" 
            placeholder="Enter to do..." 
            value={input}
            required
            onChange={inputChange}
            />
            <button type="submit">
                   {editTodo ? 
                   <FontAwesomeIcon icon={faPenSquare}/> : 
                   <FontAwesomeIcon icon={faPlusSquare} />}
            </button>
        </form>
    )
}

const Input = styled.input`

`; 

export default Form
