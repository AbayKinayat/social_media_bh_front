import React from "react";
import classNames from "classnames";

import "./Typography.scss";

const OTypographyVariant = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "body1",
  body2: "body2",
  small: "small",
} as const;

type TypographyVariants = typeof OTypographyVariant[keyof typeof OTypographyVariant];

interface TypographyFuncArgs {
  content: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface TypographyVariantsFunc {
  [index: string]: ({
    content,
    className,
    style,
  }: TypographyFuncArgs) => React.ReactNode;
}

interface TypographyProps {
  variant: TypographyVariants;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Variants: TypographyVariantsFunc = {
  h1: ({ content, className, style }) => (
    <h1 className={classNames("app-h1", className)} style={style}>
      {content}
    </h1>
  ),
  h2: ({ content, className, style }) => (
    <h2 className={classNames("app-h2", className)} style={style}>
      {content}
    </h2>
  ),
  h3: ({ content, className, style }) => (
    <h3 className={classNames("app-h3", className)} style={style}>
      {content}
    </h3>
  ),
  h4: ({ content, className, style }) => (
    <h4 className={classNames("app-h4", className)} style={style}>
      {content}
    </h4>
  ),
  h5: ({ content, className, style }) => (
    <h5 className={classNames("app-h5", className)} style={style}>
      {content}
    </h5>
  ),
  h6: ({ content, className, style }) => (
    <h6 className={classNames("app-h6", className)} style={style}>
      {content}
    </h6>
  ),
  body1: ({ content, className, style }) => (
    <p className={classNames("app-body1", className)} style={style}>
      {content}
    </p>
  ),
  body2: ({ content, className, style }) => (
    <p className={classNames("app-body2", className)} style={style}>
      {content}
    </p>
  ),
  small: ({ content, className, style }) => (
    <small className={classNames("app-small", className)} style={style}>
      {content}
    </small>
  ),
};

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = "",
  style = {},
}) => {
  return <>{Variants[variant]({ content: children, className, style })}</>;
};

export default Typography;
