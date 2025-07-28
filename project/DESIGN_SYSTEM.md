# Izzy Prior Website Design System

This document outlines the design system and organization structure for the Izzy Prior website to ensure consistency when creating new pages and components.

## 📁 File Organization

### Constants Directory (`src/constants/`)
- `design-system.ts` - Typography, colors, spacing, and visual elements
- `buttons.ts` - All button styles and animations
- `animations.ts` - Animation patterns and configurations
- `page-templates.ts` - Page structure templates
- `navigation.ts` - Navigation configuration
- `services.ts` - Service offerings
- `testimonials.ts` - Testimonial data
- `config.ts` - App configuration

## 🎨 Design System

### Typography

#### Headings
```typescript
import { TYPOGRAPHY } from '../constants/design-system';

// H1 - Main page headings
<h1 className={TYPOGRAPHY.headings.h1.classes}>
  Your Heading
</h1>

// H2 - Section headings
<h2 className={TYPOGRAPHY.headings.h2.classes}>
  Section Title
</h2>

// H3 - Subsection headings
<h3 className={TYPOGRAPHY.headings.h3.classes}>
  Subsection Title
</h3>
```

#### Body Text
```typescript
// Large body text (18px)
<p className={TYPOGRAPHY.body.large.classes}>
  Main paragraph text
</p>

// Medium body text (16px)
<p className={TYPOGRAPHY.body.medium.classes}>
  Regular paragraph text
</p>

// Small body text (15.9px)
<p className={TYPOGRAPHY.body.small.classes}>
  Smaller text for details
</p>
```

### Colors
```typescript
import { COLORS } from '../constants/design-system';

// Primary brand color
<div style={{ color: COLORS.primary.pink }}>Brand Pink</div>

// Text colors
<p style={{ color: COLORS.text.primary }}>Primary Text</p>
<p style={{ color: COLORS.text.secondary }}>Secondary Text</p>
```

### Spacing
```typescript
import { SPACING } from '../constants/design-system';

// Responsive padding (matches hero section)
<div className={SPACING.padding.responsive}>
  Content with consistent padding
</div>
```

## 🔘 Button System

### Button Types
```typescript
import { BUTTON_STYLES, BUTTON_ANIMATIONS } from '../constants/buttons';

// Primary Button (Main CTA)
<motion.button
  className={BUTTON_STYLES.primary.base}
  whileHover={BUTTON_ANIMATIONS.hover.primary}
  whileTap={BUTTON_ANIMATIONS.tap.primary}
>
  Get Started
</motion.button>

// Secondary Button
<motion.button
  className={BUTTON_STYLES.secondary.base}
  whileHover={BUTTON_ANIMATIONS.hover.secondary}
  whileTap={BUTTON_ANIMATIONS.tap.secondary}
>
  Learn More
</motion.button>

// Form Button
<motion.button
  className={BUTTON_STYLES.form.submit}
  whileHover={BUTTON_ANIMATIONS.hover.form}
  whileTap={BUTTON_ANIMATIONS.tap.form}
>
  Subscribe
</motion.button>
```

### Button Sizes
- `base` - Standard size (20px text, px-5 py-3)
- `small` - Smaller size (16px text, px-4 py-2)
- `large` - Larger size (24px text, px-6 py-4)

## 🎬 Animation System

### Section Animations
```typescript
import { SECTION_ANIMATIONS, VIEWPORT_SETTINGS } from '../constants/animations';

// Hero Section
<motion.section
  initial={SECTION_ANIMATIONS.hero.container.initial}
  whileInView={SECTION_ANIMATIONS.hero.container.animate}
  transition={SECTION_ANIMATIONS.hero.container.transition}
  viewport={VIEWPORT_SETTINGS}
>
  <motion.h1
    initial={SECTION_ANIMATIONS.hero.heading.initial}
    whileInView={SECTION_ANIMATIONS.hero.heading.animate}
    transition={SECTION_ANIMATIONS.hero.heading.transition}
    viewport={VIEWPORT_SETTINGS}
  >
    Your Heading
  </motion.h1>
</motion.section>
```

### Common Animation Patterns
```typescript
import { ANIMATIONS } from '../constants/animations';

// Fade in from bottom
<motion.div
  initial={ANIMATIONS.fadeIn.up.initial}
  whileInView={ANIMATIONS.fadeIn.up.animate}
  transition={ANIMATIONS.fadeIn.up.transition}
  viewport={VIEWPORT_SETTINGS}
>
  Content
</motion.div>

// Stagger animation for lists
<motion.ul
  initial={ANIMATIONS.stagger.container.initial}
  whileInView={ANIMATIONS.stagger.container.animate}
  transition={ANIMATIONS.stagger.container.transition}
>
  {items.map((item, index) => (
    <motion.li
      key={index}
      initial={ANIMATIONS.stagger.item.initial}
      whileInView={ANIMATIONS.stagger.item.animate}
      transition={ANIMATIONS.stagger.item.transition}
    >
      {item}
    </motion.li>
  ))}
</motion.ul>
```

## 📄 Page Templates

