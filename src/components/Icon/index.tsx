import type { FC } from "react";

interface IconProps {
  name: string
}

const Icon: FC<IconProps> = ({ name }) => {
  return <i className={`fa fa-${name}`}></i>
}

export default Icon;

