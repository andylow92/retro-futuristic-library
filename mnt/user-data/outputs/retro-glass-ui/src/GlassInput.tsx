import React, { CSSProperties, InputHTMLAttributes } from 'react';
import { GlassVariant, ColorTheme } from './types';
import { getGlassStyle, getThemeColor } from './utils';

interface GlassInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: GlassVariant;
  theme?: ColorTheme;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  error?: string;
}

export const GlassInput: React.FC<GlassInputProps> = ({
  className = '',
  style = {},
  variant = 'medium',
  theme = 'cyan',
  fullWidth = false,
  icon,
  error,
  ...inputProps
}) => {
  const glassStyle = getGlassStyle(variant);
  const themeColor = getThemeColor(theme);

  const containerStyle: CSSProperties = {
    position: 'relative',
    width: fullWidth ? '100%' : 'auto',
    display: 'inline-block',
  };

  const inputStyle: CSSProperties = {
    ...glassStyle,
    width: '100%',
    padding: icon ? '12px 16px 12px 44px' : '12px 16px',
    borderRadius: '12px',
    fontSize: '16px',
    color: '#FFFFFF',
    outline: 'none',
    transition: 'all 0.3s ease',
    border: error
      ? '2px solid #e94560'
      : typeof themeColor === 'string'
        ? `2px solid ${themeColor}40`
        : '2px solid rgba(255, 255, 255, 0.15)',
    WebkitBackdropFilter: glassStyle.backdropFilter,
    fontFamily: 'Arial, sans-serif',
    ...style,
  };

  const iconStyle: CSSProperties = {
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'rgba(255, 255, 255, 0.6)',
    pointerEvents: 'none',
  };

  const errorStyle: CSSProperties = {
    marginTop: '6px',
    fontSize: '12px',
    color: '#e94560',
    fontWeight: '500',
  };

  return (
    <div style={containerStyle}>
      <div style={{ position: 'relative' }}>
        {icon && <div style={iconStyle}>{icon}</div>}
        <input className={className} style={inputStyle} {...inputProps} />
      </div>
      {error && <div style={errorStyle}>{error}</div>}
    </div>
  );
};
