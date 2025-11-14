import React, { useState } from 'react';

// Demo of Retro Glass UI Library
export default function RetroGlassUIDemo() {
  const [activeTab, setActiveTab] = useState('buttons');

  // Utility functions (inline for demo)
  const getGlassStyle = (variant) => {
    const styles = {
      light: {
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(20px) saturate(120%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      },
      medium: {
        background: 'rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(30px) saturate(150%)',
        border: '2px solid rgba(255, 255, 255, 0.15)',
      },
      heavy: {
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(40px) saturate(180%)',
        border: '2px solid rgba(255, 255, 255, 0.2)',
      },
      neon: {
        background: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(25px) saturate(140%)',
        border: '2px solid rgba(255, 255, 255, 0.12)',
      },
    };
    return styles[variant] || styles.medium;
  };

  const COLORS = {
    pink: '#ff6ac1',      // Hot magenta/pink
    orange: '#ffb86c',    // Warm amber
    cyan: '#00d4ff',      // Electric cyan
    purple: '#bd93f9',    // Soft purple
    neon: '#39ff14',      // Neon green
    blue: '#5865f2',      // Discord blue
  };

  // GlassButton Component
  const GlassButton = ({ children, variant = 'medium', theme = 'cyan', size = 'md', onClick, style = {} }) => {
    const [isPressed, setIsPressed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const glassStyle = getGlassStyle(variant);
    const color = COLORS[theme] || COLORS.cyan;

    const sizes = {
      sm: { padding: '10px 20px', fontSize: '13px' },
      md: { padding: '14px 28px', fontSize: '16px' },
      lg: { padding: '18px 36px', fontSize: '20px' },
      xl: { padding: '24px 48px', fontSize: '28px' },
    };

    return (
      <button
        onClick={onClick}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsPressed(false); setIsHovered(false); }}
        style={{
          ...glassStyle,
          ...sizes[size],
          fontWeight: 900,
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          transform: isPressed ? 'translate(4px, 4px)' : isHovered ? 'translate(-2px, -2px)' : 'translate(0, 0)',
          color: '#FFFFFF',
          fontFamily: 'Impact, Arial Black, sans-serif',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          WebkitBackdropFilter: glassStyle.backdropFilter,
          border: `3px solid ${color}`,
          borderRadius: '3px',
          boxShadow: isPressed 
            ? `2px 2px 0px rgba(0,0,0,0.8), inset 0 0 30px ${color}40`
            : isHovered
            ? `8px 8px 0px rgba(0,0,0,0.9), 0 0 40px ${color}80, inset 0 0 25px ${color}30`
            : `6px 6px 0px rgba(0,0,0,0.8), 0 0 30px ${color}60, inset 0 0 20px ${color}20`,
          textShadow: `2px 2px 0px rgba(0,0,0,1), 0 0 15px ${color}`,
          position: 'relative',
          backgroundImage: `
            linear-gradient(135deg, transparent 0%, ${color}10 50%, transparent 100%),
            radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '200% 200%, 10px 10px',
          backgroundPosition: '0% 0%, 0 0',
          ...style,
        }}
      >
        {children}
      </button>
    );
  };

  // GlassCard Component
  const GlassCard = ({ children, title, subtitle, variant = 'medium', theme = 'gradient', neonBorder = false, style = {} }) => {
    const [isHovered, setIsHovered] = useState(false);
    const glassStyle = getGlassStyle(variant);
    const color = COLORS[theme] || '#00d4ff';

    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          ...glassStyle,
          padding: '28px',
          borderRadius: '4px',
          transition: 'all 0.2s ease',
          transform: isHovered ? 'translate(-3px, -3px)' : 'translate(0, 0)',
          WebkitBackdropFilter: glassStyle.backdropFilter,
          border: neonBorder ? `3px solid ${color}` : '3px solid rgba(255,255,255,0.25)',
          boxShadow: isHovered
            ? `7px 7px 0px rgba(0,0,0,0.9), 0 0 50px ${color}70, inset 0 0 40px ${color}25`
            : `5px 5px 0px rgba(0,0,0,0.8), 0 0 35px ${color}50, inset 0 0 30px ${color}15`,
          backgroundImage: `
            radial-gradient(circle at 90% 10%, ${color}15 0%, transparent 50%),
            radial-gradient(circle at 10% 90%, rgba(255,255,255,0.05) 0%, transparent 50%)
          `,
          position: 'relative',
          overflow: 'hidden',
          ...style,
        }}
      >
        {/* Decorative corner accent */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '80px',
          height: '80px',
          background: `linear-gradient(135deg, ${color}20 0%, transparent 70%)`,
          clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
        }} />
        
        {/* Subtle dot pattern */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '60px',
          height: '60px',
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '8px 8px',
          opacity: 0.5,
        }} />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          {title && (
            <h3 style={{
              fontSize: '24px',
              fontWeight: 900,
              marginBottom: '8px',
              background: theme === 'gradient' 
                ? 'linear-gradient(90deg, #ff6ac1, #00d4ff, #bd93f9, #ffb86c)'
                : color,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Impact, Arial Black, sans-serif',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.5))',
            }}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p style={{
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.75)',
              marginBottom: '16px',
              letterSpacing: '1px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}>
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    );
  };

  // GlassPanel Component
  const GlassPanel = ({ children, header, footer, variant = 'heavy', scanlines = false, style = {} }) => {
    const glassStyle = getGlassStyle(variant);

    return (
      <div style={{
        ...glassStyle,
        borderRadius: '4px',
        WebkitBackdropFilter: glassStyle.backdropFilter,
        border: '3px solid rgba(255,255,255,0.3)',
        boxShadow: '6px 6px 0px rgba(0,0,0,0.9), 0 0 40px rgba(0,217,255,0.3), inset 0 0 50px rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}>
        {/* Decorative grid overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,217,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.03) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          pointerEvents: 'none',
          opacity: 0.5,
        }} />
        
        {scanlines && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'repeating-linear-gradient(0deg, rgba(0, 217, 255, 0.03) 0px, transparent 1px, transparent 3px, rgba(0, 217, 255, 0.03) 4px)',
            pointerEvents: 'none',
            opacity: 0.6,
          }} />
        )}
        {header && (
          <div style={{
            padding: '24px',
            borderBottom: '3px solid rgba(0, 217, 255, 0.3)',
            fontSize: '22px',
            fontWeight: 900,
            fontFamily: 'Impact, Arial Black, sans-serif',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textShadow: '2px 2px 0px rgba(0,0,0,0.8), 0 0 15px rgba(0,217,255,0.6)',
            background: 'linear-gradient(90deg, #ff6ac1, #00d4ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            {header}
          </div>
        )}
        <div style={{ padding: '32px', position: 'relative', zIndex: 1 }}>
          {children}
        </div>
        {footer && (
          <div style={{
            padding: '20px 24px',
            borderTop: '3px solid rgba(0, 217, 255, 0.3)',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '13px',
            fontWeight: 'bold',
            letterSpacing: '0.5px',
          }}>
            {footer}
          </div>
        )}
      </div>
    );
  };

  // GlassBadge Component
  const GlassBadge = ({ children, theme = 'cyan', size = 'sm', pulse = false }) => {
    const color = COLORS[theme];
    const sizes = {
      sm: { padding: '5px 12px', fontSize: '11px' },
      md: { padding: '7px 16px', fontSize: '13px' },
      lg: { padding: '9px 20px', fontSize: '15px' },
    };

    return (
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sizes[size],
        borderRadius: '2px',
        fontWeight: 900,
        color: '#FFFFFF',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontFamily: 'Impact, Arial Black, sans-serif',
        background: `linear-gradient(135deg, ${color}35 0%, ${color}20 100%)`,
        border: `2px solid ${color}`,
        boxShadow: `2px 2px 0px rgba(0,0,0,0.8), 0 0 15px ${color}50, inset 0 0 15px ${color}15`,
        backdropFilter: 'blur(20px) saturate(120%)',
        WebkitBackdropFilter: 'blur(20px) saturate(120%)',
        animation: pulse ? 'badgePulse 2s ease-in-out infinite' : 'none',
        textShadow: '1px 1px 0px rgba(0,0,0,1)',
      }}>
        {children}
      </span>
    );
  };

  // GlassInput Component
  const GlassInput = ({ placeholder, theme = 'cyan', style = {} }) => {
    const color = COLORS[theme];
    const glassStyle = getGlassStyle('medium');

    return (
      <input
        placeholder={placeholder}
        style={{
          ...glassStyle,
          width: '100%',
          padding: '12px 16px',
          borderRadius: '3px',
          fontSize: '15px',
          fontWeight: '600',
          color: '#FFFFFF',
          outline: 'none',
          transition: 'all 0.2s ease',
          border: `2px solid ${color}80`,
          WebkitBackdropFilter: glassStyle.backdropFilter,
          fontFamily: 'Arial, sans-serif',
          boxShadow: `inset 2px 2px 4px rgba(0,0,0,0.3), 0 0 20px ${color}30`,
          backgroundImage: `linear-gradient(135deg, ${color}05 0%, transparent 100%)`,
          ...style,
        }}
      />
    );
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1340 25%, #2d1b69 50%, #1a0b3d 75%, #0a0e27 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Static retro grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,212,255,.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        opacity: 0.6,
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <GlassPanel
            variant="heavy"
            scanlines
            header={
              <div>
                <h1 style={{
                  fontSize: '56px',
                  margin: 0,
                  fontFamily: 'Impact, Arial Black',
                  letterSpacing: '3px',
                  background: 'linear-gradient(135deg, #ff6ac1 0%, #00d4ff 50%, #bd93f9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,0.8)) drop-shadow(0 0 20px rgba(0,212,255,0.5))',
                  textTransform: 'uppercase',
                }}>
                  RETRO GLASS UI
                </h1>
                <div style={{ marginTop: '16px' }}>
                  <GlassBadge theme="cyan" pulse>v1.0.0</GlassBadge>
                </div>
              </div>
            }
          >
            <p style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '32px',
              fontWeight: '600',
              letterSpacing: '1.5px',
              textShadow: '1px 1px 0px rgba(0,0,0,0.6)',
            }}>
              Where retro-futuristic design meets liquid glass aesthetics
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <GlassButton theme="cyan" size="lg">
                Get Started
              </GlassButton>
              <GlassButton theme="purple" size="lg" variant="neon">
                View Docs
              </GlassButton>
            </div>
          </GlassPanel>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['buttons', 'cards', 'forms', 'badges'].map(tab => (
            <GlassButton
              key={tab}
              theme={activeTab === tab ? 'cyan' : 'purple'}
              variant={activeTab === tab ? 'medium' : 'light'}
              size="sm"
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </GlassButton>
          ))}
        </div>

        {/* Buttons Tab */}
        {activeTab === 'buttons' && (
          <GlassCard
            title="Interactive Buttons"
            subtitle="Various button styles and configurations"
            variant="medium"
            theme="gradient"
            neonBorder
          >
            <div style={{ marginBottom: '24px' }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>Button Sizes:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <GlassButton theme="pink" size="sm">Small</GlassButton>
                <GlassButton theme="orange" size="md">Medium</GlassButton>
                <GlassButton theme="cyan" size="lg">Large</GlassButton>
                <GlassButton theme="purple" size="xl">Extra Large</GlassButton>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>Glass Variants:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <GlassButton variant="light" theme="pink">Light Glass</GlassButton>
                <GlassButton variant="medium" theme="orange">Medium Glass</GlassButton>
                <GlassButton variant="heavy" theme="cyan">Heavy Glass</GlassButton>
                <GlassButton variant="neon" theme="purple">Neon Glass</GlassButton>
              </div>
            </div>

            <div>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>Action Buttons:</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
                <GlassButton theme="pink" variant="neon">💥 BLAST!</GlassButton>
                <GlassButton theme="orange" variant="neon">🚀 ZOOM!</GlassButton>
                <GlassButton theme="cyan" variant="neon">⚡ CRASH!</GlassButton>
                <GlassButton theme="purple" variant="neon">💫 BANG!</GlassButton>
              </div>
            </div>
          </GlassCard>
        )}

        {/* Cards Tab */}
        {activeTab === 'cards' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            <GlassCard
              title="Performance"
              subtitle="Lightning fast"
              theme="cyan"
              neonBorder
            >
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>
                Built with performance in mind. Tree-shakeable and optimized for production.
              </p>
              <GlassBadge theme="cyan" size="sm">Fast</GlassBadge>
            </GlassCard>

            <GlassCard
              title="TypeScript"
              subtitle="Type-safe by default"
              theme="purple"
              neonBorder
            >
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>
                Full TypeScript support with comprehensive type definitions.
              </p>
              <GlassBadge theme="purple" size="sm">Safe</GlassBadge>
            </GlassCard>

            <GlassCard
              title="Customizable"
              subtitle="Style it your way"
              theme="pink"
              neonBorder
            >
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>
                Multiple variants, themes, and customization options available.
              </p>
              <GlassBadge theme="pink" size="sm">Flexible</GlassBadge>
            </GlassCard>
          </div>
        )}

        {/* Forms Tab */}
        {activeTab === 'forms' && (
          <GlassPanel
            variant="medium"
            header={<h2 style={{ margin: 0, fontSize: '24px' }}>Contact Form</h2>}
            footer={<p style={{ margin: 0, fontSize: '14px' }}>All fields are required</p>}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <GlassInput placeholder="Your Name" theme="cyan" />
              <GlassInput placeholder="Email Address" theme="purple" />
              <GlassInput placeholder="Subject" theme="pink" />
              <GlassButton theme="cyan" size="lg" style={{ width: '100%' }}>
                Send Message
              </GlassButton>
            </div>
          </GlassPanel>
        )}

        {/* Badges Tab */}
        {activeTab === 'badges' && (
          <GlassCard
            title="Badges & Labels"
            variant="heavy"
            theme="gradient"
          >
            <div style={{ marginBottom: '24px' }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>Badge Sizes:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                <GlassBadge theme="pink" size="sm">Small</GlassBadge>
                <GlassBadge theme="orange" size="md">Medium</GlassBadge>
                <GlassBadge theme="cyan" size="lg">Large</GlassBadge>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>Badge Themes:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <GlassBadge theme="pink">New</GlassBadge>
                <GlassBadge theme="orange">Featured</GlassBadge>
                <GlassBadge theme="cyan">Premium</GlassBadge>
                <GlassBadge theme="purple" pulse>Live</GlassBadge>
              </div>
            </div>

            <div>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>Status Badges:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <GlassBadge theme="pink" size="md">🔥 Hot</GlassBadge>
                <GlassBadge theme="orange" size="md">⭐ Popular</GlassBadge>
                <GlassBadge theme="cyan" size="md">✨ New</GlassBadge>
                <GlassBadge theme="purple" size="md" pulse>🎯 Trending</GlassBadge>
              </div>
            </div>
          </GlassCard>
        )}

        {/* Footer */}
        <div style={{ marginTop: '60px' }}>
          <GlassPanel variant="light" style={{ textAlign: 'center', padding: '32px' }}>
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '14px',
              marginBottom: '16px',
            }}>
              Built with ❤️ for the retro-futuristic web
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <GlassBadge theme="cyan">React</GlassBadge>
              <GlassBadge theme="purple">TypeScript</GlassBadge>
              <GlassBadge theme="pink">Glassmorphism</GlassBadge>
            </div>
          </GlassPanel>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes badgePulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.05); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
