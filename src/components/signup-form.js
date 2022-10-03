import { useState } from "react";
import { useAuth } from "../context/auth-context";
import Input from "./input";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const { signup } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData);
    signup(formData);
  }
  function handleChange(event){
    const {name, value} = event.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <form onSubmit={handleSubmit}>
        <Input
         type="email"
         name="email"
         placeholder="example@mail.com"
         value={formData.email}
         onChange={handleChange}
         label="Email"
        />
        <Input
         type="password"
         name="password"
         placeholder="*******"
         value={formData.password}
         onChange={handleChange}
         label="Password"
        />
        <Input
         name="first_name"
         placeholder="Ash"
         value={formData.first_name}
         onChange={handleChange}
         label="First Name"
        />
         <Input
         name="last_name"
         placeholder="Ketchum"
         value={formData.last_name}
         onChange={handleChange}
         label="Last Name"
        />
        <button type="submit">Create Account</button>
      </form>
  )
}

export default SignupForm;