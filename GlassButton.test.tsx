import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GlassButton } from './GlassButton';

describe('GlassButton', () => {
  it('should render with children', () => {
    render(<GlassButton>Click Me</GlassButton>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<GlassButton className="custom-class">Button</GlassButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('should apply custom styles', () => {
    render(
      <GlassButton style={{ marginTop: '20px' }}>Button</GlassButton>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({ marginTop: '20px' });
  });

  describe('Variants', () => {
    it('should render with light variant', () => {
      render(<GlassButton variant="light">Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('should render with medium variant (default)', () => {
      render(<GlassButton>Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('should render with heavy variant', () => {
      render(<GlassButton variant="heavy">Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('should render with neon variant', () => {
      render(<GlassButton variant="neon">Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Themes', () => {
    it('should render with pink theme (default)', () => {
      render(<GlassButton>Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('should render with cyan theme', () => {
      render(<GlassButton theme="cyan">Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('should render with gradient theme', () => {
      render(<GlassButton theme="gradient">Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('should render with small size', () => {
      render(<GlassButton size="sm">Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ fontSize: '14px' });
    });

    it('should render with medium size (default)', () => {
      render(<GlassButton>Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ fontSize: '18px' });
    });

    it('should render with large size', () => {
      render(<GlassButton size="lg">Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ fontSize: '24px' });
    });

    it('should render with extra large size', () => {
      render(<GlassButton size="xl">Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ fontSize: '32px' });
    });
  });

  describe('Click handling', () => {
    it('should call onClick when clicked', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<GlassButton onClick={handleClick}>Button</GlassButton>);
      const button = screen.getByRole('button');

      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(
        <GlassButton onClick={handleClick} disabled>
          Button
        </GlassButton>
      );
      const button = screen.getByRole('button');

      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Disabled state', () => {
    it('should be disabled when disabled prop is true', () => {
      render(<GlassButton disabled>Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('should have reduced opacity when disabled', () => {
      render(<GlassButton disabled>Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ opacity: 0.5 });
    });

    it('should have not-allowed cursor when disabled', () => {
      render(<GlassButton disabled>Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ cursor: 'not-allowed' });
    });

    it('should have pointer cursor when not disabled', () => {
      render(<GlassButton>Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ cursor: 'pointer' });
    });
  });

  describe('Full width', () => {
    it('should take full width when fullWidth is true', () => {
      render(<GlassButton fullWidth>Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ width: '100%' });
    });

    it('should have auto width by default', () => {
      render(<GlassButton>Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ width: 'auto' });
    });
  });

  describe('Icon', () => {
    it('should render with icon', () => {
      const icon = <svg data-testid="test-icon" />;
      render(<GlassButton icon={icon}>Button</GlassButton>);

      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /button/i })).toBeInTheDocument();
    });

    it('should render without icon when not provided', () => {
      render(<GlassButton>Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button.querySelectorAll('svg')).toHaveLength(0);
    });
  });

  describe('Dots pattern', () => {
    it('should not have dots pattern by default', () => {
      render(<GlassButton>Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ backgroundImage: 'none' });
    });

    it('should have dots pattern when dots is true', () => {
      render(<GlassButton dots>Button</GlassButton>);
      const button = screen.getByRole('button');
      // Check that the button has a style attribute containing backgroundImage
      expect(button.style.backgroundImage).toBeTruthy();
    });
  });

  describe('Mouse interactions', () => {
    it('should change transform on mouse down', async () => {
      const user = userEvent.setup();
      render(<GlassButton>Button</GlassButton>);
      const button = screen.getByRole('button');

      // Initial state
      expect(button).toHaveStyle({ transform: 'translate(0, 0)' });

      // Mouse down
      await user.pointer({ keys: '[MouseLeft>]', target: button });
      expect(button).toHaveStyle({ transform: 'translate(3px, 3px)' });
    });

    it('should reset transform on mouse up', async () => {
      const user = userEvent.setup();
      render(<GlassButton>Button</GlassButton>);
      const button = screen.getByRole('button');

      // Press and release
      await user.pointer([
        { keys: '[MouseLeft>]', target: button },
        { keys: '[/MouseLeft]' },
      ]);

      expect(button).toHaveStyle({ transform: 'translate(0, 0)' });
    });

    it('should reset transform on mouse leave', async () => {
      const user = userEvent.setup();
      render(<GlassButton>Button</GlassButton>);
      const button = screen.getByRole('button');

      // Press and leave
      await user.pointer([
        { keys: '[MouseLeft>]', target: button },
        { target: document.body },
      ]);

      expect(button).toHaveStyle({ transform: 'translate(0, 0)' });
    });

    it('should not change transform when disabled', async () => {
      const user = userEvent.setup();
      render(<GlassButton disabled>Button</GlassButton>);
      const button = screen.getByRole('button');

      await user.pointer({ keys: '[MouseLeft>]', target: button });
      expect(button).toHaveStyle({ transform: 'translate(0, 0)' });
    });
  });

  describe('GlowEffect', () => {
    it('should render with glow effect by default', () => {
      render(<GlassButton>Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('should render without glow effect when glowEffect is false', () => {
      render(<GlassButton glowEffect={false}>Button</GlassButton>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });
});
