import React from 'react';
import { oxrMarkBlackDataUri, oxrMarkWhiteDataUri } from './logo-data.js';

/**
 * OrchestrateXR mark — the icon-only logo (figure-with-raised-arms inside the ring).
 * Ships as real black + white artwork (no CSS filters): black on light surfaces,
 * white when `onDark`. Use in tight spots where the full wordmark won't fit:
 * content cards, list rows, the app rail, avatars.
 */
export function LogoMark({ size = 28, onDark = false, alt = 'OrchestrateXR', style, ...rest }) {
  const px = Number(size);
  return (
    <img
      src={onDark ? oxrMarkWhiteDataUri : oxrMarkBlackDataUri}
      alt={alt}
      style={{
        height: px,
        width: px,
        objectFit: 'contain',
        display: 'inline-block',
        userSelect: 'none',
        ...style,
      }}
      {...rest}
    />
  );
}
