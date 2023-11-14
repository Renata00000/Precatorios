/* eslint-disable react/prop-types */
// inputField.jsx
import styled from "styled-components";

const InputFieldWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  width: 30%;
`;

const Label = styled.label`
  margin-right: 10px;
  width: 30%;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 12px;
  width: 100%;
`;

export default function InputField({ label, type, value, onChange, disabled }) {
  return (
    <InputFieldWrapper>
      <Label>{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </InputFieldWrapper>
  );
}


