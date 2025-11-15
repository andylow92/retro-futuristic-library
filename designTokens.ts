/**
 * Design Tokens for Retro Glass UI
 *
 * Centralized design system tokens for consistent styling across all components.
 * These tokens define spacing, sizing, colors, effects, and other design primitives.
 */

/**
 * Spacing scale following an 8px grid system
 */
export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '48px',
} as const;

/**
 * Border radius values for different component sizes
 */
export const BORDER_RADIUS = {
  none: '0px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  round: '20px', // For badges and pills
} as const;

/**
 * Font sizes aligned with component size variants
 */
export const FONT_SIZE = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '28px',
  '4xl': '32px',
} as const;

/**
 * Font weights for typography hierarchy
 */
export const FONT_WEIGHT = {
  normal: 500,
  bold: 700,
  black: 900,
} as const;

/**
 * Letter spacing values for different text styles
 */
export const LETTER_SPACING = {
  tight: '0.5px',
  normal: '1px',
  wide: '2px',
} as const;

/**
 * Component size variants with padding and font size
 */
export const SIZE_VARIANTS = {
  sm: {
    padding: `${SPACING.sm} ${SPACING.lg}`,
    fontSize: FONT_SIZE.sm,
    borderRadius: BORDER_RADIUS.sm,
  },
  md: {
    padding: `${SPACING.md} ${SPACING.xl}`,
    fontSize: FONT_SIZE.md,
    borderRadius: BORDER_RADIUS.md,
  },
  lg: {
    padding: `${SPACING.lg} ${SPACING['2xl']}`,
    fontSize: FONT_SIZE.xl,
    borderRadius: BORDER_RADIUS.lg,
  },
  xl: {
    padding: `${SPACING.xl} ${SPACING['3xl']}`,
    fontSize: FONT_SIZE['3xl'],
    borderRadius: BORDER_RADIUS.xl,
  },
} as const;

/**
 * Button-specific size variants with enhanced retro styling
 */
export const BUTTON_SIZE_VARIANTS = {
  sm: {
    padding: '10px 20px',
    fontSize: FONT_SIZE.sm,
  },
  md: {
    padding: '14px 28px',
    fontSize: FONT_SIZE.lg,
  },
  lg: {
    padding: '18px 36px',
    fontSize: FONT_SIZE['2xl'],
  },
  xl: {
    padding: '24px 48px',
    fontSize: FONT_SIZE['4xl'],
  },
} as const;

/**
 * Badge-specific size variants
 */
export const BADGE_SIZE_VARIANTS = {
  sm: {
    padding: '4px 12px',
    fontSize: FONT_SIZE.xs,
  },
  md: {
    padding: '6px 16px',
    fontSize: FONT_SIZE.sm,
  },
  lg: {
    padding: '8px 20px',
    fontSize: FONT_SIZE.md,
  },
} as const;

/**
 * Shadow and glow effect intensities
 */
export const EFFECTS = {
  glow: {
    small: {
      spread: 20,
      blur: 40,
      inset: 30,
    },
    medium: {
      spread: 30,
      blur: 60,
      inset: 40,
    },
    large: {
      spread: 40,
      blur: 80,
      inset: 50,
    },
  },
  shadow: {
    offset: {
      small: '3px 3px',
      medium: '6px 6px',
      large: '8px 8px',
    },
    blur: {
      small: '0px',
      medium: '20px',
      large: '40px',
    },
  },
  border: {
    thin: '1px',
    medium: '2px',
    thick: '4px',
    heavy: '5px',
  },
  textGlow: {
    near: 8,
    far: 15,
  },
  neonBorder: {
    inset: 25,
    outer: 20,
  },
} as const;

/**
 * Pattern and texture settings
 */
export const PATTERNS = {
  dots: {
    size: '8px 8px',
    opacity: 0.3,
    radius: '1px',
    largeRadius: '2px',
  },
  scanlines: {
    spacing: '3px',
    thickness: '1px',
    opacity: 0.15,
  },
  grid: {
    size: '50px 50px',
    opacity: 0.4,
  },
} as const;

/**
 * Animation durations and timing functions
 */
export const TRANSITIONS = {
  fast: '0.1s',
  normal: '0.15s',
  slow: '0.3s',
  ease: 'ease',
  easeInOut: 'ease-in-out',
} as const;

/**
 * Transform values for interactive states
 */
export const TRANSFORMS = {
  press: {
    x: '3px',
    y: '3px',
  },
  hover: {
    x: '-4px',
    y: '-4px',
  },
  scale: {
    normal: 1,
    hover: 1.05,
  },
} as const;

/**
 * Opacity values for different states
 */
export const OPACITY = {
  disabled: 0.5,
  hover: 0.9,
  full: 1,
  subtle: 0.3,
  medium: 0.5,
  strong: 0.8,
} as const;

/**
 * Z-index layering system
 */
export const Z_INDEX = {
  base: 1,
  content: 2,
  overlay: 10,
  modal: 100,
} as const;

/**
 * Container max widths
 */
export const CONTAINER_MAX_WIDTH = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  full: '100%',
} as const;

/**
 * Background gradients for containers
 */
export const BACKGROUNDS = {
  dark: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  gradient:
    'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #1a1a2e 100%)',
  deep: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #16213e 100%)',
} as const;

/**
 * Font families
 */
export const FONT_FAMILY = {
  heading: 'Impact, Arial Black, sans-serif',
  body: 'Arial, sans-serif',
  panelHeader: 'Arial Black, sans-serif',
} as const;
