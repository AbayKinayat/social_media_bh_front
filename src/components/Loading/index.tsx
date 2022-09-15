import React from 'react'
import classNames from "classnames";

import "./Loading.scss";

interface LoadingProps {
  size: "small" | "middle" | "large";
}

const Loading: React.FC<LoadingProps> = ({ size }) => {
  return (
    <>
      <div className={classNames("lds-ring", {
        "lds-ring--small": size === "small",
        "lds-ring--middle": size === "middle",
        "lds-ring--large": size === "large"
      })}><div></div><div></div><div></div><div></div></div>
    </>
  )
}

export default Loading