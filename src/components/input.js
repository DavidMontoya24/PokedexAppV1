import styled from "@emotion/styled";
import { colors } from "../styles";

// const InputWrapper = styled.div`
//   max-width: 300px;
//   min-width: 200px;
//   background-color: white;
//   border-radius: 12px;
//   min-height: 30px;
//   padding: 0 12px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & label {
    width: 6rem;
  }
`;

const StyledInput = styled.input`
  background-color: white;
  border: none;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  min-height: 30px;
  padding: 5px 10px;
  /* padding: 4px 12px; */
  outline: none;
  &::placeholder {
    color: ${colors.stone[300]};
  }
`;

function Input({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
}) {
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
