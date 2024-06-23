import { TodoInterface } from './Todo.interface.ts'

export interface TodosPropsInterface {
  todos: TodoInterface[]
  deleteTodo: (id: number) => void
}
