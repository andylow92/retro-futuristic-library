# 🌟 Retro Glass UI

A TypeScript component library featuring retro-futuristic styling with liquid glass glassmorphism effects. Perfect for creating stunning, modern interfaces with a nostalgic cyberpunk aesthetic.

## ✨ Features

- 🎨 **Retro-Futuristic Design** - Combines 80s aesthetic with modern glassmorphism
- 💎 **Liquid Glass Effects** - Beautiful frosted glass UI components
- 🎯 **TypeScript Support** - Full type safety out of the box
- 🔧 **Highly Customizable** - Multiple variants, themes, and options
- 📦 **Tree Shakeable** - Import only what you need
- 🎭 **Static Backgrounds** - No distracting animations, just pure style

## 📦 Installation

```bash
npm install retro-glass-ui
# or
yarn add retro-glass-ui
# or
pnpm add retro-glass-ui
```

## 🚀 Quick Start

```tsx
import { GlassButton, GlassCard, GlassContainer } from 'retro-glass-ui';

function App() {
  return (
    <GlassContainer background="gradient">
      <GlassCard 
        title="Welcome" 
        variant="medium" 
        theme="pink"
        neonBorder
      >
        <p>Your retro-futuristic content here</p>
        <GlassButton theme="cyan" size="md">
          Click Me!
        </GlassButton>
      </GlassCard>
    </GlassContainer>
  );
}
```

## 🎨 Components

### GlassContainer

The main wrapper component that provides the retro-futuristic background.

```tsx
<GlassContainer 
  background="gradient"  // 'dark' | 'gradient' | 'deep'
  maxWidth="lg"          // 'sm' | 'md' | 'lg' | 'xl' | 'full'
  centered={true}
>
  {/* Your content */}
</GlassContainer>
```

**Props:**
- `background`: Background style ('dark', 'gradient', 'deep')
- `maxWidth`: Maximum width constraint
- `centered`: Center content horizontally
- Standard React props (className, style, children)

---

### GlassButton

Interactive button with glassmorphism and hover effects.

```tsx
<GlassButton
  variant="medium"       // 'light' | 'medium' | 'heavy' | 'neon'
  theme="pink"           // 'pink' | 'orange' | 'cyan' | 'purple' | 'gradient'
  size="md"              // 'sm' | 'md' | 'lg' | 'xl'
  glowEffect={true}
  dots={false}
  fullWidth={false}
  icon={<Icon />}
  onClick={() => {}}
>
  Click Me!
</GlassButton>
```

**Props:**
- `variant`: Glass effect intensity
- `theme`: Color theme
- `size`: Button size
- `glowEffect`: Enable glow effect
- `dots`: Show dot pattern overlay
- `fullWidth`: Stretch to full width
- `icon`: Optional icon element
- `disabled`: Disable interaction
- `onClick`: Click handler

---

### GlassCard

Card component with optional title, subtitle, and effects.

```tsx
<GlassCard
  variant="medium"
  theme="gradient"
  title="Card Title"
  subtitle="Card subtitle"
  neonBorder={true}
  hover={true}
  scanlines={false}
  dots={false}
>
  Card content goes here
</GlassCard>
```

**Props:**
- `variant`: Glass effect intensity
- `theme`: Color theme
- `title`: Optional card title
- `subtitle`: Optional card subtitle
- `neonBorder`: Enable neon border effect
- `hover`: Enable hover animation
- `scanlines`: Show scanline overlay
- `dots`: Show dot pattern overlay
- `glowEffect`: Enable glow effect

---

### GlassPanel

Panel component with header and footer sections.

```tsx
<GlassPanel
  variant="heavy"
  header={<h2>Panel Header</h2>}
  footer={<p>Panel footer content</p>}
  scanlines={true}
  bordered={true}
>
  Panel content
</GlassPanel>
```

**Props:**
- `variant`: Glass effect intensity
- `header`: Optional header content
- `footer`: Optional footer content
- `scanlines`: Show scanline overlay
- `bordered`: Show border

---

### GlassBadge

Small badge component for labels and tags.

```tsx
<GlassBadge
  variant="light"
  theme="purple"
  size="sm"
  pulse={true}
>
  NEW
</GlassBadge>
```

