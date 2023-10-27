import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Checkbox({ text, onChange }: Props) {
  return (
    <StyledLabel htmlFor={text}>
      <StyledInput type="checkbox" id={text} name={text} onChange={onChange} />
      <StyledSpan>{text}</StyledSpan>
    </StyledLabel>
  );
}

const StyledInput = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  width: 1.2rem;
  height: 1.2rem;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #0077ff;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const StyledSpan = styled.span`
  margin-left: 0.25rem;
  color: #456;
  font-size: 14px;
`;
