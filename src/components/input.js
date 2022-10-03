import styled from "@emotion/styled";
import { colors } from "../styles";

const InputWrapper = styled.div`
  max-width: 300px;
  min-width: 200px;
  background-color: white;
  border-radius: 12px;
  min-height: 30px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`


const StyledInput = styled.input`
  background-color: white;
  border: none;
  border-radius: 12px;
  min-height: 30px;
  /* padding: 4px 12px; */
  outline: none;
  &::placeholder{
    color: ${colors.stone[300]};
  }
`

function Input({ id, name, type="text", value, onChange, placeholder, label }) {
  return (
    <InputWrapper>
      {label && <label htmlFor={id || name}>{label}</label>}
      <StyledInput
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
}

export default Input;
