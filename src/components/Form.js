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
        <FormW onSubmit={formSubmit}>
            <Input
            type="text" 
            placeholder="Enter your to do" 
            value={input}
            required
            onChange={inputChange}
            />
            <Submit type="submit">
                   {editTodo ? 
                   <FontAwesomeIcon icon={faPenSquare}/> : 
                   <FontAwesomeIcon icon={faPlusSquare} />}
            </Submit>
        </FormW>
    )
}

const FormW = styled.form`
    display: flex;
    margin-left: 35px;
`; 

const Input = styled.input `
    word-wrap:break-word;
 
`;

const Submit = styled.button`
    cursor: pointer;
`;

export default Form
