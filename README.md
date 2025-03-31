# MultiTools Hub

A comprehensive collection of online tools and utilities built with HTML, JavaScript, and Bootstrap. This project provides a wide range of tools for various purposes, including image conversion, SEO analysis, calculations, and developer utilities.

## Features

- 🖼️ Image Tools
  - Image to PNG Converter
  - Image Resizer
  - More coming soon...

- 🔍 SEO Tools
  - Keyword Density Analyzer
  - Meta Tag Generator
  - More coming soon...

- 🧮 Calculators
  - Scientific Calculator
  - Percentage Calculator
  - More coming soon...

- 💻 Developer Tools
  - JSON Formatter
  - Base64 Encoder
  - More coming soon...

## Project Structure

```
multitools-hub/
├── components/
│   ├── header.html
│   └── footer.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── tools/
│       ├── image-to-png.js
│       └── ... (other tool-specific JS files)
├── tools/
│   ├── image-to-png.html
│   └── ... (other tool HTML files)
├── index.html
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/multitools-hub.git
   ```

2. Navigate to the project directory:
   ```bash
   cd multitools-hub
   ```

3. Open `index.html` in your web browser or set up a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

4. Visit `http://localhost:8000` in your browser.

## Development

### Adding New Tools

1. Create a new HTML file in the `tools/` directory
2. Create a corresponding JavaScript file in `js/tools/`
3. Add the tool to the navigation menu in `components/header.html`
4. Add the tool card to the appropriate section in `index.html`

### Styling

- The project uses Bootstrap 5 for the layout and components
- Custom styles are defined in `css/style.css`
- Use CSS variables for consistent theming

### JavaScript

- Main functionality is in `js/main.js`
- Tool-specific JavaScript is in `js/tools/`
- Use the `initializeTool()` function for tool initialization

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Bootstrap 5 for the UI framework
- Font Awesome for icons
- All contributors and users of the tools

## Contact

For any questions or suggestions, please contact us at:
- Email: contact@multitoolshub.com
- Website: https://multitoolshub.com 