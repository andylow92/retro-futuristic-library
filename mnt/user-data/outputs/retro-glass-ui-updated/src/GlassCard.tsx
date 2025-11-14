import React, { useState, CSSProperties } from 'react';
import { CardProps } from './types';
import { getGlassStyle, getThemeColor, generateNeonBorderStyle } from './utils';

export const GlassCard: React.FC<CardProps> = ({
  children,
  className = '',
  style = {},
  variant = 'medium',
  theme = 'gradient',
  glowEffect = true,
  scanlines = false,
  dots = false,
  neonBorder = false,
  hover = true,
  title,
  subtitle,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const glassStyle = getGlassStyle(variant);
  const themeColor = getThemeColor(theme);

  const cardStyle: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    ...glassStyle,
    padding: '24px',
    borderRadius: '0px',
    transition: 'all 0.15s ease',
    transform: hover && isHovered ? 'translate(-4px, -4px)' : 'translate(0, 0)',
    WebkitBackdropFilter: glassStyle.backdropFilter,
    border: neonBorder && typeof themeColor === 'string' 
      ? `5px solid ${themeColor}` 
      : '5px solid rgba(255,255,255,0.3)',
    boxShadow: isHovered
      ? `8px 8px 0px rgba(0,0,0,0.9), 0 0 40px ${typeof themeColor === 'string' ? themeColor + '80' : '#e9456080'}, inset 0 0 30px ${typeof themeColor === 'string' ? themeColor + '30' : '#e9456030'}`
      : `6px 6px 0px rgba(0,0,0,0.8), 0 0 30px ${typeof themeColor === 'string' ? themeColor + '60' : '#e9456060'}, inset 0 0 20px ${typeof themeColor === 'string' ? themeColor + '20' : '#e9456020'}`,
    backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.08) 2px, transparent 2px)',
    backgroundSize: '12px 12px',
    ...style,
  };

  const scanlinesStyle: CSSProperties = scanlines
    ? {
        position: 'absolute',
        inset: 0,
        background: `repeating-linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.3) 0px,
          transparent 1px,
          transparent 3px,
          rgba(0, 0, 0, 0.3) 4px
        )`,
        pointerEvents: 'none',
        opacity: 0.5,
      }
    : {};

  const dotsStyle: CSSProperties = dots
    ? {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100px',
        height: '100px',
        backgroundImage: `radial-gradient(circle, ${typeof themeColor === 'string' ? themeColor + '40' : '#e9456040'} 2px, transparent 2px)`,
        backgroundSize: '10px 10px',
        opacity: 0.3,
        pointerEvents: 'none',
      }
    : {};

  const titleStyle: CSSProperties = {
    fontSize: '28px',
    fontWeight: 900,
    marginBottom: '8px',
    background: typeof themeColor === 'string' ? themeColor : themeColor,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontFamily: 'Impact, Arial Black, sans-serif',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
  };

  const subtitleStyle: CSSProperties = {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '16px',
    letterSpacing: '1px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };

  return (
    <div
      className={className}
      style={cardStyle}
      onMouseEnter={() => hover && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {scanlines && <div style={scanlinesStyle} />}
      {dots && <div style={dotsStyle} />}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {title && <h3 style={titleStyle}>{title}</h3>}
        {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
        {children}
      </div>
    </div>
  );
};
