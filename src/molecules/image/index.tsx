import NextImage from 'next/image';


import Frame from 'molecules/frame';

import { css, cx } from 'theme/css';

import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import type { FC } from 'react';
import type { ReactChildren } from 'types/global';

interface ImageProps {
  /**
   * The `src` prop specifies the source of the image, which can be a string or a StaticImport.
   */
  src: string | StaticImport;
  /**
   * The `alt` prop specifies the alternative text for the image, which is used for accessibility purposes and when the image cannot be displayed.
   */
  alt: string;
  /**
   * The `aspectRatio` prop is a string in the format `"${number}/${number}"` that specifies the aspect ratio of the image. This can be used to maintain the correct aspect ratio of the image even when the width and height are not provided.
   */
  priority?: boolean;
  aspectRatio?: `${number}/${number}`;
  width?: number;
  height?: number;
  className?: string;
  sharpCorners?: boolean;
  frameColor?: string;
  noFrame?: boolean;
}

interface OptionalFrameProps extends ReactChildren, Pick<ImageProps, 'frameColor' | 'noFrame' | 'className'> {}

const OptionalFrame: FC<OptionalFrameProps> = ({ children, noFrame, frameColor, className }) =>
  noFrame ? (
    children
  ) : (
    <Frame size="md" frameColor={frameColor} className={className}>
      {children}
    </Frame>
  );

const Image: FC<ImageProps> = ({
  src,
  alt,
  aspectRatio,
  priority,
  width,
  height,
  className,
  sharpCorners,
  frameColor,
  noFrame,
}) => (
  <OptionalFrame frameColor={frameColor} className={className} noFrame={noFrame}>
    <div
      className={cx(css({ position: 'relative' }), className)}
      style={{ aspectRatio: aspectRatio || `${width} / ${height}` }}
    >
      <NextImage
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={css({ objectFit: 'cover', borderRadius: sharpCorners ? 'unset' : 'md' })}
      />
    </div>
  </OptionalFrame>
);

export default Image;
