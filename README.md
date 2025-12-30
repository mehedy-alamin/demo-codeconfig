# Demo CodeConfig

A modern WordPress theme with a sophisticated build system and seasonal styling capabilities. This theme features a Google Drive-inspired design with comprehensive SCSS architecture and automated build workflows.

## 🚀 Features

- **Modern Build System**: Gulp-powered workflow with SCSS compilation, autoprefixing, and minification
- **Seasonal Themes**: Built-in styling for Halloween, Christmas/New Year, Black Friday/Cyber Monday, and Summer occasions
- **Google Drive Integration**: Specialized product pages and components for Google Drive-related content
- **Responsive Design**: Mobile-first approach with flexible grid system
- **Clean Architecture**: Well-organized SCSS structure with modular components

## 📁 Project Structure

```
📦 demo-codeconfig/
├── 📄 gulpfile.js          # Build configuration
├── 📄 package.json         # Dependencies and scripts
├── 📂 assets/              # Static assets
│   ├── 📂 css/            # Compiled CSS files
│   ├── 📂 scss/           # SCSS source files
│   │   ├── 📂 globals/    # Global styles (header, footer, variables, etc.)
│   │   ├── 📂 occasions/  # Seasonal styling
│   │   └── 📂 products-style/ # Product-specific styles
│   ├── 📂 js/             # JavaScript files
│   ├── 📂 fonts/          # Font files
│   └── 📂 images/         # Image assets
├── 📂 Html/               # HTML templates and workspace files
└── 📂 src/                # Source files
```

## 🛠️ Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- WordPress installation (for theme usage)

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/jakirmithunbd/demo-codeconfig.git
   cd demo-codeconfig
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development**
   ```bash
   npm run dev
   # or
   gulp
   ```

4. **Build for production**
   ```bash
   npm run production
   ```

## 📦 NPM Scripts

| Script | Description |
|--------|-------------|
| `npm run production` | Clean and build minified assets for production |
| `npm run clean-maps` | Remove all source maps and .DS_Store files |

## 🔧 Gulp Tasks

| Task | Description |
|------|-------------|
| `gulp` | Default task - compile SCSS and watch for changes |
| `gulp build` | Compile and minify SCSS for production |

## 🎨 SCSS Architecture

### Global Styles
- **`_variables.scss`**: Color palette, fonts, and global variables
- **`_typography.scss`**: Font definitions and text styling
- **`_mixins.scss`**: Reusable SCSS mixins
- **`_header.scss`**: Header component styles
- **`_footer.scss`**: Footer component styles

### Color Palette
```scss
$primary: #0061fe      // Primary blue
$secondary: #000d23    // Dark navy
$body: #3c4770        // Body text color
$border-color: #e0f5ff // Light blue border
$text: #3c4770        // Text color
$sec-white: #F6FCFF   // Secondary white
```

### Typography
- **Primary Font**: Poppins (headings and UI elements)
- **Secondary Font**: Roboto (body text)

## 🎯 Seasonal Themes

The theme includes specialized styling for different occasions:

- **Halloween**: Dark, spooky color schemes and decorative elements
- **Christmas/New Year**: Festive red and green color palette
- **Black Friday/Cyber Monday**: High-contrast promotional styling
- **Summer**: Bright, vibrant summer-themed colors

## 🌟 Special Features

### Google Drive Integration
- Custom product page styling for Google Drive-related content
- Specialized components and layouts
- Google Drive-specific imagery and icons

### Build Optimization
- Automatic SCSS compilation
- CSS autoprefixing for browser compatibility
- Minification for production builds
- Source map generation for development
- Clean-up utilities for production deployment

## 🚀 Development Workflow

1. **Development Mode**: Run `gulp` to start the development server with file watching
2. **Style Development**: Edit SCSS files in the `assets/scss/` directory
3. **Automatic Compilation**: SCSS files are automatically compiled to CSS
4. **Production Build**: Run `npm run production` to create optimized assets

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- CSS Grid and Flexbox support
- Autoprefixer ensures cross-browser compatibility

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🔗 Links

- **Repository**: [https://github.com/jakirmithunbd/demo-codeconfig](https://github.com/jakirmithunbd/demo-codeconfig)
- **Issues**: [https://github.com/jakirmithunbd/demo-codeconfig/issues](https://github.com/jakirmithunbd/demo-codeconfig/issues)

## 📞 Support

For questions and support, please open an issue on GitHub or contact the development team.

---

**Made with ❤️ by the CodeConfig Team**