import type { FC, ReactNode } from 'react';

import "./List.scss";

interface ListProps {
  children?: ReactNode
}

const List: FC<ListProps> = ({ children }) => {
  return (
    <div className="list">
      {children}
    </div>
  )
}

export default List