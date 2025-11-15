import React, { CSSProperties } from 'react';
import { BadgeProps } from './types';
import { getGlassStyle, getThemeColor, getSizeStyles } from './utils';

export const GlassBadge: React.FC<BadgeProps> = ({
  children,
  className = '',
  style = {},
  variant = 'light',
  theme = 'pink',
  size = 'sm',
  pulse = false,
}) => {
  const glassStyle = getGlassStyle(variant);
  const themeColor = getThemeColor(theme);
  const sizeStyles = getSizeStyles(size);

  const badgeStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...glassStyle,
    padding: size === 'sm' ? '4px 12px' : size === 'md' ? '6px 16px' : '8px 20px',
    borderRadius: '20px',
    fontSize: size === 'sm' ? '12px' : size === 'md' ? '14px' : '16px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: '0.5px',
    WebkitBackdropFilter: glassStyle.backdropFilter,
    background:
      typeof themeColor === 'string'
        ? `${themeColor}20`
        : 'linear-gradient(90deg, #e9456020, #ffb86c20, #82ccdd20, #a29bfe20)',
    border:
      typeof themeColor === 'string'
        ? `2px solid ${themeColor}40`
        : '2px solid rgba(255, 255, 255, 0.2)',
    boxShadow:
      typeof themeColor === 'string'
        ? `0 0 15px ${themeColor}30, inset 0 0 15px ${themeColor}10`
        : '0 0 15px rgba(255, 255, 255, 0.2)',
    animation: pulse ? 'badgePulse 2s ease-in-out infinite' : 'none',
    ...style,
  };

  // Inject keyframes for pulse animation
  if (pulse && typeof document !== 'undefined') {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes badgePulse {
        0%, 100% { transform: scale(1); opacity: 0.9; }
        50% { transform: scale(1.05); opacity: 1; }
      }
    `;
    try {
      if (!Array.from(styleSheet.cssRules).some(rule => rule.cssText.includes('badgePulse'))) {
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
      }
    } catch (e) {
      // Silently fail if we can't access stylesheet
    }
  }

  return (
    <span className={className} style={badgeStyle}>
      {children}
    </span>
  );
};
