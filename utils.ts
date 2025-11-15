import { COLORS, GLASS_STYLES, ColorTheme, GlassVariant } from './types';
import { EFFECTS, PATTERNS, SIZE_VARIANTS, OPACITY } from './designTokens';

/**
 * Retrieves the glass morphism style configuration for a given variant.
 *
 * @param variant - The glass variant to apply ('light' | 'medium' | 'heavy' | 'neon')
 * @returns CSS properties object containing background, backdrop-filter, and border styles
 *
 * @example
 * ```tsx
 * const glassStyle = getGlassStyle('heavy');
 * // Returns: { background: 'rgba(...)', backdropFilter: '...', border: '...' }
 * ```
 */
export const getGlassStyle = (variant: GlassVariant = 'medium') => {
  return GLASS_STYLES[variant];
};

/**
 * Gets the color value or gradient for a given theme.
 *
 * @param theme - The color theme to apply
 * @returns A hex color string or CSS gradient string
 *
 * @example
 * ```tsx
 * const color = getThemeColor('pink');    // Returns: '#ff6ac1'
 * const grad = getThemeColor('gradient'); // Returns: 'linear-gradient(...)'
 * ```
 */
export const getThemeColor = (theme: ColorTheme = 'gradient') => {
  if (theme === 'gradient') {
    return 'linear-gradient(135deg, #ff6ac1 0%, #00d4ff 50%, #bd93f9 100%)';
  }
  return COLORS[theme];
};

/**
 * Generates a glow effect style with customizable intensity.
 *
 * Creates a multi-layered box-shadow for a glowing effect with outer glow
 * and subtle inner highlight.
 *
 * @param color - The base color for the glow effect (hex or rgb)
 * @param intensity - Multiplier for glow spread and blur (default: 1)
 * @returns CSS properties object with box-shadow
 *
 * @example
 * ```tsx
 * const glow = generateGlowStyle('#ff6ac1', 2);
 * // Returns stronger glow with 2x intensity
 * ```
 */
export const generateGlowStyle = (color: string, intensity: number = 1) => {
  const { glow } = EFFECTS;
  return {
    boxShadow: `
      0 0 ${glow.small.spread * intensity}px ${color}30,
      0 0 ${glow.small.blur * intensity}px ${color}20,
      inset 0 0 ${glow.small.inset * intensity}px rgba(255, 255, 255, 0.05)
    `,
  };
};

/**
 * Generates a neon border glow style.
 *
 * Creates an inset and outer glow effect to simulate a neon-lit border.
 *
 * @param color - The neon color (hex or rgb)
 * @returns CSS properties object with box-shadow for neon effect
 *
 * @example
 * ```tsx
 * const neon = generateNeonBorderStyle('#39ff14');
 * ```
 */
export const generateNeonBorderStyle = (color: string) => {
  const { neonBorder } = EFFECTS;
  return {
    boxShadow: `
      inset 0 0 ${neonBorder.inset}px ${color}20,
      0 0 ${neonBorder.outer}px ${color}30,
      0 5px 20px rgba(0, 0, 0, 0.4)
    `,
  };
};

/**
 * Generates a text glow effect style.
 *
 * Creates a glowing text-shadow effect with depth shadow for retro aesthetics.
 *
 * @param color - The glow color for the text
 * @returns CSS properties object with text-shadow
 *
 * @example
 * ```tsx
 * const textGlow = generateTextGlowStyle('#00d4ff');
 * ```
 */
export const generateTextGlowStyle = (color: string) => {
  const { textGlow } = EFFECTS;
  return {
    textShadow: `
      0 0 ${textGlow.near}px ${color}60,
      0 0 ${textGlow.far}px ${color}40,
      2px 2px 0px rgba(0, 0, 0, 0.8)
    `,
  };
};

/**
 * CSS string for retro scanlines effect.
 *
 * Creates horizontal scanlines using a repeating linear gradient.
 * Apply as a background overlay with absolute positioning.
 *
 * @example
 * ```tsx
 * <div style={{ background: scanlinesCSS }} />
 * ```
 */
export const scanlinesCSS = `
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, ${OPACITY.subtle}) 0px,
    transparent ${PATTERNS.scanlines.thickness},
    transparent 2px,
    rgba(0, 0, 0, ${OPACITY.subtle}) ${PATTERNS.scanlines.spacing}
  );
`;

/**
 * Generates a dots pattern CSS string.
 *
 * Creates a subtle dotted pattern overlay using radial gradients.
 *
 * @param color - The color for the dots
 * @returns CSS string for background-image, background-size, and opacity
 *
 * @example
 * ```tsx
 * const pattern = dotsPatternCSS('#ff6ac1');
 * ```
 */
export const dotsPatternCSS = (color: string) => `
  background-image: radial-gradient(circle, ${color} ${PATTERNS.dots.radius}, transparent ${PATTERNS.dots.radius});
  background-size: ${PATTERNS.dots.size};
  opacity: ${PATTERNS.dots.opacity};
`;

/**
 * CSS string for chrome/metallic text effect.
 *
 * Creates a gradient-based metallic text effect using background-clip.
 *
 * @example
 * ```tsx
 * <h1 style={{ ...chromeTextCSS }}>Shiny Text</h1>
 * ```
 */
export const chromeTextCSS = `
  background: linear-gradient(to bottom, #eee 0%, #999 50%, #777 51%, #555 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

/**
 * Gets size-specific styles for components.
 *
 * Returns padding, font size, and border radius values based on size variant.
 *
 * @param size - Size variant ('sm' | 'md' | 'lg' | 'xl')
 * @returns Object with padding, fontSize, and borderRadius CSS values
 *
 * @example
 * ```tsx
 * const sizeStyle = getSizeStyles('lg');
 * // Returns: { padding: '16px 32px', fontSize: '20px', borderRadius: '16px' }
 * ```
 */
export const getSizeStyles = (size: 'sm' | 'md' | 'lg' | 'xl' = 'md') => {
  return SIZE_VARIANTS[size];
};
