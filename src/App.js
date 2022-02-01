import { useCallback, useRef, useState, useReducer } from 'react';
import { MdArrowRightAlt } from 'react-icons/md';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos () {
  const array = [];
  for(let i = 0; i <= 23; i++){
    array.push({
      id:i,
      text:'할일',
      checked:false,
    })
  }
  return array;
}


function todoReducer(todos, action){
  switch (action.type){
    case'INSERT' :
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter( todo => todo = todo.id !== action.id);
    case 'TOGGLE':
      return todos.map( todo =>
        todo.id === action.id ? {...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(4);

  const onInsert = useCallback((text)=>{
    const todo = {
      id: nextId.current,
      text,
      chacked:false,
    };
    dispatch({ type:'INSERT' , todo })
    nextId.current += 1;
  },[todos]);

  const onRemove = useCallback((id)=> {
    dispatch({ type:'REMOVE' , id })
  },[todos]);

  const onToggle = useCallback((id)=>{
    dispatch({ type:'TOGGLE', id })
  },[todos])

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
