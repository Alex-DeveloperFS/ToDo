import Todo from "./Todo.tsx"
import {TodosPropsInterface} from "../types/TodosProps.interface.ts"

const Todos = ({todos, deleteTodo}: TodosPropsInterface) => {
  console.log(todos)

  return (
    <div>
      {todos.length === 0 && <p className="todos__empty">Todos list is empty</p>}
      {todos.map((todo) => <Todo todo={todo} deleteTodo={deleteTodo} key={todo.id}/>)}
    </div>
  )
}
export default Todos