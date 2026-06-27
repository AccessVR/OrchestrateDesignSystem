import React from 'react';
import { oxrLogoDataUri } from './logo-data.js';

/**
 * OrchestrateXR logo — the official wordmark (figure-with-raised-arms "O" mark +
 * "rchestrateXR™"), inlined as a data URI so it travels with the bundle.
 * Monochrome black artwork; `onDark` inverts it to white for dark surfaces.
 */
export function Logo({ size = 28, onDark = false, alt = 'OrchestrateXR', mark, style, ...rest }) {
  // Artwork aspect ratio ≈ 1927 × 358.
  return (
    <img
      src={oxrLogoDataUri}
      alt={alt}
      style={{
        height: Number(size),
        width: 'auto',
        display: 'inline-block',
        filter: onDark ? 'brightness(0) invert(1)' : 'none',
        userSelect: 'none',
        ...style,
      }}
      {...rest}
    />
  );
}
