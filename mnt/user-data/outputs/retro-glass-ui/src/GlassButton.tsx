import React, { useState, CSSProperties } from 'react';
import { ButtonProps } from './types';
import { getGlassStyle, getThemeColor, generateGlowStyle, getSizeStyles, dotsPatternCSS } from './utils';

export const GlassButton: React.FC<ButtonProps> = ({
  children,
  className = '',
  style = {},
  variant = 'medium',
  theme = 'pink',
  glowEffect = true,
  dots = false,
  onClick,
  disabled = false,
  size = 'md',
  fullWidth = false,
  icon,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const glassStyle = getGlassStyle(variant);
  const themeColor = getThemeColor(theme);
  const sizeStyles = getSizeStyles(size);
  const glowStyle = glowEffect && !disabled ? generateGlowStyle(typeof themeColor === 'string' ? themeColor : '#e94560') : {};

  const buttonStyle: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    ...glassStyle,
    ...sizeStyles,
    ...glowStyle,
    fontWeight: 'bold',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isPressed ? 'scale(0.95)' : isHovered ? 'scale(1.02)' : 'scale(1)',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    color: '#FFFFFF',
    border: glassStyle.border,
    borderRadius: sizeStyles.borderRadius,
    fontFamily: 'Arial Black, sans-serif',
    letterSpacing: '1px',
    WebkitBackdropFilter: glassStyle.backdropFilter,
    ...style,
  };

  const contentStyle: CSSProperties = {
    position: 'relative',
    zIndex: 2,
    textShadow: '0 0 15px rgba(233, 69, 96, 0.5), 2px 2px 0px rgba(0, 0, 0, 0.8)',
  };

  const dotsStyle: CSSProperties = dots
    ? {
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, #e94560 1px, transparent 1px)',
        backgroundSize: '8px 8px',
        opacity: 0.3,
        pointerEvents: 'none',
      }
    : {};

  return (
    <button
      className={className}
      style={buttonStyle}
      onClick={disabled ? undefined : onClick}
      onMouseDown={() => !disabled && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => {
        setIsPressed(false);
        setIsHovered(false);
      }}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      disabled={disabled}
    >
      {dots && <div style={dotsStyle} />}
      <span style={contentStyle}>
        {icon && <span>{icon}</span>}
        {children}
      </span>
    </button>
  );
};
