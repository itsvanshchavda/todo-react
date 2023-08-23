import React, { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';


const App = () => {

  const [listtodo, setlistTodo] = useState([]);

  let addList = (inputText) => {
   
    if (inputText === '') {
      <Alert />
  } else {
      setlistTodo([...listtodo, inputText]);
  }
  
    
  }

  const deleteListItems =(key) => {
    let newlisttodo = [...listtodo];
    newlisttodo.splice(key,1);
    setlistTodo([...newlisttodo])
  }
  return (

    <div className="main-container">
      <div className="center-container">
      <h1 className='app-heading'>Todo</h1>
        <TodoInput addList={addList} />

  
        {listtodo.map((listitems, i) => {
          return <TodoList items={listitems} key={i}  index={i}  deleteListItems={deleteListItems}/>;
        })}

      </div>

    </div>
  )
}

export default App