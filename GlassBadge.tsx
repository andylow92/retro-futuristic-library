import React, { CSSProperties, useEffect, useState } from 'react';
import { BadgeProps } from './types';
import { getGlassStyle, getThemeColor } from './utils';
import {
  BADGE_SIZE_VARIANTS,
  BORDER_RADIUS,
  FONT_WEIGHT,
  LETTER_SPACING,
  EFFECTS,
  OPACITY,
  TRANSFORMS,
} from './designTokens';

/**
 * GlassBadge Component
 *
 * A small, inline badge component with glassmorphism effects and optional pulse animation.
 * Perfect for status indicators, labels, and tags.
 *
 * @example
 * ```tsx
 * <GlassBadge theme="cyan" size="sm">New</GlassBadge>
 * <GlassBadge pulse theme="pink">Live</GlassBadge>
 * ```
 */
export const GlassBadge: React.FC<BadgeProps> = ({
  children,
  className = '',
  style = {},
  variant = 'light',
  theme = 'pink',
  size = 'sm',
  pulse = false,
}) => {
  const [styleInjected, setStyleInjected] = useState(false);
  const glassStyle = getGlassStyle(variant);
  const themeColor = getThemeColor(theme);
  const sizeVariant = BADGE_SIZE_VARIANTS[size];

  // Inject keyframes animation using a style element (React-friendly approach)
  useEffect(() => {
    if (pulse && !styleInjected && typeof document !== 'undefined') {
      // Check if style already exists
      const existingStyle = document.getElementById('retro-glass-badge-pulse');
      if (!existingStyle) {
        const styleEl = document.createElement('style');
        styleEl.id = 'retro-glass-badge-pulse';
        styleEl.textContent = `
          @keyframes badgePulse {
            0%, 100% {
              transform: scale(1);
              opacity: ${OPACITY.hover};
            }
            50% {
              transform: scale(${TRANSFORMS.scale.hover});
              opacity: ${OPACITY.full};
            }
          }
        `;
        document.head.appendChild(styleEl);
      }
      setStyleInjected(true);
    }
  }, [pulse, styleInjected]);

  const badgeStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...glassStyle,
    padding: sizeVariant.padding,
    borderRadius: BORDER_RADIUS.round,
    fontSize: sizeVariant.fontSize,
    fontWeight: FONT_WEIGHT.bold,
    color: '#FFFFFF',
    letterSpacing: LETTER_SPACING.tight,
    WebkitBackdropFilter: glassStyle.backdropFilter,
    background:
      typeof themeColor === 'string'
        ? `${themeColor}20`
        : 'linear-gradient(90deg, #e9456020, #ffb86c20, #82ccdd20, #a29bfe20)',
    border:
      typeof themeColor === 'string'
        ? `${EFFECTS.border.medium} solid ${themeColor}40`
        : `${EFFECTS.border.medium} solid rgba(255, 255, 255, 0.2)`,
    boxShadow:
      typeof themeColor === 'string'
        ? `0 0 15px ${themeColor}30, inset 0 0 15px ${themeColor}10`
        : '0 0 15px rgba(255, 255, 255, 0.2)',
    animation: pulse ? 'badgePulse 2s ease-in-out infinite' : 'none',
    ...style,
  };

  return (
    <span className={className} style={badgeStyle}>
      {children}
    </span>
  );
};
