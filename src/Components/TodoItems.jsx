import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
function TodoItems()
{
    const {items}=useContext(TodoItemsContext);
    return <div className={styles.itemContainer}>
            {
                items.map((item)=>(<TodoItem itemName={item.name} itemDate={item.date}></TodoItem>))
            }
      </div>
}
export default TodoItems;