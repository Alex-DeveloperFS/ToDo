import {FormPropsInterface} from "../types/FormProps.interface.ts";
import {FormEvent} from "react";
import {useState} from "react";
import {ChangeEvent} from "react";

const Form = ({addTodo}: FormPropsInterface) => {

  const [title, setTitle] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('Form submitted')

    addTodo({
      id: Date.now(),
      title,
      completed: false
    })
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value.trim())
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter new todo" onChange={handleInputChange}/>
      <button type="submit">Save</button>
    </form>
  )
}

export default Form