### Creating a New Page
```typescript
import { PAGE_TEMPLATES, LAYOUT_COMPONENTS } from '../constants/page-templates';

// 1. Choose a template
const template = PAGE_TEMPLATES.about;

// 2. Create the page structure
const AboutPage = () => {
  return (
    <div className={LAYOUT_COMPONENTS.pageWrapper.className}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={LAYOUT_COMPONENTS.sectionWrapper.className}>
          <div className={LAYOUT_COMPONENTS.contentContainer.className}>
            {/* Hero content */}
          </div>
        </section>
        
        {/* Story Section */}
        <section className={LAYOUT_COMPONENTS.sectionWrapper.className}>
          <div className={LAYOUT_COMPONENTS.contentContainer.className}>
            {/* Story content */}
          </div>
        </section>
        
        {/* Add more sections as needed */}
      </main>
      
      <Footer />
    </div>
  );
};
```

### Page Structure Guidelines

#### Hero Section
- Use H1 for main heading
- Include descriptive paragraph
- Add primary CTA button
- Use gradient or image background
- Apply hero animations

#### Content Sections
- Use H2 for section headings
- Include relevant body text
- Add images where appropriate
- Use consistent padding
- Apply content animations

#### CTA Sections
- Use compelling heading
- Include action-oriented text
- Add primary button
- Use brand colors
- Apply CTA animations

## 🎯 Best Practices

### 1. Typography Hierarchy
- H1: Main page headings (75px)
- H2: Section headings (50px)
- H3: Subsection headings (40px)
- H4: Card headings (28px)
- Body: 18px for main text, 16px for regular text

### 2. Color Usage
- Primary pink (#e44782) for CTAs and highlights
- White text on dark backgrounds
- Gray text for secondary content
- Consistent hover states

### 3. Spacing
- Use responsive padding: `p-3 sm:p-4 lg:p-[15px]`
- Consistent margins between sections
- Proper spacing between elements

### 4. Animations
- Fade in from bottom for sections
- Stagger animations for lists
- Hover effects for interactive elements
- Consistent timing and easing

### 5. Button Usage
- Primary buttons for main CTAs
- Secondary buttons for alternative actions
- Form buttons for submissions
- Consistent hover and tap animations

## 📝 Creating New Pages

### Step 1: Choose Template
```typescript
const template = PAGE_TEMPLATES[pageType]; // home, about, services, etc.
```

### Step 2: Create Page Component
```typescript
// src/pages/NewPage.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { PAGE_TEMPLATES, LAYOUT_COMPONENTS } from '../constants/page-templates';
import { SECTION_ANIMATIONS, VIEWPORT_SETTINGS } from '../constants/animations';
import { TYPOGRAPHY } from '../constants/design-system';
import { BUTTON_STYLES, BUTTON_ANIMATIONS } from '../constants/buttons';

const NewPage = () => {
  return (
    <div className={LAYOUT_COMPONENTS.pageWrapper.className}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <motion.section
          className={LAYOUT_COMPONENTS.sectionWrapper.className}
          initial={SECTION_ANIMATIONS.hero.container.initial}
          whileInView={SECTION_ANIMATIONS.hero.container.animate}
          transition={SECTION_ANIMATIONS.hero.container.transition}
          viewport={VIEWPORT_SETTINGS}
        >
          <div className={LAYOUT_COMPONENTS.contentContainer.className}>
            <motion.h1
              className={TYPOGRAPHY.headings.h1.classes}
              initial={SECTION_ANIMATIONS.hero.heading.initial}
              whileInView={SECTION_ANIMATIONS.hero.heading.animate}
              transition={SECTION_ANIMATIONS.hero.heading.transition}
              viewport={VIEWPORT_SETTINGS}
            >
              Page Title
            </motion.h1>
            
            <motion.p
              className={TYPOGRAPHY.body.large.classes}
              initial={SECTION_ANIMATIONS.hero.paragraph.initial}
              whileInView={SECTION_ANIMATIONS.hero.paragraph.animate}
              transition={SECTION_ANIMATIONS.hero.paragraph.transition}
              viewport={VIEWPORT_SETTINGS}
            >
              Page description
            </motion.p>
            
            <motion.button
              className={BUTTON_STYLES.primary.base}
              initial={SECTION_ANIMATIONS.hero.button.initial}
              whileInView={SECTION_ANIMATIONS.hero.button.animate}
              transition={SECTION_ANIMATIONS.hero.button.transition}
              viewport={VIEWPORT_SETTINGS}
              whileHover={BUTTON_ANIMATIONS.hover.primary}
              whileTap={BUTTON_ANIMATIONS.tap.primary}
            >
              Call to Action
            </motion.button>
          </div>
        </motion.section>
        
        {/* Add more sections following the same pattern */}
      </main>
      
      <Footer />
    </div>
  );
};

export default NewPage;
```

### Step 3: Add to Navigation
```typescript
// src/constants/navigation.ts
export const NAV_ITEMS: NavItem[] = [
  { label: 'About', width: 'w-[72px]', href: '/about' },
  { label: 'Services', width: 'w-[88px]', href: '/services' },
  { label: 'Portfolio', width: 'w-[86px]', href: '/portfolio' },
  { label: 'New Page', width: 'w-[80px]', href: '/new-page' }, // Add new page
];
```

### Step 4: Add Route
```typescript
// src/App.tsx or router configuration
import NewPage from './pages/NewPage';

// Add route
<Route path="/new-page" element={<NewPage />} />
```

## 🔧 Maintenance

### Updating Design System
1. Modify constants in `src/constants/` files
2. Update this documentation
3. Test across all pages
4. Ensure consistency

### Adding New Components
1. Create component in `src/components/`
2. Add to design system if reusable
3. Document usage patterns
4. Update this guide

This design system ensures consistency, maintainability, and scalability for the Izzy Prior website. 