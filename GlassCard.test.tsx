import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GlassCard } from './GlassCard';

describe('GlassCard', () => {
  it('should render with children', () => {
    render(<GlassCard>Card Content</GlassCard>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(
      <GlassCard className="custom-class">Content</GlassCard>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should apply custom styles', () => {
    const { container } = render(
      <GlassCard style={{ marginTop: '20px' }}>Content</GlassCard>
    );
    expect(container.firstChild).toHaveStyle({ marginTop: '20px' });
  });

  describe('Title and Subtitle', () => {
    it('should render with title', () => {
      render(<GlassCard title="Card Title">Content</GlassCard>);
      expect(screen.getByText('Card Title')).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Card Title');
    });

    it('should render with subtitle', () => {
      render(<GlassCard subtitle="Card Subtitle">Content</GlassCard>);
      expect(screen.getByText('Card Subtitle')).toBeInTheDocument();
    });

    it('should render with both title and subtitle', () => {
      render(
        <GlassCard title="Card Title" subtitle="Card Subtitle">
          Content
        </GlassCard>
      );
      expect(screen.getByText('Card Title')).toBeInTheDocument();
      expect(screen.getByText('Card Subtitle')).toBeInTheDocument();
    });

    it('should render without title or subtitle', () => {
      render(<GlassCard>Content</GlassCard>);
      expect(screen.queryByRole('heading')).not.toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should render with light variant', () => {
      const { container } = render(
        <GlassCard variant="light">Content</GlassCard>
      );
      expect(container.firstChild).toBeInTheDocument();
    });

    it('should render with medium variant (default)', () => {
      const { container } = render(<GlassCard>Content</GlassCard>);
      expect(container.firstChild).toBeInTheDocument();
    });

    it('should render with heavy variant', () => {
      const { container } = render(
        <GlassCard variant="heavy">Content</GlassCard>
      );
      expect(container.firstChild).toBeInTheDocument();
    });

    it('should render with neon variant', () => {
      const { container } = render(
        <GlassCard variant="neon">Content</GlassCard>
      );
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('Themes', () => {
    it('should render with gradient theme (default)', () => {
      const { container } = render(<GlassCard>Content</GlassCard>);
      expect(container.firstChild).toBeInTheDocument();
    });

    it('should render with pink theme', () => {
      const { container } = render(<GlassCard theme="pink">Content</GlassCard>);
      expect(container.firstChild).toBeInTheDocument();
    });

    it('should render with cyan theme', () => {
      const { container } = render(<GlassCard theme="cyan">Content</GlassCard>);
      expect(container.firstChild).toBeInTheDocument();
    });

    it('should render with purple theme', () => {
      const { container } = render(
        <GlassCard theme="purple">Content</GlassCard>
      );
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('Scanlines effect', () => {
    it('should not render scanlines by default', () => {
      const { container } = render(<GlassCard>Content</GlassCard>);
      const card = container.firstChild as HTMLElement;
      // Scanlines are rendered as an extra div
      expect(card.children.length).toBe(1); // Only content wrapper
    });

    it('should render scanlines when scanlines is true', () => {
      const { container } = render(<GlassCard scanlines>Content</GlassCard>);
      const card = container.firstChild as HTMLElement;
      // Should have scanlines div + content wrapper
      expect(card.children.length).toBeGreaterThan(1);
    });
  });

  describe('Dots effect', () => {
    it('should not render dots by default', () => {
      const { container } = render(<GlassCard>Content</GlassCard>);
      const card = container.firstChild as HTMLElement;
      expect(card.children.length).toBe(1); // Only content wrapper
    });

    it('should render dots when dots is true', () => {
      const { container } = render(<GlassCard dots>Content</GlassCard>);
      const card = container.firstChild as HTMLElement;
      expect(card.children.length).toBeGreaterThan(1);
    });

    it('should render both scanlines and dots', () => {
      const { container } = render(
        <GlassCard scanlines dots>
          Content
        </GlassCard>
      );
      const card = container.firstChild as HTMLElement;
      // Should have scanlines + dots + content wrapper
      expect(card.children.length).toBe(3);
    });
  });

  describe('Neon border', () => {
    it('should not have neon border by default', () => {
      const { container } = render(<GlassCard>Content</GlassCard>);
      const card = container.firstChild as HTMLElement;
      // Check that border style is set
      expect(card.style.border).toBeTruthy();
    });

    it('should have neon border when neonBorder is true with pink theme', () => {
      const { container } = render(
        <GlassCard neonBorder theme="pink">
          Content
        </GlassCard>
      );
      const card = container.firstChild as HTMLElement;
      // Check that border style contains the pink color (in RGB format)
      expect(card.style.border).toContain('rgb(255, 106, 193)');
    });
  });

  describe('Hover effect', () => {
    it('should change transform on hover by default', async () => {
      const user = userEvent.setup();
      const { container } = render(<GlassCard>Content</GlassCard>);
      const card = container.firstChild as HTMLElement;

      // Initial state
      expect(card).toHaveStyle({ transform: 'translate(0, 0)' });

      // Hover
      await user.hover(card);
      expect(card).toHaveStyle({ transform: 'translate(-4px, -4px)' });

      // Unhover
      await user.unhover(card);
      expect(card).toHaveStyle({ transform: 'translate(0, 0)' });
    });

    it('should not change transform when hover is false', async () => {
      const user = userEvent.setup();
      const { container } = render(<GlassCard hover={false}>Content</GlassCard>);
      const card = container.firstChild as HTMLElement;

      expect(card).toHaveStyle({ transform: 'translate(0, 0)' });

      await user.hover(card);
      expect(card).toHaveStyle({ transform: 'translate(0, 0)' });
    });
  });

  describe('GlowEffect', () => {
    it('should render with glow effect by default', () => {
      const { container } = render(<GlassCard>Content</GlassCard>);
      expect(container.firstChild).toBeInTheDocument();
    });

    it('should render without glow effect when glowEffect is false', () => {
      const { container } = render(
        <GlassCard glowEffect={false}>Content</GlassCard>
      );
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('Complex scenarios', () => {
    it('should render with all props combined', () => {
      render(
        <GlassCard
          title="Title"
          subtitle="Subtitle"
          variant="heavy"
          theme="cyan"
          scanlines
          dots
          neonBorder
          hover
          glowEffect
          className="custom-class"
          style={{ margin: '10px' }}
        >
          Content
        </GlassCard>
      );

      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Subtitle')).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });
});
