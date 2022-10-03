import styled from "@emotion/styled";
import { colors } from "../styles";

const FormWrapper = styled.form`
  max-width: 300px;
  min-width: 200px;
  background-color: white;
  border-radius: 12px;
  min-height: 30px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.30);;
`

const StyledInput = styled.input`
  background-color: white;
  border: none;
  border-radius: 12px;
  min-height: 30px;
  outline: none;
  &::placeholder{
    color: ${colors.stone[300]};
  }
  &::-webkit-autofill,
  &::-webkit-autofill:focus {
    background-color: white;
  }
`

const Button = styled.button`
  border: none;
  background-color: white;
  display: flex;
`

function SearchInput({ id, name, type="text", value, onChange, placeholder, label, iconRight, onSubmit }) {
  return (
    <FormWrapper onSubmit={onSubmit}>
      {label && <label htmlFor={id || name}>{label}</label>}
      <StyledInput
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Button type="submit" style={{cursor: "pointer"}}>{iconRight}</Button>
    </FormWrapper>
  );
}

export default SearchInput;
