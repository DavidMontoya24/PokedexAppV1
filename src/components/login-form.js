import styled from "@emotion/styled";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import Button from "./Button";
import Input from "./input";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    login(formData);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
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
      <Button type="submit">Login</Button>
    </StyledForm>
  );
};

export default LoginForm;
