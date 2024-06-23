import { TodoInterface } from './Todo.interface.ts'

export interface TodoPropsInterface {
  todo: TodoInterface,
  deleteTodo: (id: number) => void
}