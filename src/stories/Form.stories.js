import React from 'react'; 
import ToDoApp from '../components/ToDoApp/ToDoApp';

export default {
     title: 'To Do App', 
     component: 'ToDoApp',
};

const Template = args => <ToDoApp {...args} />;


export const Input = Template.bind({})
Input.args = {
    Label: 'button'
}