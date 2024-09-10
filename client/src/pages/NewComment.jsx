import {
  Form,
  Link,
  redirect,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { FormGroup } from "../components/FormGroup";
import { addComment } from "../api/comments";

function NewComment() {
  const post = useLoaderData();
  return (
    <>
      <Form method="post" className="form">
        <div className="form-row form-btn-row"></div>
        <div className="form-row">
          <FormGroup>
            <label htmlFor="namename">Name</label>
            <input type="text" name="namename" id="namename" />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="body">Your Comment</label>
            <textarea type="text" name="body" id="body" />
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

async function action({ request, params: { postId } }) {
  const formData = await request.formData();
  const body = formData.get("body");
  const email = formData.get("email");
  const namename = formData.get("namename")

  await addComment(
    postId,
    {
      email,
      body,
      namename,
    },
    { signal: request.signal }
  );

  return redirect("..");
}

export const newCommentRoute = {
  action,
  element: <NewComment />,
};
