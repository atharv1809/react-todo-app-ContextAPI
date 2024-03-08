import AppName from "./Components/AppName";
import AppTodo from "./Components/AppTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";
import { useState } from "react";
import "./App.css";
function App()
{
  const [items,setNewItems]=useState([]);
  const addItem=(itemName,itemDate)=>
  {
    let newItems=[...items,{name: itemName, date: itemDate}];
    setNewItems(newItems);
  };
  const deleteItem=(itemName)=>
  {
    let newItems=items.filter((item)=>item.name!=itemName);
    setNewItems(newItems);
  }
  return <center className="todo-container">
          <TodoItemsContext.Provider value={{items: items, addItem: addItem, deleteItem: deleteItem}}>
            <AppName></AppName>
            <div className="table">
              <AppTodo></AppTodo>
              <WelcomeMessage></WelcomeMessage>
              <TodoItems></TodoItems>
            </div>
          </TodoItemsContext.Provider>
        </center>
}
export default App;