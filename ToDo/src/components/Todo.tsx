import {TodoPropsInterface} from '../types/TodoProps.interface.ts'

const Todo = ({todo: {id, title, completed}, deleteTodo }: TodoPropsInterface) => {
  return (
    <div className="todo" onDoubleClick={() => deleteTodo(id)}>
      <div className="todo__id">{id}</div>
      <h2 className="todo__title">{title}</h2>
      <div className="todo__completed">{completed.toString()}</div>
    </div>
  )
}
export default Todo