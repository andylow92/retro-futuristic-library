import React, { CSSProperties } from 'react';
import { PanelProps } from './types';
import { getGlassStyle, chromeTextCSS } from './utils';

export const GlassPanel: React.FC<PanelProps> = ({
  children,
  className = '',
  style = {},
  variant = 'heavy',
  theme = 'gradient',
  scanlines = false,
  header,
  footer,
  bordered = true,
}) => {
  const glassStyle = getGlassStyle(variant);

  const panelStyle: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    ...glassStyle,
    borderRadius: '24px',
    WebkitBackdropFilter: glassStyle.backdropFilter,
    border: bordered ? glassStyle.border : 'none',
    boxShadow: `
      inset 0 0 30px rgba(255, 255, 255, 0.05),
      0 20px 40px rgba(0, 0, 0, 0.5)
    `,
    ...style,
  };

  const headerStyle: CSSProperties = {
    padding: '20px 24px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'Arial Black, sans-serif',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  };

  const contentStyle: CSSProperties = {
    padding: '24px',
    position: 'relative',
    zIndex: 1,
  };

  const footerStyle: CSSProperties = {
    padding: '20px 24px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '14px',
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
        opacity: 0.3,
      }
    : {};

  return (
    <div className={className} style={panelStyle}>
      {scanlines && <div style={scanlinesStyle} />}
      {header && <div style={headerStyle}>{header}</div>}
      <div style={contentStyle}>{children}</div>
      {footer && <div style={footerStyle}>{footer}</div>}
    </div>
  );
};
