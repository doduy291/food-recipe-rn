import React from "react";
import { TextDefault } from "./styles";

interface Props {
  children: React.ReactNode;
  style?: object;
}

const Typography = ({ children, style }: Props) => {
  return <TextDefault style={style}>{children}</TextDefault>;
};

export default Typography;
