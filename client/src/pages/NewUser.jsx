import { redirect } from "react-router-dom";
import { createUser } from "../api/users";
import { UserForm } from "../components/UserForm";

function NewUser() {
  return <UserForm />;
}

async function action({ request }) {
    const formData = await request.formData();
    const name = formData.get("name");
    const username = formData.get("username") || ""; // Set default values if necessary
    const email = formData.get("email") || "";
    const street = formData.get("street") || "";
    const suite = formData.get("suite") || "";
    const city = formData.get("city") || "";
    const zipcode = formData.get("zipcode") || "";
    const lat = formData.get("lat") || "";
    const lng = formData.get("lng") || "";
    const phone = formData.get("phone") || "";
    const website = formData.get("website") || "";
    const companyName = formData.get("companyName") || "";
    const catchPhrase = formData.get("catchPhrase") || "";
    const bs = formData.get("bs") || "";
  
    // Creating new user object
    const newUser = await createUser(
      {
        name,
        username,
        email,
        address: {
          street,
          suite,
          city,
          zipcode,
          geo: {
            lat,
            lng,
          },
        },
        phone,
        website,
        company: {
          name: companyName,
          catchPhrase,
          bs,
        },
      },
      { signal: request.signal }
    );
  
    return redirect("/users");
  }
  

export const newUserRoute = {
  action,
  element: <NewUser />,
};


