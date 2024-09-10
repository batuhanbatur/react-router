import { Form } from "react-router-dom";
import { FormGroup } from "./FormGroup";

export function UserForm() {
  return (
    <Form method="post" className="form">
      <div className="form-row">
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </FormGroup>
        <button className="btn">Save</button>
      </div>
    </Form>
  );
}
