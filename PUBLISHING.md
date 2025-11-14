# 🚀 Publishing Retro Glass UI to GitHub & NPM

This guide will walk you through publishing your library to GitHub and optionally to NPM.

## 📋 Prerequisites

- Git installed on your computer
- GitHub account
- Node.js and npm installed
- (Optional) NPM account for publishing to NPM registry

## 📦 Step 1: Prepare Your Library

Your library is already set up with:
- ✅ Source code in TypeScript
- ✅ Build configuration (tsconfig.json)
- ✅ Package.json with metadata
- ✅ README with documentation
- ✅ LICENSE file (MIT)
- ✅ .gitignore file

### Build the Library

Before publishing, build your library:

```bash
cd retro-glass-ui
npm install
npm run build
```

This will create a `dist/` folder with compiled JavaScript and TypeScript declarations.

## 🐙 Step 2: Publish to GitHub

### Initialize Git Repository

```bash
cd retro-glass-ui
git init
git add .
git commit -m "Initial commit: Retro Glass UI v1.0.0"
```

### Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the "+" icon → "New repository"
3. Name it: `retro-glass-ui`
4. Choose "Public" (for open source)
5. **Don't** initialize with README (we already have one)
6. Click "Create repository"

### Push to GitHub

Replace `yourusername` with your actual GitHub username:

```bash
git remote add origin https://github.com/yourusername/retro-glass-ui.git
git branch -M main
git push -u origin main
```

### Update Package.json

Before publishing, update these fields in `package.json`:

```json
{
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/retro-glass-ui.git"
  },
  "bugs": {
    "url": "https://github.com/yourusername/retro-glass-ui/issues"
  },
  "homepage": "https://github.com/yourusername/retro-glass-ui#readme"
}
```

### Create a Release (Optional but Recommended)

1. Go to your GitHub repo
2. Click "Releases" → "Create a new release"
3. Tag: `v1.0.0`
4. Title: `Retro Glass UI v1.0.0`
5. Description: Copy from CHANGELOG.md
6. Click "Publish release"

## 📦 Step 3: Publish to NPM (Optional)

### Create NPM Account

If you don't have one:
1. Go to [npmjs.com](https://www.npmjs.com/)
2. Sign up for a free account

### Login to NPM

```bash
npm login
```

Enter your username, password, and email.

### Check Package Name Availability

```bash
npm search retro-glass-ui
```

If the name is taken, update the name in `package.json`:

```json
{
  "name": "@yourusername/retro-glass-ui"
}
```

### Publish to NPM

```bash
npm publish
```

Or if using scoped package:

```bash
npm publish --access public
```

🎉 **Your library is now published!**

## 📥 How Users Will Install It

### From NPM:
```bash
npm install retro-glass-ui
# or
npm install @yourusername/retro-glass-ui
```

### From GitHub (if not on NPM):
```bash
npm install github:yourusername/retro-glass-ui
```

## 🔄 Updating Your Library

When you make changes:

1. Update the version in `package.json`:
   ```json
   {
     "version": "1.1.0"
   }
   ```

2. Update CHANGELOG.md with changes

3. Build, commit, and push:
   ```bash
   npm run build
   git add .
   git commit -m "Release v1.1.0: Added new features"
   git tag v1.1.0
   git push && git push --tags
   ```

4. Publish to NPM:
   ```bash
   npm publish
   ```

## 📖 Documentation Tips

Consider adding:
- **GitHub Pages** - Host a demo site
- **Storybook** - Interactive component documentation
- **CodeSandbox examples** - Live demos
- **Badges** - Add NPM version, downloads, license badges to README

### Example Badges for README:

```markdown
[![npm version](https://badge.fury.io/js/retro-glass-ui.svg)](https://www.npmjs.com/package/retro-glass-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/retro-glass-ui.svg)](https://www.npmjs.com/package/retro-glass-ui)
```

## 🛠️ Recommended Next Steps

1. **Add tests** - Use Jest or Vitest for component testing
2. **Setup CI/CD** - Use GitHub Actions for automated builds
3. **Create a demo site** - Deploy to Vercel, Netlify, or GitHub Pages
4. **Add more components** - Expand your library based on user feedback
5. **Write blog posts** - Share your library on dev.to, Medium, etc.

## 📞 Getting Help

- GitHub Issues: Report bugs or request features
- Discussions: Start conversations with users
- Pull Requests: Accept contributions from the community

## ⚠️ Important Notes

- **Never commit** `node_modules/` or `dist/` to git (already in .gitignore)
- **Always test** before publishing
- **Use semantic versioning** (MAJOR.MINOR.PATCH)
- **Keep CHANGELOG.md updated**
- **Respond to issues** and pull requests promptly

---

**Good luck with your library! 🚀✨**
