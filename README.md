# Mercurius Dynamics Landing Page

A modern, responsive multi-page landing page for Mercurius Dynamics - a precision engineering and automation company. Built with React.js, featuring smooth scrolling, page transitions, and a professional design based on Figma specifications.

## Features

- **Multi-page Architecture**: Home, About, Contact, Products, Services, Industries, and Request Quote pages
- **Smooth Scrolling**: Seamless navigation between sections and pages
- **Page Transitions**: Beautiful animations using Framer Motion
- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Modern UI/UX**: Clean, professional design with consistent branding
- **Interactive Components**: Expandable cards, form validation, and hover effects
- **Environment Configuration**: Configurable settings via .env files

## Technology Stack

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.3.0
- **Animations**: Framer Motion 7.2.1
- **Styling**: CSS3 with CSS Variables
- **Build Tool**: Create React App
- **Package Manager**: npm

## Color Palette

- **Primary Purple**: #8A2BE2
- **Primary Purple Dark**: #5A2D82
- **Primary Purple Light**: #A8C0FF
- **Secondary Orange**: #FF7F3F
- **Text Dark**: #333333
- **Text Gray**: #6B7280
- **Background Light Gray**: #F8F8FA
- **Background Dark**: #1A1A2E

## Typography

- **Font Family**: Inter (Google Fonts)
- **Fallbacks**: Roboto, Open Sans, system fonts
- **Weights**: 300, 400, 500, 600, 700

## Project Structure

```
mercurius-dynamics-landing/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── HomePage.css
│   │   ├── AboutPage.js
│   │   ├── AboutPage.css
│   │   ├── ContactPage.js
│   │   ├── ContactPage.css
│   │   ├── ProductsPage.js
│   │   ├── ProductsPage.css
│   │   ├── ServicesPage.js
│   │   ├── ServicesPage.css
│   │   ├── IndustriesPage.js
│   │   ├── IndustriesPage.css
│   │   ├── RequestQuotePage.js
│   │   └── RequestQuotePage.css
│   ├── styles/
│   │   └── App.css
│   ├── utils/
│   │   └── smoothScroll.js
│   ├── App.js
│   └── index.js
├── .env
└── package.json
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mercurius-dynamics-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   # Edit .env file with your configuration
   REACT_APP_SITE_NAME=Mercurius Dynamics
   REACT_APP_SITE_URL=https://mercuriusdynamics.com
   REACT_APP_CONTACT_EMAIL=info@mercuriusdynamics.com
   REACT_APP_PHONE=+1 (555) 123-4567
   REACT_APP_ADDRESS=123 Industrial Way, Anytown, USA
   ```

4. **Start development server**
   ```bash
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## Pages Overview

### Home Page
- Hero section with company branding
- About section with company overview
- Services showcase grid
- Industries served
- Call-to-action section

### About Page
- Company overview and mission/vision
- Certifications and compliance
- Facilities information
- Interactive timeline
- Contact CTA

### Contact Page
- Contact form with validation
- Contact information display
- WhatsApp integration
- Map placeholder section

### Products Page
- Category-based product navigation
- Brand showcase grid
- Product category cards
- Trusted brands section

### Services Page
- Comprehensive services grid
- Capabilities overview
- Materials we work with
- Key benefits section

### Industries Page
- Expandable industry cards
- CNC-specific industries
- Industry descriptions and expertise

### Request Quote Page
- Multi-line part details form
- File upload sections
- Contact information
- NDA agreement checkbox

## Customization

### Colors
Update CSS variables in `src/styles/App.css`:
```css
:root {
  --primary-purple: #8A2BE2;
  --secondary-orange: #FF7F3F;
  /* ... other variables */
}
```

### Content
- Update company information in `.env` file
- Modify page content in respective page components
- Update contact information in Footer component

### Styling
- All styles are modular per component
- Global styles in `src/styles/App.css`
- Component-specific styles in individual CSS files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Lazy loading for images
- Optimized animations with Framer Motion
- Smooth scrolling with CSS and JavaScript
- Responsive images and layouts
- Minimal bundle size

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Mercurius Dynamics.

## Support

For technical support or questions, please contact:
- Email: info@mercuriusdynamics.com
- Phone: +1 (555) 123-4567