**Props:**
- `variant`: Glass effect intensity
- `theme`: Color theme
- `size`: Badge size ('sm', 'md', 'lg')
- `pulse`: Enable pulsing animation

---

### GlassInput

Input field with glassmorphism styling.

```tsx
<GlassInput
  variant="medium"
  theme="cyan"
  placeholder="Enter text..."
  fullWidth={true}
  icon={<SearchIcon />}
  error="Error message"
/>
```

**Props:**
- `variant`: Glass effect intensity
- `theme`: Color theme
- `fullWidth`: Stretch to full width
- `icon`: Optional icon element
- `error`: Error message to display
- All standard input HTML attributes

---

## 🎨 Theming

### Color Themes

- **pink**: `#e94560` - Hot pink/red
- **orange**: `#ffb86c` - Warm orange
- **cyan**: `#82ccdd` - Cool cyan/blue
- **purple**: `#a29bfe` - Soft purple
- **gradient**: Multi-color gradient blend

### Glass Variants

- **light**: Subtle glass effect
- **medium**: Balanced glass effect (default)
- **heavy**: Strong glass effect
- **neon**: Dark glass with neon accents

## 🎭 Effects

### Scanlines
Add retro CRT scanline effect:
```tsx
<GlassCard scanlines={true}>
  Content
</GlassCard>
```

### Dot Pattern
Add halftone dot pattern:
```tsx
<GlassButton dots={true}>
  Button
</GlassButton>
```

### Neon Border
Add glowing neon border:
```tsx
<GlassCard neonBorder={true} theme="cyan">
  Content
</GlassCard>
```

### Glow Effect
Add subtle glow around elements:
```tsx
<GlassButton glowEffect={true}>
  Button
</GlassButton>
```

## 🛠️ Utilities

The library exports utility functions for custom styling:

```tsx
import { 
  getGlassStyle,
  getThemeColor,
  generateGlowStyle,
  generateNeonBorderStyle,
  getSizeStyles,
  COLORS,
  GLASS_STYLES 
} from 'retro-glass-ui';

// Use in custom components
const customStyle = {
  ...getGlassStyle('medium'),
  ...generateGlowStyle('#e94560', 1.5),
};
```

## 📖 Examples

### Hero Section
```tsx
<GlassContainer background="gradient">
  <div style={{ textAlign: 'center', padding: '60px 20px' }}>
    <GlassPanel 
      variant="heavy"
      header={
        <h1 style={{ fontSize: '48px', margin: 0 }}>
          RETRO FUTURE
        </h1>
      }
    >
      <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.8)' }}>
        Where pixels meet panels
      </p>
      <GlassButton theme="gradient" size="lg">
        Get Started
      </GlassButton>
    </GlassPanel>
  </div>
</GlassContainer>
```

### Feature Grid
```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
  <GlassCard 
    title="Fast" 
    theme="pink"
    neonBorder
    hover
  >
    Lightning-fast performance
  </GlassCard>
  <GlassCard 
    title="Secure" 
    theme="cyan"
    neonBorder
    hover
  >
    Enterprise-grade security
  </GlassCard>
  <GlassCard 
    title="Modern" 
    theme="purple"
    neonBorder
    hover
  >
    Cutting-edge technology
  </GlassCard>
</div>
```

### Form
```tsx
<GlassCard variant="medium" theme="gradient">
  <form>
    <GlassInput
      placeholder="Username"
      fullWidth
      theme="cyan"
      style={{ marginBottom: '16px' }}
    />
    <GlassInput
      type="password"
      placeholder="Password"
      fullWidth
      theme="cyan"
      style={{ marginBottom: '16px' }}
    />
    <GlassButton fullWidth theme="pink" size="lg">
      Login
    </GlassButton>
  </form>
</GlassCard>
```

## 🎯 Best Practices

1. **Use GlassContainer** as the root wrapper for consistent theming
2. **Mix variants** for visual hierarchy (heavy for headers, light for content)
3. **Limit effects** - Don't use scanlines and dots together, choose one
4. **Color coordination** - Stick to 2-3 theme colors per page
5. **Size appropriately** - Use larger sizes for primary actions

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Note**: Glassmorphism requires `backdrop-filter` support.

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Built with ❤️ for the retro-futuristic web
