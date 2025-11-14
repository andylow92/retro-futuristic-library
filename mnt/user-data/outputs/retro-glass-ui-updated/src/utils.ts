import { COLORS, GLASS_STYLES, ColorTheme, GlassVariant } from './types';

export const getGlassStyle = (variant: GlassVariant = 'medium') => {
  return GLASS_STYLES[variant];
};

export const getThemeColor = (theme: ColorTheme = 'gradient') => {
  if (theme === 'gradient') {
    return 'linear-gradient(90deg, #e94560, #ffb86c, #82ccdd, #a29bfe)';
  }
  return COLORS[theme];
};

export const generateGlowStyle = (color: string, intensity: number = 1) => {
  return {
    boxShadow: `
      0 0 ${20 * intensity}px ${color}30,
      0 0 ${40 * intensity}px ${color}20,
      inset 0 0 ${30 * intensity}px rgba(255, 255, 255, 0.05)
    `,
  };
};

export const generateNeonBorderStyle = (color: string) => {
  return {
    boxShadow: `
      inset 0 0 25px ${color}20,
      0 0 20px ${color}30,
      0 5px 20px rgba(0, 0, 0, 0.4)
    `,
  };
};

export const generateTextGlowStyle = (color: string) => {
  return {
    textShadow: `
      0 0 8px ${color}60,
      0 0 15px ${color}40,
      2px 2px 0px rgba(0, 0, 0, 0.8)
    `,
  };
};

export const scanlinesCSS = `
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15) 0px,
    transparent 1px,
    transparent 2px,
    rgba(0, 0, 0, 0.15) 3px
  );
`;

export const dotsPatternCSS = (color: string) => `
  background-image: radial-gradient(circle, ${color} 1px, transparent 1px);
  background-size: 8px 8px;
  opacity: 0.3;
`;

export const chromeTextCSS = `
  background: linear-gradient(to bottom, #eee 0%, #999 50%, #777 51%, #555 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const getSizeStyles = (size: 'sm' | 'md' | 'lg' | 'xl' = 'md') => {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: '14px', borderRadius: '8px' },
    md: { padding: '12px 24px', fontSize: '16px', borderRadius: '12px' },
    lg: { padding: '16px 32px', fontSize: '20px', borderRadius: '16px' },
    xl: { padding: '24px 48px', fontSize: '28px', borderRadius: '20px' },
  };
  return sizes[size];
};
