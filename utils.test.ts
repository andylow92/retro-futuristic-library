import { describe, it, expect } from 'vitest';
import {
  getGlassStyle,
  getThemeColor,
  generateGlowStyle,
  generateNeonBorderStyle,
  generateTextGlowStyle,
  scanlinesCSS,
  dotsPatternCSS,
  chromeTextCSS,
  getSizeStyles,
} from './utils';
import { COLORS, GLASS_STYLES } from './types';

describe('getGlassStyle', () => {
  it('should return medium variant by default', () => {
    const style = getGlassStyle();
    expect(style).toEqual(GLASS_STYLES.medium);
  });

  it('should return light variant when specified', () => {
    const style = getGlassStyle('light');
    expect(style).toEqual(GLASS_STYLES.light);
  });

  it('should return heavy variant when specified', () => {
    const style = getGlassStyle('heavy');
    expect(style).toEqual(GLASS_STYLES.heavy);
  });

  it('should return neon variant when specified', () => {
    const style = getGlassStyle('neon');
    expect(style).toEqual(GLASS_STYLES.neon);
  });
});

describe('getThemeColor', () => {
  it('should return gradient by default', () => {
    const color = getThemeColor();
    expect(color).toBe('linear-gradient(135deg, #ff6ac1 0%, #00d4ff 50%, #bd93f9 100%)');
  });

  it('should return gradient when gradient theme is specified', () => {
    const color = getThemeColor('gradient');
    expect(color).toBe('linear-gradient(135deg, #ff6ac1 0%, #00d4ff 50%, #bd93f9 100%)');
  });

  it('should return pink color when pink theme is specified', () => {
    const color = getThemeColor('pink');
    expect(color).toBe(COLORS.pink);
  });

  it('should return orange color when orange theme is specified', () => {
    const color = getThemeColor('orange');
    expect(color).toBe(COLORS.orange);
  });

  it('should return cyan color when cyan theme is specified', () => {
    const color = getThemeColor('cyan');
    expect(color).toBe(COLORS.cyan);
  });

  it('should return purple color when purple theme is specified', () => {
    const color = getThemeColor('purple');
    expect(color).toBe(COLORS.purple);
  });

  it('should return neon color when neon theme is specified', () => {
    const color = getThemeColor('neon');
    expect(color).toBe(COLORS.neon);
  });

  it('should return blue color when blue theme is specified', () => {
    const color = getThemeColor('blue');
    expect(color).toBe(COLORS.blue);
  });
});

describe('generateGlowStyle', () => {
  it('should generate glow style with default intensity', () => {
    const style = generateGlowStyle('#ff6ac1');
    expect(style).toHaveProperty('boxShadow');
    expect(style.boxShadow).toContain('#ff6ac1');
    expect(style.boxShadow).toContain('20px');
    expect(style.boxShadow).toContain('40px');
    expect(style.boxShadow).toContain('30px');
  });

  it('should generate glow style with custom intensity', () => {
    const style = generateGlowStyle('#00d4ff', 2);
    expect(style).toHaveProperty('boxShadow');
    expect(style.boxShadow).toContain('#00d4ff');
    expect(style.boxShadow).toContain('40px'); // 20 * 2
    expect(style.boxShadow).toContain('80px'); // 40 * 2
    expect(style.boxShadow).toContain('60px'); // 30 * 2
  });

  it('should handle intensity of 0', () => {
    const style = generateGlowStyle('#ff6ac1', 0);
    expect(style).toHaveProperty('boxShadow');
    expect(style.boxShadow).toContain('0px');
  });
});

describe('generateNeonBorderStyle', () => {
  it('should generate neon border style', () => {
    const style = generateNeonBorderStyle('#39ff14');
    expect(style).toHaveProperty('boxShadow');
    expect(style.boxShadow).toContain('#39ff14');
    expect(style.boxShadow).toContain('inset');
    expect(style.boxShadow).toContain('25px');
    expect(style.boxShadow).toContain('20px');
  });

  it('should work with any color', () => {
    const style = generateNeonBorderStyle('#bd93f9');
    expect(style).toHaveProperty('boxShadow');
    expect(style.boxShadow).toContain('#bd93f9');
  });
});

describe('generateTextGlowStyle', () => {
  it('should generate text glow style', () => {
    const style = generateTextGlowStyle('#ff6ac1');
    expect(style).toHaveProperty('textShadow');
    expect(style.textShadow).toContain('#ff6ac1');
    expect(style.textShadow).toContain('8px');
    expect(style.textShadow).toContain('15px');
  });

  it('should work with any color', () => {
    const style = generateTextGlowStyle('#00d4ff');
    expect(style).toHaveProperty('textShadow');
    expect(style.textShadow).toContain('#00d4ff');
  });
});

describe('scanlinesCSS', () => {
  it('should be a valid CSS string', () => {
    expect(typeof scanlinesCSS).toBe('string');
    expect(scanlinesCSS).toContain('background');
    expect(scanlinesCSS).toContain('repeating-linear-gradient');
  });

  it('should include correct gradient parameters', () => {
    expect(scanlinesCSS).toContain('0deg');
    expect(scanlinesCSS).toContain('rgba(0, 0, 0, 0.3)');
    expect(scanlinesCSS).toContain('transparent');
  });
});

describe('dotsPatternCSS', () => {
  it('should generate dots pattern CSS with given color', () => {
    const css = dotsPatternCSS('#ff6ac1');
    expect(css).toContain('background-image');
    expect(css).toContain('radial-gradient');
    expect(css).toContain('#ff6ac1');
    expect(css).toContain('8px 8px');
    expect(css).toContain('opacity: 0.3');
  });

  it('should work with different colors', () => {
    const css = dotsPatternCSS('#00d4ff');
    expect(css).toContain('#00d4ff');
  });
});

describe('chromeTextCSS', () => {
  it('should be a valid CSS string', () => {
    expect(typeof chromeTextCSS).toBe('string');
    expect(chromeTextCSS).toContain('background');
    expect(chromeTextCSS).toContain('linear-gradient');
  });

  it('should include background-clip properties', () => {
    expect(chromeTextCSS).toContain('background-clip');
    expect(chromeTextCSS).toContain('-webkit-background-clip');
    expect(chromeTextCSS).toContain('-webkit-text-fill-color');
  });
});

describe('getSizeStyles', () => {
  it('should return medium size by default', () => {
    const style = getSizeStyles();
    expect(style).toEqual({
      padding: '12px 24px',
      fontSize: '16px',
      borderRadius: '12px',
    });
  });

  it('should return small size when specified', () => {
    const style = getSizeStyles('sm');
    expect(style).toEqual({
      padding: '8px 16px',
      fontSize: '14px',
      borderRadius: '8px',
    });
  });

  it('should return medium size when specified', () => {
    const style = getSizeStyles('md');
    expect(style).toEqual({
      padding: '12px 24px',
      fontSize: '16px',
      borderRadius: '12px',
    });
  });

  it('should return large size when specified', () => {
    const style = getSizeStyles('lg');
    expect(style).toEqual({
      padding: '16px 32px',
      fontSize: '20px',
      borderRadius: '16px',
    });
  });

  it('should return extra large size when specified', () => {
    const style = getSizeStyles('xl');
    expect(style).toEqual({
      padding: '24px 48px',
      fontSize: '28px',
      borderRadius: '20px',
    });
  });
});
