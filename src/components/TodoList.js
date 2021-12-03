import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faBan } from '@fortawesome/free-solid-svg-icons'
const TodoList = ({ todos, setTodos, setEditTodo}) => {
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    };
    const handleCheck = (todo ) => {
       setTodos(
           todos.map((item) => {
               if(item.id === todo.id) {
                   return {...item, completed: !item.completed}
               }
               return item;
           })
       )
    }
    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);

    }
    return (
        <Wrapper>
            {todos.map((todo) => (
                <List key={todo.id}>
                    <Checkbox onClick={()=> handleCheck(todo)} type="checkbox"/>
                    <Input
                    type="text"
                    value={todo.title}
                    onChange={(e) => e.preventDefault()}
                    style={{
                        textDecoration: todo.completed ? "line-through red" : ""
                    }}
                    />
                        <button onClick={()=> handleEdit(todo)}><FontAwesomeIcon icon={faEdit} /></button>
                        <button onClick={()=> handleDelete(todo)}> <FontAwesomeIcon icon={faBan} /></button>
                </List>
                )
            )}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 10px;
   
    
`;

const Input = styled.input`
   
    border: none;
    cursor: default;
    outline: none;
    background-color: transparent;
    width: 120px;
    height: 25px;
    font-weight: 700;

`   

const List = styled.li`
    display: flex;
    margin: 10px;
    align-items: center;
    align-content: center;
    justify-content: center;
    list-style: none;
    border: 1px solid black;
    width: 25%;
    height: 38px;
    border-radius: 10px;


    button {
        margin: 0 2.5px;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        align-items: center;
        align-content: center;
        cursor: pointer;

        :hover {
            background-color: #E7E9EB;
        }
    }
    `;
 const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 20px;
    margin-top: 5px;
 `;


export default TodoList
