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
  
  // Retro sizes with more padding
  const retroSizes = {
    sm: { padding: '10px 20px', fontSize: '14px' },
    md: { padding: '14px 28px', fontSize: '18px' },
    lg: { padding: '18px 36px', fontSize: '24px' },
    xl: { padding: '24px 48px', fontSize: '32px' },
  };

  const buttonStyle: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    ...glassStyle,
    ...retroSizes[size],
    fontWeight: 900,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.1s ease',
    transform: isPressed ? 'translate(3px, 3px)' : 'translate(0, 0)',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    color: '#FFFFFF',
    border: typeof themeColor === 'string' ? `4px solid ${themeColor}` : '4px solid #e94560',
    borderRadius: '0px',
    fontFamily: 'Impact, Arial Black, sans-serif',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    WebkitBackdropFilter: glassStyle.backdropFilter,
    boxShadow: isPressed 
      ? `inset 0 0 20px ${typeof themeColor === 'string' ? themeColor + '40' : '#e9456040'}`
      : `6px 6px 0px rgba(0,0,0,0.8), 0 0 30px ${typeof themeColor === 'string' ? themeColor + '60' : '#e9456060'}, inset 0 0 20px ${typeof themeColor === 'string' ? themeColor + '20' : '#e9456020'}`,
    textShadow: `3px 3px 0px rgba(0,0,0,0.9), 0 0 20px ${typeof themeColor === 'string' ? themeColor : '#e94560'}`,
    backgroundImage: dots
      ? `radial-gradient(circle at 20% 50%, ${typeof themeColor === 'string' ? themeColor + '20' : '#e9456020'} 1.5px, transparent 1.5px), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 1.5px, transparent 1.5px)`
      : 'none',
    backgroundSize: '8px 8px, 8px 8px',
    backgroundPosition: '0 0, 4px 4px',
    ...style,
  };

  const contentStyle: CSSProperties = {
    position: 'relative',
    zIndex: 2,
  };

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
      <span style={contentStyle}>
        {icon && <span>{icon}</span>}
        {children}
      </span>
    </button>
  );
};
