import React from 'react'

// import RiDeleteBin6Line from 'react-icons/ri'

const TodoList = (props) => {
  return (
    <ul>
        <li className='list-item'>
          {props.items}

          <span className='icons'><i className="fa-solid fa-trash icon-delete"  
          
            onClick={e => {
              props.deleteListItems(props.index);
            }}
          ></i></span>
          </li>
        
    </ul>
  )
}

export default TodoList