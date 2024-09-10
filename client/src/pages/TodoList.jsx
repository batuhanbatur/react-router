import { Link, useLoaderData } from "react-router-dom"
import { getTodos } from "../api/todos"
import { TodoItem } from "../components/TodoItem"

function TodoList() {
  const todos = useLoaderData()

  return (
    <>
      <h1 className="page-title">Todos 
      <div className="title-btns">
          <Link className="btn btn-outline" to="newtodo">
            New Todo
          </Link>
        </div></h1>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  )
}

function loader({ request: { signal } }) {
  return getTodos({ signal })
}

export const todoListRoute = {
  loader,
  element: <TodoList />,
}