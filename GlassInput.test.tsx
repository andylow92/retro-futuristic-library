import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GlassInput } from './GlassInput';

describe('GlassInput', () => {
  it('should render an input element', () => {
    render(<GlassInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<GlassInput className="custom-class" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-class');
  });

  it('should apply custom styles', () => {
    render(<GlassInput style={{ marginTop: '20px' }} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveStyle({ marginTop: '20px' });
  });

  describe('Variants', () => {
    it('should render with light variant', () => {
      render(<GlassInput variant="light" />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('should render with medium variant (default)', () => {
      render(<GlassInput />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('should render with heavy variant', () => {
      render(<GlassInput variant="heavy" />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('should render with neon variant', () => {
      render(<GlassInput variant="neon" />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe('Themes', () => {
    it('should render with cyan theme (default)', () => {
      render(<GlassInput />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('should render with pink theme', () => {
      render(<GlassInput theme="pink" />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('should render with purple theme', () => {
      render(<GlassInput theme="purple" />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe('Full width', () => {
    it('should not be full width by default', () => {
      const { container } = render(<GlassInput />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveStyle({ width: 'auto' });
    });

    it('should be full width when fullWidth is true', () => {
      const { container } = render(<GlassInput fullWidth />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveStyle({ width: '100%' });
    });
  });

  describe('Icon', () => {
    it('should render without icon by default', () => {
      const { container } = render(<GlassInput />);
      expect(container.querySelectorAll('svg')).toHaveLength(0);
    });

    it('should render with icon', () => {
      const icon = <svg data-testid="input-icon" />;
      render(<GlassInput icon={icon} />);
      expect(screen.getByTestId('input-icon')).toBeInTheDocument();
    });

    it('should adjust padding when icon is present', () => {
      const icon = <svg data-testid="input-icon" />;
      render(<GlassInput icon={icon} />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveStyle({ padding: '12px 16px 12px 44px' });
    });

    it('should have default padding without icon', () => {
      render(<GlassInput />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveStyle({ padding: '12px 16px' });
    });
  });

  describe('Error state', () => {
    it('should not display error message by default', () => {
      const { container } = render(<GlassInput />);
      const errorMessages = container.querySelectorAll('[style*="color"]');
      // Should only find the icon if present, not error message
      expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
    });

    it('should display error message when error prop is provided', () => {
      render(<GlassInput error="This field is required" />);
      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });

    it('should apply error border when error is present', () => {
      render(<GlassInput error="Error" />);
      const input = screen.getByRole('textbox');
      // Check that border contains the error color (in RGB format)
      expect(input.style.border).toContain('rgb(233, 69, 96)');
    });
  });

  describe('Input props', () => {
    it('should accept and apply standard input props', () => {
      render(
        <GlassInput
          placeholder="Enter text"
          type="text"
          name="testInput"
          id="test-input"
        />
      );
      const input = screen.getByRole('textbox') as HTMLInputElement;

      expect(input).toHaveAttribute('placeholder', 'Enter text');
      expect(input).toHaveAttribute('type', 'text');
      expect(input).toHaveAttribute('name', 'testInput');
      expect(input).toHaveAttribute('id', 'test-input');
    });

    it('should handle value and onChange', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<GlassInput value="" onChange={handleChange} />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'test');
      expect(handleChange).toHaveBeenCalled();
    });

    it('should be disabled when disabled prop is true', () => {
      render(<GlassInput disabled />);
      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
    });

    it('should support different input types', () => {
      const { container, rerender } = render(<GlassInput type="password" />);
      let input = container.querySelector('input') as HTMLInputElement;
      expect(input.type).toBe('password');

      rerender(<GlassInput type="email" />);
      input = container.querySelector('input') as HTMLInputElement;
      expect(input.type).toBe('email');

      rerender(<GlassInput type="number" />);
      input = container.querySelector('input') as HTMLInputElement;
      expect(input.type).toBe('number');
    });
  });

  describe('Complex scenarios', () => {
    it('should render with all props combined', () => {
      const icon = <svg data-testid="icon" />;
      render(
        <GlassInput
          variant="heavy"
          theme="pink"
          fullWidth
          icon={icon}
          error="Error message"
          placeholder="Enter text"
          className="custom"
          style={{ margin: '10px' }}
        />
      );

      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.getByText('Error message')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });
  });
});
