import { Form, Link, redirect } from "react-router-dom";
import { newTodo } from "../api/todos";
import { FormGroup } from "../components/FormGroup";

function NewTodo() {
  return (
    <>
      <Form method="post" className="form">
      <div className="form-row form-btn-row">
        
      </div>
        <div className="form-row">
          
          <FormGroup>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </FormGroup>
          <Link className="btn btn-outline" to="..">
          Cancel
        </Link>
        <button className="btn">Save</button>
        </div>
      </Form>
    </>
  );
}

async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const userId = formData.get("userId") || "";

  await newTodo(
    {
      userId,
      title,
      completed: false,
    },
    { signal: request.signal }
  );

  return redirect("/todos");
}

export const newTodoRoute = {
  action,
  element: <NewTodo />,
};
