import { useContext, useState } from "react";
import { loginFields } from "./FormFields";
import Input from "./Input";
import FormExtra from "./FormExtra";
import FormAction from "./FormAction";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function LoginComp() {
  const [loginState, setLoginState] = useState(fieldsState);
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginState;
    signInUser(email, password)
      .then((res) => {
        const loggedUser = res.user;
        toast.success("Login successful!");
        navigate("/");
        console.log(loggedUser);
      })
      .catch((res) => {
        toast.error(res.message);
        console.log(res);
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
              value={loginState[field.id]}
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

        <FormAction handleSubmit={handleSubmit} text="Login" />
      </form>
    </>
  );
}
