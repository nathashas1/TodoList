import React from 'react';
import TodoItem from './todo_item.js';





const Todo = ({ allTodos,changeState }) => {

    let todos = allTodos.map((todo,i) => {
      if (todo.state === "todo") {
          return (
           <TodoItem
             key={i}
             todo={todo}
             changeState={changeState}
            />
          );
      } else {
        return null
      }
    });


      return (
        <div>
          <h1>Things to do</h1>
          {todos}
        </div>
      )
    }



    export default Todo;
