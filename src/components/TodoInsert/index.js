import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './index.scss'


const TodoInsert = ({ onInsert }) => {

  const [value, setValue] = useState();

  const valueHandler = useCallback((e) => {
    setValue(e.target.value);
  },[])

  const onSubmit = useCallback((e)=>{
    onInsert(value);
    setValue('');
    e.preventDefault();
  },[onInsert, value])

  return (
  <form className='TodoInsert' onSubmit={onSubmit}>
    <input placeholder='할 일을 입력하세요.' value={value} onChange={valueHandler} />
    <button type='submit'>
      <MdAdd />
    </button>
  </form>
  );
};

export default TodoInsert;
