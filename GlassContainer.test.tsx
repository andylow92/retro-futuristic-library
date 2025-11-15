import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GlassContainer } from './GlassContainer';

describe('GlassContainer', () => {
  it('should render with children', () => {
    render(<GlassContainer>Container Content</GlassContainer>);
    expect(screen.getByText('Container Content')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(<GlassContainer className="custom-class">Content</GlassContainer>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should apply custom styles', () => {
    const { container } = render(
      <GlassContainer style={{ padding: '50px' }}>Content</GlassContainer>
    );
    expect(container.firstChild).toHaveStyle({ padding: '50px' });
  });

  describe('Max width', () => {
    it('should have lg max width by default', () => {
      const { container } = render(<GlassContainer>Content</GlassContainer>);
      const wrapper = container.firstChild as HTMLElement;
      const contentDiv = wrapper.children[1] as HTMLElement;
      expect(contentDiv).toHaveStyle({ maxWidth: '1024px' });
    });

    it('should have sm max width when specified', () => {
      const { container } = render(<GlassContainer maxWidth="sm">Content</GlassContainer>);
      const wrapper = container.firstChild as HTMLElement;
      const contentDiv = wrapper.children[1] as HTMLElement;
      expect(contentDiv).toHaveStyle({ maxWidth: '640px' });
    });

    it('should have md max width when specified', () => {
      const { container } = render(<GlassContainer maxWidth="md">Content</GlassContainer>);
      const wrapper = container.firstChild as HTMLElement;
      const contentDiv = wrapper.children[1] as HTMLElement;
      expect(contentDiv).toHaveStyle({ maxWidth: '768px' });
    });

    it('should have xl max width when specified', () => {
      const { container } = render(<GlassContainer maxWidth="xl">Content</GlassContainer>);
      const wrapper = container.firstChild as HTMLElement;
      const contentDiv = wrapper.children[1] as HTMLElement;
      expect(contentDiv).toHaveStyle({ maxWidth: '1280px' });
    });

    it('should have full max width when specified', () => {
      const { container } = render(<GlassContainer maxWidth="full">Content</GlassContainer>);
      const wrapper = container.firstChild as HTMLElement;
      const contentDiv = wrapper.children[1] as HTMLElement;
      expect(contentDiv).toHaveStyle({ maxWidth: '100%' });
    });
  });

  describe('Centered prop', () => {
    it('should be centered by default', () => {
      const { container } = render(<GlassContainer>Content</GlassContainer>);
      const wrapper = container.firstChild as HTMLElement;
      const contentDiv = wrapper.children[1] as HTMLElement;
      expect(contentDiv).toHaveStyle({ margin: '0 auto' });
    });

    it('should not be centered when centered is false', () => {
      const { container } = render(<GlassContainer centered={false}>Content</GlassContainer>);
      const wrapper = container.firstChild as HTMLElement;
      const contentDiv = wrapper.children[1] as HTMLElement;
      expect(contentDiv).toHaveStyle({ margin: '0' });
    });
  });

  describe('Background', () => {
    it('should have gradient background by default', () => {
      const { container } = render(<GlassContainer>Content</GlassContainer>);
      const wrapper = container.firstChild as HTMLElement;
      const style = window.getComputedStyle(wrapper);
      expect(style.background).toContain('linear-gradient');
    });

    it('should have dark background when specified', () => {
      const { container } = render(<GlassContainer background="dark">Content</GlassContainer>);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveStyle({
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      });
    });

    it('should have deep background when specified', () => {
      const { container } = render(<GlassContainer background="deep">Content</GlassContainer>);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveStyle({
        background: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #16213e 100%)',
      });
    });
  });

  describe('Grid pattern', () => {
    it('should render grid pattern', () => {
      const { container } = render(<GlassContainer>Content</GlassContainer>);
      const wrapper = container.firstChild as HTMLElement;
      // Grid is the first child div
      const gridDiv = wrapper.children[0] as HTMLElement;
      const style = window.getComputedStyle(gridDiv);
      expect(style.position).toBe('absolute');
    });
  });

  describe('Min height', () => {
    it('should have min height of 100vh', () => {
      const { container } = render(<GlassContainer>Content</GlassContainer>);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveStyle({ minHeight: '100vh' });
    });
  });

  describe('Structure', () => {
    it('should have correct DOM structure', () => {
      const { container } = render(<GlassContainer>Content</GlassContainer>);
      const wrapper = container.firstChild as HTMLElement;

      // Should have 2 children: grid and content
      expect(wrapper.children.length).toBe(2);

      // First child is grid
      const grid = wrapper.children[0] as HTMLElement;
      expect(grid).toHaveStyle({ position: 'absolute' });

      // Second child is content wrapper
      const content = wrapper.children[1] as HTMLElement;
      expect(content).toHaveTextContent('Content');
    });
  });

  describe('Complex scenarios', () => {
    it('should render with all props combined', () => {
      const { container } = render(
        <GlassContainer
          maxWidth="xl"
          centered
          background="deep"
          className="custom"
          style={{ padding: '0' }}
        >
          Complex Content
        </GlassContainer>
      );

      const wrapper = container.firstChild as HTMLElement;
      expect(screen.getByText('Complex Content')).toBeInTheDocument();
      expect(wrapper).toHaveClass('custom');
      expect(wrapper).toHaveStyle({ padding: '0' });

      const contentDiv = wrapper.children[1] as HTMLElement;
      expect(contentDiv).toHaveStyle({
        maxWidth: '1280px',
        margin: '0 auto',
      });
    });
  });
});
