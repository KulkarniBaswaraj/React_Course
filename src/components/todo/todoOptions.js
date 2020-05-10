import React from 'react';
const Options = (props) => {
    const todos = props.todos;
    const deleteTodo = (index) => {
      todos.splice(index, 1)
      props.deleteItem(todos);
    }
    return (
      <div id="todos-wrapper">
        <h4> Todos ( {todos.length} ) </h4>
        <ul className="list-group">
          {
            todos.map((todo, index) => {
              return <li className="list-group-item"
                key={index}>
                {todo}
                <span className="badge" onClick={() => deleteTodo(index)}>&#10006;</span>
              </li>
            })
          }
          {todos.length == 0 && <li className="list-group-item text-center"> No Items Found </li>}
        </ul>
      </div>
    );
  }

  export default Options;