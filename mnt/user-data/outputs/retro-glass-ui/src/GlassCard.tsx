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
  const neonStyle =
    neonBorder && typeof themeColor === 'string' ? generateNeonBorderStyle(themeColor) : {};

  const cardStyle: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    ...glassStyle,
    ...neonStyle,
    padding: '24px',
    borderRadius: '20px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: hover && isHovered ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
    WebkitBackdropFilter: glassStyle.backdropFilter,
    ...style,
  };

  const scanlinesStyle: CSSProperties = scanlines
    ? {
        position: 'absolute',
        inset: 0,
        background: `repeating-linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.15) 0px,
          transparent 1px,
          transparent 2px,
          rgba(0, 0, 0, 0.15) 3px
        )`,
        pointerEvents: 'none',
        opacity: 0.5,
      }
    : {};

  const dotsStyle: CSSProperties = dots
    ? {
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(233, 69, 96, 0.3) 1px, transparent 1px)',
        backgroundSize: '8px 8px',
        opacity: 0.3,
        pointerEvents: 'none',
      }
    : {};

  const titleStyle: CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '8px',
    background: typeof themeColor === 'string' ? themeColor : themeColor,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontFamily: 'Arial Black, sans-serif',
    letterSpacing: '1px',
  };

  const subtitleStyle: CSSProperties = {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: '16px',
    letterSpacing: '0.5px',
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
