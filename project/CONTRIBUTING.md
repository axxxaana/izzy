# Contributing Guidelines

Thank you for your interest in contributing to the Izzy Prior Brand Marketing website!

## 📋 Development Workflow

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Create a feature branch**: `git checkout -b feature/your-feature-name`
4. **Make your changes**
5. **Run tests and linting**: `npm run lint && npm run type-check`
6. **Commit your changes**: Follow conventional commit format
7. **Push to your branch**: `git push origin feature/your-feature-name`
8. **Create a Pull Request**

## 🎯 Code Standards

### TypeScript
- Use strict TypeScript configuration
- Define proper interfaces for all component props
- Avoid `any` types; use proper type definitions
- Export types from their respective files

### React Components
- Use functional components with hooks
- Follow the component structure pattern:
  ```tsx
  import React from 'react';
  import { ComponentProps } from '../types';
  
  export const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
    return (
      <div>
        {/* Component JSX */}
      </div>
    );
  };
  ```

### File Organization
- Keep components focused and single-purpose
- Extract reusable logic to custom hooks
- Store constants in the `constants/` directory
- Use proper import/export patterns

### Styling
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and color schemes
- Use semantic HTML elements

## 🧪 Testing

- Ensure all TypeScript types are correct
- Test components in different screen sizes
- Verify accessibility features work properly
- Check that error boundaries function correctly

## 📝 Commit Messages

Follow the conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

### Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples:
```
feat(components): add testimonial section component
fix(header): resolve mobile navigation alignment
docs(readme): update installation instructions
refactor(hooks): improve useLocalStorage implementation
```

## 🚨 Pre-commit Checks

Before committing, ensure:
- [ ] Code passes ESLint checks (`npm run lint`)
- [ ] Code is properly formatted (`npm run format:check`)
- [ ] TypeScript compiles without errors (`npm run type-check`)
- [ ] All imports are resolved correctly
- [ ] No console.log statements in production code

## 🏗 Architecture Guidelines

### Component Structure
```
src/components/
├── ui/           # Basic UI components (Button, Card, etc.)
├── layout/       # Layout components (Header, Footer)
└── sections/     # Page sections (Hero, Services, etc.)
```

### Data Management
- Store static data in `constants/` files
- Use custom hooks for reusable logic
- Keep component state minimal and focused

### Performance
- Use React.memo for expensive components
- Implement proper key props for lists
- Lazy load heavy components when appropriate
- Optimize images and assets

## 🎨 Design System

### Colors
- Primary: `#e44782` (Brand pink)
- Text: Various grays as defined in Tailwind
- Background: `#ffffff` (White)

### Typography
- Font Family: Inter, Montserrat, Plus Jakarta Sans
- Responsive font sizes using Tailwind utilities

### Spacing
- Follow Tailwind's spacing scale
- Maintain consistent margins and padding
- Use responsive spacing utilities

## 🐛 Bug Reports

When reporting bugs, include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser and device information
- Screenshots if applicable

## 💡 Feature Requests

When requesting features:
- Describe the problem you're trying to solve
- Explain the proposed solution
- Consider alternative approaches
- Think about potential impact on existing features

## 📞 Questions?

If you have questions about contributing, please:
- Check existing documentation
- Review closed issues for similar questions
- Create a new issue with the "question" label

Thank you for contributing! 🙏 