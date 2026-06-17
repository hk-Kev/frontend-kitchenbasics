# Phase 3: Learning Resources & References

This document provides helpful hints and references to guide your learning throughout Phase 3.

---

## Git & GitHub Workflow

### Creating and Managing Branches
- **Reference**: [GitHub - Creating and deleting branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-git/creating-and-deleting-branches-within-your-repository)
- **Hint**: Branch names should be descriptive. Use `feature/` prefix for new features, `fix/` for bug fixes, `docs/` for documentation.

### Writing Meaningful Commit Messages
- **Hint**: Use imperative mood: "Add navbar component" instead of "Added navbar component"
- **Convention**: Keep first line under 50 characters, add detailed description after a blank line
- **Reference**: [Conventional Commits](https://www.conventionalcommits.org/)

### Pull Request Best Practices
- **Hint**: Before opening a PR, pull the latest changes from main and resolve conflicts locally
- **Tip**: Link related issues in PR description using `Closes #123`
- **Reference**: [GitHub - About pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-git/about-pull-requests)

---

## React & Vite Setup

### Vite Installation & Configuration
- **Reference**: [Vite Documentation](https://vitejs.dev/)
- **Hint**: Vite is faster than Create React App due to ES modules during development
- **Resource**: [Create Vite React App](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

### Project Structure Best Practices
- **Hint**: Organize by feature or type (components, pages, hooks, etc.)
- **Reference**: [React Folder Structure - FreeCodeCamp](https://www.freecodecamp.org/news/how-to-use-code-splitting-in-react/)
- **Tip**: Keep related files close together for easier maintenance

---

## React Router Setup

### React Router Basics
- **Reference**: [React Router v6 Documentation](https://reactrouter.com/)
- **Hint**: Use `<BrowserRouter>` at the root, `<Routes>` for route definitions, `<Route>` for individual routes
- **Learning**: [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)

### Preparing Routes Structure
- **Hint**: Define all routes in a central `routes.tsx` or `router.tsx` file for easier management
- **Example pattern**:
  ```typescript
  const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/products', element: <ProductsPage /> },
    // More routes...
  ]
  ```

---

## Component Architecture

### Building Reusable Layouts
- **Hint**: Use React `<Outlet />` from React Router to render child routes within layouts
- **Pattern**: `<MainLayout>` should use composition to accept children or nested routes
- **Reference**: [Layout Routes - React Router](https://reactrouter.com/en/main/route/route)

### Component Composition Best Practices
- **Hint**: Break large components into smaller, single-responsibility components
- **Tip**: Keep components focused on one task (Navbar, Hero, ProductCard, etc.)
- **Reference**: [React Composition Guide](https://react.dev/learn/passing-props-to-a-component)

### Navbar Component
- **Hint**: Use state management for mobile menu toggle
- **Tip**: Use React Icons for menu and cart icons (integrates well with Tailwind)
- **Reference**: [React Icons](https://react-icons.github.io/)

---

## Styling with Tailwind CSS

### Tailwind Installation & Setup
- **Reference**: [Tailwind CSS Installation - Vite](https://tailwindcss.com/docs/guides/vite)
- **Quick Setup**:
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
- **Configure `tailwind.config.js`**:
  ```javascript
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```

### Tailwind Basics
- **Reference**: [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- **Hint**: Use utility classes for styling (e.g., `bg-blue-500`, `text-lg`, `p-4`)
- **Example**:
  ```jsx
  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
    Shop Now
  </button>
  ```

### Responsive Design with Tailwind
- **Hint**: Use Tailwind breakpoint prefixes for responsive design
- **Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px
- **Example**:
  ```jsx
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* This shows 1 column on mobile, 2 on tablet, 3 on desktop */}
  </div>
  ```

### Mobile-First Approach with Tailwind
- **Hint**: Start with mobile styles, then add larger breakpoints
- **Pattern**: Write base styles first, then add `md:`, `lg:` prefixes for larger screens
- **Reference**: [Tailwind Responsive Design](https://tailwindcss.com/docs/responsive-design)

### Common Tailwind Patterns
- **Container & Spacing**:
  ```jsx
  <div className="container mx-auto px-4 py-8">
    {/* Centered container with padding */}
  </div>
  ```
- **Flexbox Layout**:
  ```jsx
  <div className="flex flex-col md:flex-row gap-4">
    {/* Stack on mobile, side-by-side on desktop */}
  </div>
  ```
- **Grid Layout**:
  ```jsx
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Responsive grid */}
  </div>
  ```

### Tailwind Color Palette
- **Hint**: Use predefined colors for consistency (blue-500, green-600, gray-300, etc.)
- **Reference**: [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
- **Custom Colors**: Extend in `tailwind.config.js` if needed for brand colors

### Dark Mode (Optional)
- **Hint**: Tailwind supports dark mode with `dark:` prefix
- **Enable in config**: Set `darkMode: 'class'` or `'media'`
- **Example**: `bg-white dark:bg-gray-900`

---

## Responsive Testing

### Testing Breakpoints
- **Hint**: Test at: 320px (mobile), 768px (tablet), 1024px (desktop)
- **Tools**: 
  - Browser DevTools device toolbar (F12 → Toggle device toolbar)
  - [Responsive Design Checker](https://responsivedesignchecker.com/)
  - Real devices

### Common Responsive Issues
- **Hint**: Check for overflow on small screens using Tailwind's responsive classes
- **Tip**: Ensure touch targets are at least 44x44px (use `h-11 w-11` or similar)
- **Debug**: Use Tailwind's responsive prefix indicators (shows active breakpoint)

### Tailwind Performance
- **Hint**: Only included CSS classes are bundled in production
- **Tip**: Build size is minimal because unused styles are purged
- **Check**: Run `npm run build` to verify production build size

---

## State Management & Data Handling

### Zustand (Recommended for Simple State)
- **Reference**: [Zustand GitHub](https://github.com/pmndrs/zustand)
- **Hint**: Lightweight alternative to Redux for managing global state
- **Use case**: Cart data, authentication status, user preferences

### Mock Data
- **Hint**: Create a `data/` or `mocks/` folder for mock products and categories
- **Pattern**: Use arrays of objects with IDs for easy rendering
- **Tip**: Keep mock data structure similar to your actual API response

### Fetching Data with Axios
- **Reference**: [Axios Documentation](https://axios-http.com/)
- **Hint**: You won't need it for Phase 3 (using mock data), but prepare for future phases
- **Tip**: Create a service file (e.g., `services/api.ts`) for API calls

---

## Form Handling

### React Hook Form Basics
- **Reference**: [React Hook Form Documentation](https://react-hook-form.com/)
- **Hint**: Minimal library for form management without performance overhead
- **Use case**: Future login/register forms (prepare structure now)

---

## Development Tools & Debugging

### Browser DevTools
- **Hint**: Use Elements/Inspector tab to inspect component structure
- **Tip**: Use Console tab to debug JavaScript errors
- **Tailwind**: Use DevTools to inspect Tailwind classes applied to elements
- **Resources**: [Chrome DevTools](https://developer.chrome.com/docs/devtools/), [Firefox DevTools](https://developer.mozilla.org/en-US/docs/Tools)

### React DevTools Extension
- **Reference**: [React DevTools](https://react.dev/learn/react-developer-tools)
- **Hint**: Inspect component hierarchy, props, and state changes in real-time

### Vite HMR (Hot Module Replacement)
- **Hint**: Vite automatically refreshes your app when you save files
- **Tip**: If HMR doesn't work, check your browser console for errors
- **Tailwind**: HMR works seamlessly with Tailwind CSS

---

## Icons with React Icons

### React Icons Integration
- **Reference**: [React Icons](https://react-icons.github.io/)
- **Installation**: `npm install react-icons`
- **Usage Example**:
  ```jsx
  import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
  
  <FiShoppingCart className="w-6 h-6" />
  ```
- **Combining with Tailwind**: Use Tailwind classes for sizing and styling icons

---

## Deployment

### Vercel Deployment
- **Reference**: [Vercel Documentation](https://vercel.com/docs)
- **Hint**: Connect GitHub repo for automatic deployments on push to main
- **Steps**:
  1. Go to [vercel.com](https://vercel.com)
  2. Sign up with GitHub
  3. Import your repository
  4. Vercel auto-detects Vite configuration

### Netlify Deployment
- **Reference**: [Netlify Documentation](https://docs.netlify.com/)
- **Hint**: Similar process to Vercel
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

### Build Optimization
- **Hint**: Run `npm run build` locally to check for build errors before deploying
- **Tip**: Check build output size to identify large dependencies
- **Tailwind**: CSS is minified automatically in production build

---

## Common Pitfalls & Solutions

### Issue: Tailwind styles not applying
- **Solution**: Ensure `tailwind.config.js` has correct `content` paths
- **Check**: Import Tailwind CSS in your main CSS file or `main.tsx`
- **Hint**: Restart dev server after configuration changes

### Issue: Responsive classes not working
- **Solution**: Verify breakpoint prefix is correct (e.g., `md:`, `lg:`)
- **Check**: Test in DevTools device toolbar to confirm breakpoint is active
- **Hint**: Check element width when debugging responsive issues

### Issue: Routes not working
- **Solution**: Verify `<BrowserRouter>` wraps your `<Routes>` in App.tsx
- **Check**: Route paths and component imports

### Issue: Images not displaying
- **Solution**: Place images in `src/assets/` folder
- **Import**: `import image from '../assets/image.png'`
- **Or**: Use relative paths with `src` attribute

### Issue: Mobile menu not toggling
- **Solution**: Ensure state updates trigger re-render
- **Hint**: Use `useState` hook for menu visibility
- **Check**: Event handlers are properly bound to buttons

---

## Useful Libraries & Tools

| Purpose | Library | Link | Notes |
|---------|---------|------|-------|
| Styling | Tailwind CSS | [tailwindcss.com](https://tailwindcss.com/) | Primary CSS framework for this phase |
| Icons | React Icons | [react-icons.github.io](https://react-icons.github.io/) | Icon library, works great with Tailwind |
| Routing | React Router | [reactrouter.com](https://reactrouter.com/) | Client-side routing |
| Forms | React Hook Form | [react-hook-form.com](https://react-hook-form.com/) | Form state management (future phases) |
| State | Zustand | [github.com/pmndrs/zustand](https://github.com/pmndrs/zustand) | Global state management |
| API Client | Axios | [axios-http.com](https://axios-http.com/) | HTTP requests (future phases) |

---

## Learning Path Checklist

- [ ] Understand Git branching and commits
- [ ] Install and configure Tailwind CSS
- [ ] Learn Tailwind utility classes and responsive prefixes
- [ ] Learn React Router structure and concepts
- [ ] Practice building reusable components with Tailwind
- [ ] Test responsive design on multiple devices using Tailwind breakpoints
- [ ] Integrate React Icons for navbar and other UI elements
- [ ] Deploy successfully to Vercel/Netlify

---

## Questions to Ask Yourself

1. **Is my component doing only one thing?** (Single Responsibility Principle)
2. **Can this component be reused?** (Reusability)
3. **Does my layout work on mobile, tablet, and desktop?** (Responsiveness with Tailwind)
4. **Are my Tailwind classes consistent with the design system?** (Design Consistency)
5. **Are my commit messages clear and descriptive?** (Communication)
6. **Have I tested the deployed version?** (Quality Assurance)

---

## Resources for Deeper Learning

- [React Official Docs](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/) - Component examples using Tailwind
- [Heroicons](https://heroicons.com/) - Tailwind-designed icon set
- [Web.dev - Responsive Web Design Basics](https://web.dev/responsive-web-design-basics/)
- [Smashing Magazine - Articles](https://www.smashingmagazine.com/articles/)
- [CSS Tricks](https://css-tricks.com/)

---

**Happy Learning! 🚀**

Feel free to reference this document throughout Phase 3 and don't hesitate to explore the linked resources. Focus on mastering Tailwind CSS for styling as it will be your primary CSS framework.
