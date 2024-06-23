import Form from "./components/Form"
import Todos from "./components/Todos"
import { useState } from "react"
import {MOCK_TODOS} from "./data/mock.todos.ts";
import {TodoInterface} from "./types/Todo.interface.ts";

const App = () => {
  const [todos, setTodos] = useState(MOCK_TODOS as TodoInterface[])

  const addTodoHandler = (todo: TodoInterface) => {
    console.log(todo)
    setTodos([...todos, todo])
  }

  const deleteTodoHandler = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="container">
      <h1>Todo</h1>
      <Form addTodo={addTodoHandler} />
      <Todos  todos={todos} deleteTodo={deleteTodoHandler} />



    </div>
  )
}
export default App