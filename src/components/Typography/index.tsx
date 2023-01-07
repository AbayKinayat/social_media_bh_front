import React from "react";
import classNames from "classnames";

import { UIComponentColors } from "../../models/UIComponentColors";
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

type TypographyVariants =
  typeof OTypographyVariant[keyof typeof OTypographyVariant];

interface TypographyFuncArgs {
  content: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  color?: keyof typeof UIComponentColors;
  fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

interface TypographyVariantsFunc {
  [index: string]: ({
    content,
    className,
    style,
    color,
    fontWeight
  }: TypographyFuncArgs) => React.ReactNode;
}

interface TypographyProps {
  variant?: TypographyVariants;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  color?: keyof typeof UIComponentColors;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

const Variants: TypographyVariantsFunc = {
  h1: ({ content, className, style = {}, color, fontWeight }) => (
    <h1
      className={classNames("app-h1", `${color}--text`, className)}
      style={{ ...style, fontWeight }}
    >
      {content}
    </h1>
  ),
  h2: ({ content, className, style, color, fontWeight }) => (
    <h2
      className={classNames("app-h2", `${color}--text`, className)}
      style={{ ...style, fontWeight }}
    >
      {content}
    </h2>
  ),
  h3: ({ content, className, style, color, fontWeight }) => (
    <h3
      className={classNames("app-h3", `${color}--text`, className)}
      style={{ ...style, fontWeight }}
    >
      {content}
    </h3>
  ),
  h4: ({ content, className, style, color, fontWeight }) => (
    <h4
      className={classNames("app-h4", `${color}--text`, className)}
      style={{ ...style, fontWeight }}
    >
      {content}
    </h4>
  ),
  h5: ({ content, className, style, color, fontWeight }) => (
    <h5
      className={classNames("app-h5", `${color}--text`, className)}
      style={{ ...style, fontWeight }}
    >
      {content}
    </h5>
  ),
  h6: ({ content, className, style, color, fontWeight }) => (
    <h6
      className={classNames("app-h6", `${color}--text`, className)}
      style={{ ...style, fontWeight }}
    >
      {content}
    </h6>
  ),
  body1: ({ content, className, style, color, fontWeight }) => (
    <p
      className={classNames("app-body1", `${color}--text`, className)}
      style={{ ...style, fontWeight }}
    >
      {content}
    </p>
  ),
  body2: ({ content, className, style, color, fontWeight }) => (
    <p
      className={classNames("app-body2", `${color}--text`, className)}
      style={{ ...style, fontWeight }}
    >
      {content}
    </p>
  ),
  small: ({ content, className, style, color, fontWeight }) => (
    <small
      className={classNames("app-small", `${color}--text`, className)}
      style={{ ...style, fontWeight }}
    >
      {content}
    </small>
  ),
};

const Typography: React.FC<TypographyProps> = ({
  variant = "h1",
  children,
  className = "",
  style = {},
  color = "dark",
  fontWeight = 400
}) => {
  return (
    <>{Variants[variant]({ content: children, className, style, color, fontWeight })}</>
  );
};

export default Typography;
