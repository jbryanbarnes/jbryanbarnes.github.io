# Portfolio Website

A Jekyll-powered portfolio website with Tailwind CSS, hosted on GitHub Pages using GitHub Actions for automated deployment.

## 🚀 Quick Start

### Prerequisites
- Ruby (3.1 or higher)
- Node.js (18 or higher)
- Bundler gem

### Local Development Setup

1. **Install dependencies:**
   ```bash
   # Install Ruby gems (if using local development)
   bundle install
   
   # Install Node.js packages
   npm install
   ```

2. **Build CSS and start development server:**
   ```bash
   npm run dev
   ```

3. **Visit your site:**
   - Local: http://localhost:4000

## 🛠 Development Commands

```bash
# Build CSS only
npm run build:css

# Watch CSS for changes
npm run watch:css

# Start Jekyll with live reload
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
├── .github/workflows/    # GitHub Actions deployment
│   └── pages.yml        # Build and deploy workflow
├── _config.yml          # Jekyll configuration
├── _data/               # YAML data files
│   ├── experiences.yml  # Work experience
│   └── education.yml    # Education & certifications
├── _layouts/            # Page templates
│   └── default.html     # Main layout
├── _projects/           # Project markdown files
├── assets/
│   ├── css/
│   │   └── style.css    # Generated Tailwind CSS
│   └── images/          # Site images
├── src/
│   └── css/
│       └── tailwind.css # Tailwind source
├── index.html           # Homepage
├── package.json         # Node.js dependencies
└── tailwind.config.js   # Tailwind configuration
```

## 🎨 Customization

### Colors
Edit seasonal color schemes in `tailwind.config.js`:
- `secondary_spring_summer`: Spring/Summer accent
- `secondary_summer_fall`: Summer/Fall accent  
- `secondary_fall_winter`: Fall/Winter accent

### Content
- **Experience**: Edit `_data/experiences.yml`
- **Education**: Edit `_data/education.yml`
- **Projects**: Add markdown files to `_projects/`

### Layout
The site uses a seasonal gradient system that automatically changes based on the current month.

## 🌐 Deployment

### Automated Deployment (GitHub Actions)
The site automatically deploys to GitHub Pages when you push to the main branch using GitHub Actions:

1. **Workflow**: `.github/workflows/pages.yml`
2. **Triggers**: Push to main branch or pull requests
3. **Process**: 
   - Sets up Node.js 18 and Ruby 3.1
   - Installs dependencies
   - Builds Tailwind CSS
   - Builds Jekyll site
   - Deploys to GitHub Pages

### Manual Deployment
For local testing before pushing:
```bash
# Build locally
npm run build

# Commit and push changes
git add .
git commit -m "Update site"
git push origin main
```

## 🚨 Troubleshooting

### CSS not loading?
1. Check if Tailwind config has syntax errors
2. Rebuild CSS: `npm run build:css`
3. Clear browser cache (especially in incognito)

### Local development not working?
1. Ensure Ruby/Node.js are installed
2. Run `bundle install && npm install`
3. Try `bundle exec jekyll serve` directly

### GitHub Actions deployment failing?
1. Check workflow logs in GitHub Actions tab
2. Verify Node.js and Ruby versions in workflow
3. Ensure all dependencies are properly configured

## 📝 Notes

- **No Gemfile**: Using GitHub Actions for dependency management
- **Automated Build**: CSS and site build handled by GitHub Actions
- **Local Development**: Still supports local development with `npm run dev`
- **Clean Repository**: Only essential files committed