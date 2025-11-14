import { CSSProperties, ReactNode } from 'react';

export type GlassVariant = 'light' | 'medium' | 'heavy' | 'neon';
export type ColorTheme = 'pink' | 'orange' | 'cyan' | 'purple' | 'neon' | 'blue' | 'gradient';
export type Size = 'sm' | 'md' | 'lg' | 'xl';

export interface BaseGlassProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: GlassVariant;
  theme?: ColorTheme;
  glowEffect?: boolean;
  scanlines?: boolean;
  dots?: boolean;
}

export interface ButtonProps extends BaseGlassProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  size?: Size;
  fullWidth?: boolean;
  icon?: ReactNode;
}

export interface CardProps extends BaseGlassProps {
  title?: string;
  subtitle?: string;
  neonBorder?: boolean;
  hover?: boolean;
}

export interface PanelProps extends BaseGlassProps {
  header?: ReactNode;
  footer?: ReactNode;
  bordered?: boolean;
}

export interface BadgeProps extends BaseGlassProps {
  size?: Size;
  pulse?: boolean;
}

export const COLORS = {
  pink: '#ff6ac1',
  orange: '#ffb86c',
  cyan: '#00d4ff',
  purple: '#bd93f9',
  neon: '#39ff14',
  blue: '#5865f2',
} as const;

export const GLASS_STYLES = {
  light: {
    background: 'rgba(255, 255, 255, 0.04)',
    backdropFilter: 'blur(20px) saturate(120%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  medium: {
    background: 'rgba(255, 255, 255, 0.06)',
    backdropFilter: 'blur(30px) saturate(150%)',
    border: '2px solid rgba(255, 255, 255, 0.15)',
  },
  heavy: {
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(40px) saturate(180%)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
  },
  neon: {
    background: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(25px) saturate(140%)',
    border: '2px solid rgba(255, 255, 255, 0.12)',
  },
} as const;
