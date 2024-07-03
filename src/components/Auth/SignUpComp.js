import { useContext, useState } from "react";
import { signupFields } from "./FormFields";
import Input from "./Input";
import FormExtra from "./FormExtra";
import FormAction from "./FormAction";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fields = signupFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function SignupComp() {
  const [signupState, setSignupState] = useState(fieldsState);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = signupState;

    if (password.length < 7) {
      toast.error("Password should be at least 7 characters long.");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const loggedUser = userCredential.user;
        return updateUserProfile(name, null);
      })
      .then(() => {
        toast.success("Signup successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        console.error("Error signing up:", error);
      });
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>

        <br></br>
        <FormExtra />

        <FormAction handleSubmit={handleSubmit} text="Sign Up" />
      </form>
    </>
  );
}
