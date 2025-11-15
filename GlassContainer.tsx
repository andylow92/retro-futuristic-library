import React, { CSSProperties } from 'react';
import { BaseGlassProps } from './types';

/**
 * Props for the GlassContainer component
 */
interface GlassContainerProps extends BaseGlassProps {
  /** Maximum width of the container */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Whether to center the container horizontally */
  centered?: boolean;
  /** Background gradient style */
  background?: 'dark' | 'gradient' | 'deep';
}

/**
 * GlassContainer Component
 *
 * A full-height layout container with retro grid background and gradient effects.
 * Perfect for wrapping page content with consistent styling.
 *
 * @example
 * ```tsx
 * <GlassContainer maxWidth="lg" background="gradient">
 *   <h1>Welcome</h1>
 *   <p>Your app content</p>
 * </GlassContainer>
 * ```
 */
export const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  className = '',
  style = {},
  maxWidth = 'lg',
  centered = true,
  background = 'gradient',
}) => {
  const maxWidthValues = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    full: '100%',
  };

  const backgrounds = {
    dark: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    gradient:
      'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #1a1a2e 100%)',
    deep: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #16213e 100%)',
  };

  const containerStyle: CSSProperties = {
    minHeight: '100vh',
    background: backgrounds[background],
    position: 'relative',
    overflow: 'hidden',
    ...style,
  };

  const contentStyle: CSSProperties = {
    position: 'relative',
    zIndex: 10,
    maxWidth: maxWidthValues[maxWidth],
    margin: centered ? '0 auto' : '0',
    padding: '24px',
  };

  // Static retro grid pattern
  const gridStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
    opacity: 0.4,
  };

  return (
    <div className={className} style={containerStyle}>
      <div style={gridStyle} />
      <div style={contentStyle}>{children}</div>
    </div>
  );
};
