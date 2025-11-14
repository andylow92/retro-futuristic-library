import React from 'react';
import {
  GlassContainer,
  GlassButton,
  GlassCard,
  GlassPanel,
  GlassBadge,
  GlassInput,
} from 'retro-glass-ui';

/**
 * Example usage of Retro Glass UI components
 * This demonstrates various components and their configurations
 */
export default function RetroGlassDemo() {
  return (
    <GlassContainer background="gradient" maxWidth="xl" centered>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <GlassPanel
          variant="heavy"
          scanlines
          header={
            <div>
              <h1 style={{ 
                fontSize: '64px', 
                margin: 0,
                fontFamily: 'Arial Black',
                letterSpacing: '2px',
                background: 'linear-gradient(90deg, #e94560, #ffb86c, #82ccdd, #a29bfe)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                RETRO GLASS UI
              </h1>
              <GlassBadge theme="pink" pulse>
                v1.0.0
              </GlassBadge>
            </div>
          }
        >
          <p style={{ 
            fontSize: '24px', 
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '32px',
          }}>
            Where retro-futuristic design meets liquid glass aesthetics
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <GlassButton theme="pink" size="lg" glowEffect>
              Get Started
            </GlassButton>
            <GlassButton theme="cyan" size="lg" variant="neon">
              View Docs
            </GlassButton>
          </div>
        </GlassPanel>
      </div>

      {/* Button Showcase */}
      <GlassCard 
        title="Interactive Buttons" 
        subtitle="Various button styles and configurations"
        variant="medium"
        theme="gradient"
        neonBorder
        style={{ marginBottom: '40px' }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
          <GlassButton theme="pink" size="sm">
            Small Button
          </GlassButton>
          <GlassButton theme="orange" size="md">
            Medium Button
          </GlassButton>
          <GlassButton theme="cyan" size="lg">
            Large Button
          </GlassButton>
          <GlassButton theme="purple" size="xl">
            XL Button
          </GlassButton>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <GlassButton variant="light" theme="pink">
            Light Glass
          </GlassButton>
          <GlassButton variant="medium" theme="orange">
            Medium Glass
          </GlassButton>
          <GlassButton variant="heavy" theme="cyan">
            Heavy Glass
          </GlassButton>
          <GlassButton variant="neon" theme="purple">
            Neon Glass
          </GlassButton>
        </div>
      </GlassCard>

      {/* Cards Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '24px',
        marginBottom: '40px',
      }}>
        <GlassCard
          title="Performance"
          subtitle="Lightning fast"
          theme="pink"
          neonBorder
          hover
          dots
        >
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>
            Built with performance in mind. Tree-shakeable and optimized for production.
          </p>
          <GlassBadge theme="pink" size="sm">Fast</GlassBadge>
        </GlassCard>

        <GlassCard
          title="TypeScript"
          subtitle="Type-safe by default"
          theme="cyan"
          neonBorder
          hover
          scanlines
        >
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>
            Full TypeScript support with comprehensive type definitions.
          </p>
          <GlassBadge theme="cyan" size="sm">Safe</GlassBadge>
        </GlassCard>

        <GlassCard
          title="Customizable"
          subtitle="Style it your way"
          theme="purple"
          neonBorder
          hover
        >
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>
            Multiple variants, themes, and customization options available.
          </p>
          <GlassBadge theme="purple" size="sm">Flexible</GlassBadge>
        </GlassCard>
      </div>

      {/* Form Example */}
      <GlassPanel
        variant="medium"
        header={<h2 style={{ margin: 0, fontSize: '24px' }}>Contact Form</h2>}
        footer={
          <p style={{ margin: 0, fontSize: '14px' }}>
            All fields are required
          </p>
        }
        style={{ marginBottom: '40px' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <GlassInput
            placeholder="Your Name"
            theme="pink"
            fullWidth
          />
          <GlassInput
            type="email"
            placeholder="Email Address"
            theme="cyan"
            fullWidth
          />
          <GlassInput
            placeholder="Subject"
            theme="purple"
            fullWidth
          />
          <GlassButton theme="gradient" size="lg" fullWidth>
            Send Message
          </GlassButton>
        </div>
      </GlassPanel>

      {/* Badge Showcase */}
      <GlassCard 
        title="Badges & Labels"
        variant="heavy"
        theme="gradient"
        style={{ marginBottom: '40px' }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
          <GlassBadge theme="pink" size="sm">New</GlassBadge>
          <GlassBadge theme="orange" size="md">Featured</GlassBadge>
          <GlassBadge theme="cyan" size="lg">Premium</GlassBadge>
          <GlassBadge theme="purple" pulse>Live</GlassBadge>
          <GlassBadge theme="gradient" size="md">Popular</GlassBadge>
        </div>
      </GlassCard>

      {/* Action Buttons Row */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        marginBottom: '40px',
      }}>
        {[
          { text: 'BLAST!', theme: 'pink' as const },
          { text: 'ZOOM!', theme: 'orange' as const },
          { text: 'CRASH!', theme: 'cyan' as const },
          { text: 'BANG!', theme: 'purple' as const },
        ].map((btn) => (
          <GlassButton
            key={btn.text}
            theme={btn.theme}
            variant="neon"
            glowEffect
            dots
            fullWidth
          >
            {btn.text}
          </GlassButton>
        ))}
      </div>

      {/* Footer Panel */}
      <GlassPanel variant="light" bordered={false}>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p style={{ 
            color: 'rgba(255,255,255,0.6)',
            fontSize: '14px',
            margin: 0,
          }}>
            Built with ❤️ for the retro-futuristic web
          </p>
          <div style={{ marginTop: '16px', display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <GlassBadge variant="light" theme="cyan">React</GlassBadge>
            <GlassBadge variant="light" theme="purple">TypeScript</GlassBadge>
            <GlassBadge variant="light" theme="pink">Glassmorphism</GlassBadge>
          </div>
        </div>
      </GlassPanel>
    </GlassContainer>
  );
}
