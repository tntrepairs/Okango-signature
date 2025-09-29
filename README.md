# Company Website - Professional Next.js Template

A modern, professional, and responsive company website built with Next.js 14, TypeScript, and SCSS. This template provides a solid foundation for any business looking to establish a strong online presence.

**Author:** Divin Divakaran

## Features

- **Modern Design**: Clean, professional, and modern UI/UX design
- **Responsive**: Mobile-first responsive design that works on all devices
- **Fast Performance**: Optimized for speed and SEO with Next.js 14
- **TypeScript**: Full TypeScript support for better development experience
- **SCSS Styling**: Modular SCSS architecture with consistent naming conventions
- **Component-Based**: Reusable React components with proper separation of concerns
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **API Routes**: Built-in API endpoints for contact forms, newsletter, and data
- **Custom Hooks**: Reusable React hooks for forms, API calls, and scroll handling
- **Mock API**: Development-ready mock API calls for testing
- **Form Validation**: Client-side and server-side form validation
- **Environment Config**: Comprehensive environment variable management
- **Error Handling**: Robust error handling and user feedback

## Project Structure

```
company-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # About page
│   │   ├── services/          # Services page
│   │   ├── contact/           # Contact page
│   │   ├── api/               # API routes
│   │   │   ├── contact/
│   │   │   ├── newsletter/
│   │   │   ├── services/
│   │   │   └── team/
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Header.module.scss
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.scss
│   │   └── sections/         # Page sections (organized by component)
│   │       ├── Hero/
│   │       │   ├── Hero.tsx
│   │       │   └── Hero.module.scss
│   │       ├── About/
│   │       │   ├── About.tsx
│   │       │   └── About.module.scss
│   │       ├── Services/
│   │       │   ├── Services.tsx
│   │       │   └── Services.module.scss
│   │       ├── Contact/
│   │       │   ├── Contact.tsx
│   │       │   └── Contact.module.scss
│   │       ├── AboutHero/
│   │       │   ├── AboutHero.tsx
│   │       │   └── AboutHero.module.scss
│   │       ├── Team/
│   │       │   ├── Team.tsx
│   │       │   └── Team.module.scss
│   │       ├── Values/
│   │       │   ├── Values.tsx
│   │       │   └── Values.module.scss
│   │       ├── ServicesHero/
│   │       │   ├── ServicesHero.tsx
│   │       │   └── ServicesHero.module.scss
│   │       ├── ServiceList/
│   │       │   ├── ServiceList.tsx
│   │       │   └── ServiceList.module.scss
│   │       ├── Process/
│   │       │   ├── Process.tsx
│   │       │   └── Process.module.scss
│   │       └── ContactHero/
│   │           ├── ContactHero.tsx
│   │           └── ContactHero.module.scss
│   ├── styles/               # Global & modular SCSS
│   │   ├── globals.scss      # Base imports and global styles
│   │   ├── variables.scss    # Colors, fonts, spacing, breakpoints
│   │   ├── mixins.scss       # Reusable SCSS functions and mixins
│   │   ├── layout.scss       # Header/Footer specific styles
│   │   └── components/       # Component-specific styles
│   ├── lib/                  # Utilities (helpers, config, constants)
│   │   ├── constants.ts      # App constants and data
│   │   ├── fetcher.ts        # API utilities and mock functions
│   │   └── config.ts         # Environment and app configuration
│   ├── hooks/                # Custom React hooks
│   │   ├── useForm.ts        # Form handling hooks
│   │   ├── useApi.ts         # API interaction hooks
│   │   └── useScroll.ts      # Scroll-related hooks
│   └── types/                # TypeScript interfaces
│       └── index.ts          # All type definitions
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **SCSS**: CSS preprocessor with modular architecture
- **React**: Component-based UI library
- **CSS Modules**: Scoped CSS for components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd company-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors and Branding

Update the color scheme in `src/styles/abstracts/_variables.scss`:

```scss
// Primary Colors
$color-primary: #2563eb;
$color-secondary: #64748b;
$color-accent: #f59e0b;

// Update these values to match your brand
```

### Content Updates

1. **Company Information**: Update company details in:
   - `src/app/layout.tsx` (metadata)
   - `src/components/layout/Header.tsx` (logo)
   - `src/components/layout/Footer.tsx` (contact info)

2. **Page Content**: Modify content in respective component files:
   - `src/components/sections/Hero.tsx`
   - `src/components/sections/About.tsx`
   - `src/components/sections/Services.tsx`
   - `src/components/sections/Contact.tsx`

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add `page.tsx` with proper metadata
3. Create corresponding component folders in `src/components/sections/` with both `.tsx` and `.module.scss` files
4. Add navigation links in `src/components/layout/Header.tsx`

**Example structure for a new section:**
```
src/components/sections/NewSection/
├── NewSection.tsx
└── NewSection.module.scss
```

## Responsive Design

The website is built with a mobile-first approach and includes breakpoints for:

- Mobile: 480px and below
- Tablet: 768px and below
- Desktop: 1024px and above
- Large Desktop: 1280px and above

## SEO Features

- **Semantic HTML**: Proper HTML5 semantic structure
- **Meta Tags**: Comprehensive meta tags and descriptions
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD structured data markup
- **Performance**: Optimized images and fast loading
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Canonical URLs**: Proper canonical link management

## API Endpoints

The project includes built-in API routes for common functionality:

### Contact Form API
```typescript
POST /api/contact
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "message": "Hello, I'm interested in your services."
}
```

### Newsletter API
```typescript
POST /api/newsletter
{
  "email": "user@example.com"
}
```

### Services API
```typescript
GET /api/services
// Returns all available services
```

### Team API
```typescript
GET /api/team
// Returns team member information
```

## SCSS Architecture

The project uses a well-organized SCSS structure:

- **Variables**: Colors, fonts, spacing, breakpoints
- **Mixins**: Reusable functions for common patterns
- **Layout**: Header, footer, and grid systems
- **Components**: Modular component styles
- **Global**: Base styles and utilities

### Example SCSS Usage
```scss
// Using variables
.my-component {
  color: $color-primary;
  padding: $spacing-4;
  border-radius: $border-radius-lg;
}

// Using mixins
.button {
  @include button-primary;
  @include flex-center;
}
```

## Custom Hooks

The project includes several custom React hooks for common functionality:

### Form Hooks
```typescript
// Contact form with validation
const { values, errors, isSubmitting, setValue, handleSubmit } = useContactForm();

// Newsletter form
const { values, errors, setValue, handleSubmit } = useNewsletterForm();
```

### API Hooks
```typescript
// Contact form submission
const { loading, error, submitContactForm } = useContactFormApi();

// Newsletter subscription
const { loading, error, subscribeToNewsletter } = useNewsletterApi();

// Services data
const { data, loading, error, fetchServices } = useServicesApi();
```

### Scroll Hooks
```typescript
// Track scroll position
const { scrollY, isScrolling } = useScroll();

// Detect element in viewport
const { isInViewport, hasBeenInViewport } = useInViewport(ref);

// Smooth scrolling
const { scrollToElement, scrollToTop } = useSmoothScroll();
```

## Accessibility Features

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt Text**: Descriptive alt text for all images
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: Optimized for screen readers
- **High Contrast**: Sufficient color contrast ratios
- **Focus Management**: Clear focus indicators
- **ARIA Labels**: Proper ARIA attributes

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Support

For support and questions, please contact:

- Email: info@company.com
- Phone: +1 (234) 567-890

## Updates

This template is regularly updated with:

- Latest Next.js features
- Security updates
- Performance improvements
- New components and sections

---

**Built with Next.js, TypeScript, and SCSS**