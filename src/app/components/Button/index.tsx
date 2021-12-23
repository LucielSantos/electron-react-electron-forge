import { ButtonHTMLAttributes, memo } from "react";

import * as Styles from "./styles";

interface IProps extends ButtonHTMLAttributes<any> {
  children: React.ReactNode;
}

const ButtonComponent = ({ children, ...props }: IProps): JSX.Element => {
  return <Styles.StyledButton {...props}>{children}</Styles.StyledButton>;
};

export const Button = memo(ButtonComponent);
