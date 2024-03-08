import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
function WelcomeMessage()
{
    const {items}=useContext(TodoItemsContext);
    return items.length===0 && <p className={styles.welcome}>Nothing to do. Enjoy your Day.</p>
}
export default WelcomeMessage;