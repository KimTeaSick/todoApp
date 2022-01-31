import React from 'react';
import TodoListItem from '../TodoListItem';
import './index.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
  <div className='TodoList'>
    {todos.map((v,i) => (
      <TodoListItem todo = {v} key = {v.id} onRemove={onRemove} onToggle={onToggle} />
    ))}
  </div>
  );
};

export default TodoList;
