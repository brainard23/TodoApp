import React from 'react'; 
import App from '../App';

export default {
     title: 'To Do App', 
     component: 'App',
};

const Template = args => <App {...args} />;


export const Input = Template.bind({})
Input.args = {
     Onsubmit: Boolean,
}