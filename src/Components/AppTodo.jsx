import {useRef} from "react";
import {IoMdAdd} from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
function AppTodo()
{
    let itemName=useRef();
    let itemDate=useRef();
    const {addItem}=useContext(TodoItemsContext);
    const handleAdd=()=>
    {
        if(itemName.current.value==='' || itemDate.current.value===''){
            return;
        }
        let item=itemName.current.value;
        let date=itemDate.current.value;
        addItem(item,date);
        itemName.current.value="";
        itemDate.current.value="";
    }
    return <div className="container">
        <div className="row kg-row">
            <div className="col-4">
                <input type="text" placeholder="Enter TODO item here" ref={itemName}/>
            </div>
            <div className="col-3">
                <input type="date" ref={itemDate}/>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success kg-button" onClick={handleAdd}><IoMdAdd /></button>
            </div>
        </div>
    </div>;
}
export default AppTodo;