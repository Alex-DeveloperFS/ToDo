import Button from "./Button.tsx";
import {RiCheckboxCircleLine, RiDeleteBin2Line} from "react-icons/ri";
import {TodoContext} from "../context/TodoContext.tsx";
import {useContext} from "react";

const Actions = () => {

  const { deleteAllTodos, clearCompletedTodos, todos} = useContext(TodoContext)
  const completeTodosExist = todos.some((todo) => todo.completed)

  if (todos.length === 0) {
    return null
  }
  
  return (
    <div className="todos__actions">
      <Button title="Delete All Todos" onClick={() => deleteAllTodos()}><RiDeleteBin2Line/></Button>
      <Button title="Clear All Todos" onClick={() => clearCompletedTodos()} disabled={!completeTodosExist}><RiCheckboxCircleLine/></Button>
    </div>
  )
}
export default Actions