import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
import {MdDelete} from "react-icons/md";
function TodoItem({itemName,itemDate})
{
    const {deleteItem}=useContext(TodoItemsContext);
    return <div className="container">
        <div className="row kg-row">
            <div className="col-4">
                {itemName}
            </div>
            <div className="col-3">
                {itemDate}
            </div>
            <div className="col-2 text-center">
                <button type="button" className="btn btn-danger kg-button" onClick={()=>deleteItem(itemName)}><MdDelete /></button>
            </div>
        </div>
    </div>;
}
export default TodoItem;