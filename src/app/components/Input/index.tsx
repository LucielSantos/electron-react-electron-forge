import { forwardRef, InputHTMLAttributes, memo } from "react";

import { StyledInput, Container } from "./styles";

interface IProps extends InputHTMLAttributes<any> {
  label?: string;
}

const InputComponent = forwardRef<HTMLInputElement, IProps>(
  ({ label, ...props }, ref): JSX.Element => {
    return (
      <Container>
        <label>{label}</label>

        <StyledInput {...props} ref={ref} />
      </Container>
    );
  }
);

export const Input = memo(InputComponent);
