# Izzy Prior - Brand Marketing Website

A modern, responsive React TypeScript website built with Vite, Tailwind CSS, and Shadcn UI components.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Component-Based Architecture**: Modular, reusable components
- **Type Safety**: Full TypeScript integration with proper type definitions
- **Code Quality**: ESLint, Prettier, and Husky for consistent code
- **Error Handling**: Error boundaries and loading states
- **Performance Optimized**: Asset optimization and lazy loading
- **Responsive Design**: Mobile-first responsive design
- **Accessibility**: ARIA labels and semantic HTML

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn UI components
│   ├── layout/         # Layout components (Header, Footer)
│   └── sections/       # Page sections (Hero, TrustedBy)
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── constants/          # App constants and data
├── styles/             # Global styles
└── assets/             # Static assets (images, icons)
```

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI + Radix UI
- **Type Checking**: TypeScript
- **Code Quality**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged

## 📋 Prerequisites

- [Node.js](https://nodejs.org/en/) (v16 or higher)
- npm or yarn package manager

## 🏃‍♂️ Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   
   The app will be available at [http://localhost:5173/](http://localhost:5173/)

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run type-check` | Run TypeScript type checking |

## 🏗 Architecture Decisions

### Component Organization
- **Layout Components**: Reusable layout elements (Header, Footer)
- **Section Components**: Page-specific sections (Hero, Services)
- **UI Components**: Low-level, reusable UI elements

### State Management
- **Local State**: React useState for component-level state
- **Custom Hooks**: Reusable logic (useLocalStorage, useScrollPosition)
- **Constants**: Static data extracted to constants files

### Type Safety
- **Comprehensive Types**: All components have proper TypeScript interfaces
- **Environment Types**: Vite environment variables properly typed
- **Strict Configuration**: TypeScript strict mode enabled

### Code Quality
- **ESLint Rules**: React, TypeScript, and accessibility rules
- **Prettier**: Consistent code formatting
- **Git Hooks**: Pre-commit linting and formatting

## 🎨 Styling Guidelines

- **Tailwind CSS**: Utility-first CSS framework
- **Design System**: Consistent spacing, colors, and typography
- **Responsive Design**: Mobile-first approach
- **Component Variants**: Reusable component variations

## 🔧 Environment Configuration

Copy `env.example` to `.env` and configure your environment variables:

```bash
cp env.example .env
```

## 🚀 Deployment

The project is optimized for deployment on modern hosting platforms:

- **Vite Build**: Optimized production builds
- **Static Assets**: All assets properly bundled
- **TypeScript**: Type checking in CI/CD pipeline

## 🤝 Contributing

1. Follow the existing code style
2. Run linting and type checking before committing
3. Write meaningful commit messages
4. Add proper TypeScript types for new features

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using modern web technologies
