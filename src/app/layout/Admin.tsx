import { memo } from "react";

interface IProps {}

const AdminComponent: React.FC<IProps> = (props) => {
  return <>{props.children}</>;
};

export const Admin = memo(AdminComponent);
