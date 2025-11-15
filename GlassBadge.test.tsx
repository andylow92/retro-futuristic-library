import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GlassBadge } from './GlassBadge';

describe('GlassBadge', () => {
  it('should render with children', () => {
    render(<GlassBadge>Badge Text</GlassBadge>);
    expect(screen.getByText('Badge Text')).toBeInTheDocument();
  });

  it('should render as a span element', () => {
    const { container } = render(<GlassBadge>Badge</GlassBadge>);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(
      <GlassBadge className="custom-class">Badge</GlassBadge>
    );
    const badge = container.querySelector('span');
    expect(badge).toHaveClass('custom-class');
  });

  it('should apply custom styles', () => {
    const { container } = render(
      <GlassBadge style={{ marginTop: '20px' }}>Badge</GlassBadge>
    );
    const badge = container.querySelector('span');
    expect(badge).toHaveStyle({ marginTop: '20px' });
  });

  describe('Variants', () => {
    it('should render with light variant (default)', () => {
      render(<GlassBadge>Badge</GlassBadge>);
      expect(screen.getByText('Badge')).toBeInTheDocument();
    });

    it('should render with medium variant', () => {
      render(<GlassBadge variant="medium">Badge</GlassBadge>);
      expect(screen.getByText('Badge')).toBeInTheDocument();
    });

    it('should render with heavy variant', () => {
      render(<GlassBadge variant="heavy">Badge</GlassBadge>);
      expect(screen.getByText('Badge')).toBeInTheDocument();
    });

    it('should render with neon variant', () => {
      render(<GlassBadge variant="neon">Badge</GlassBadge>);
      expect(screen.getByText('Badge')).toBeInTheDocument();
    });
  });

  describe('Themes', () => {
    it('should render with pink theme (default)', () => {
      render(<GlassBadge>Badge</GlassBadge>);
      expect(screen.getByText('Badge')).toBeInTheDocument();
    });

    it('should render with cyan theme', () => {
      render(<GlassBadge theme="cyan">Badge</GlassBadge>);
      expect(screen.getByText('Badge')).toBeInTheDocument();
    });

    it('should render with purple theme', () => {
      render(<GlassBadge theme="purple">Badge</GlassBadge>);
      expect(screen.getByText('Badge')).toBeInTheDocument();
    });

    it('should render with gradient theme', () => {
      render(<GlassBadge theme="gradient">Badge</GlassBadge>);
      expect(screen.getByText('Badge')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('should render with small size (default)', () => {
      const { container } = render(<GlassBadge>Badge</GlassBadge>);
      const badge = container.querySelector('span');
      expect(badge).toHaveStyle({ fontSize: '12px', padding: '4px 12px' });
    });

    it('should render with medium size', () => {
      const { container } = render(<GlassBadge size="md">Badge</GlassBadge>);
      const badge = container.querySelector('span');
      expect(badge).toHaveStyle({ fontSize: '14px', padding: '6px 16px' });
    });

    it('should render with large size', () => {
      const { container } = render(<GlassBadge size="lg">Badge</GlassBadge>);
      const badge = container.querySelector('span');
      expect(badge).toHaveStyle({ fontSize: '16px', padding: '8px 20px' });
    });
  });

  describe('Pulse animation', () => {
    it('should not have pulse animation by default', () => {
      const { container } = render(<GlassBadge>Badge</GlassBadge>);
      const badge = container.querySelector('span');
      expect(badge).toHaveStyle({ animation: 'none' });
    });

    it('should have pulse animation when pulse is true', () => {
      const { container } = render(<GlassBadge pulse>Badge</GlassBadge>);
      const badge = container.querySelector('span');
      const style = window.getComputedStyle(badge!);
      // The animation property should contain 'badgePulse'
      expect(style.animation).toContain('badgePulse');
    });
  });

  describe('Display and alignment', () => {
    it('should be inline-flex with centered content', () => {
      const { container } = render(<GlassBadge>Badge</GlassBadge>);
      const badge = container.querySelector('span');
      expect(badge).toHaveStyle({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      });
    });

    it('should have rounded borders', () => {
      const { container } = render(<GlassBadge>Badge</GlassBadge>);
      const badge = container.querySelector('span');
      expect(badge).toHaveStyle({ borderRadius: '20px' });
    });
  });

  describe('Complex scenarios', () => {
    it('should render with all props combined', () => {
      const { container } = render(
        <GlassBadge
          variant="heavy"
          theme="cyan"
          size="lg"
          pulse
          className="custom"
          style={{ margin: '10px' }}
        >
          Premium
        </GlassBadge>
      );

      const badge = container.querySelector('span');
      expect(screen.getByText('Premium')).toBeInTheDocument();
      expect(badge).toHaveClass('custom');
      expect(badge).toHaveStyle({ margin: '10px' });
    });
  });
});
