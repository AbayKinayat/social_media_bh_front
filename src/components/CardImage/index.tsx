import type { FC, HTMLAttributes } from 'react';

import "./CardImage.scss";

interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
  src?: string,
  alt?: string,
  height?: string | number
  ImageProps?: HTMLAttributes<HTMLImageElement>
}

const CardImage: FC<CardImageProps> = ({
  src,
  alt,
  height = "100px",
  style = {},
  className = "",
  ImageProps = {},
  ...otherProps
}) => {
  return (
    <div
      {...otherProps}
      className={`card-image ${className}`}
      style={{ ...style, height }}
    >
      <img {...ImageProps} src={src} alt={alt} />
    </div>
  )
}

export default CardImage
