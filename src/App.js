import { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 3,
      text: '리액트의 기초 알아보기',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback((text)=>{
    const todo = {
      id: nextId.current,
      text,
      chacked:false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  },[todos]);

  const onRemove = useCallback((id)=> {
    setTodos(todos.filter(todo => todo.id !== id))
  },[todos]);

  const onToggle = useCallback((id)=>{
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    )
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
