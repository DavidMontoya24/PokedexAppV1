import { useState } from "react";
import { useAuth } from "../context/auth-context";
import Input from "./input";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData);
    login(formData);
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
        <button type="submit">Login</button>
      </form>
  )
}

export default LoginForm;