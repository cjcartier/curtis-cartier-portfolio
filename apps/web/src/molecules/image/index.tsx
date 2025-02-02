import imageUrlBuilder from '@sanity/image-url';
import NextImage from 'next/image';

import Frame from 'molecules/frame';

import { dataset, projectId } from 'lib/env';

import { css, cx } from 'theme/css';

import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import type { FC } from 'react';
import type { Image as SanityImage } from 'sanity';
import type { ReactChildren } from 'types/global';

interface ImageProps {
  /**
   * The `src` prop specifies the source of the image, which can be a string or a StaticImport.
   */
  src?: string | StaticImport;
  image: SanityImage;
  /**
   * The `alt` prop specifies the alternative text for the image, which is used for accessibility purposes and when the image cannot be displayed.
   */
  alt: string;
  /**
   * The `aspectRatio` prop is a string in the format `"${number}/${number}"` that specifies the aspect ratio of the image. This can be used to maintain the correct aspect ratio of the image even when the width and height are not provided.
   */
  priority?: boolean;
  /**
   * The `aspectRatio` prop is a string in the format `"${number}/${number}"` that specifies the aspect ratio of the image. This can be used to maintain the correct aspect ratio of the image even when the width and height are not provided.
   */
  aspectRatio?: `${number}/${number}`;
  width?: number;
  height?: number;
  className?: string;
  sharpCorners?: boolean;
  frameColor?: string;
  noFrame?: boolean;
}

interface OptionalFrameProps extends ReactChildren, Pick<ImageProps, 'frameColor' | 'noFrame' | 'className'> {}

const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

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
  image,
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
        src={src || urlFor(image)?.auto('format').url() || ''}
        alt={alt}
        fill
        priority={priority}
        className={css({ objectFit: 'cover', borderRadius: sharpCorners ? 'unset' : 'md' })}
      />
    </div>
  </OptionalFrame>
);

export default Image;
