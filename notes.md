# Bento Portfolio Development Notes

## Project Overview

- **Type**: Bento Box style portfolio
- **Tech Stack**: React + Vite + SCSS
- **Design**: Glass morphism (dark) + Neumorphism (light)
- **Layout**: CSS Grid with animated interactions

## Complete Development History

### Phase 1: Initial Setup & Structure

1. **Project Initialization**: Started with basic bento box concept
2. **Grid Layout Planning**: Discussed 11 columns x 5 rows structure
3. **React/Vite Migration**: Converted from vanilla HTML to React setup
4. **SCSS Architecture**: Organized modular SCSS structure
5. **Package.json Setup**: Configured Vite, React, SCSS dependencies

### Phase 2: Grid Implementation

1. **Fixed Bento Layout**: Implemented proper grid-area positioning
2. **Section Mapping**: Created specific grid areas for each section
3. **Responsive Design**: Added breakpoints for tablet/mobile
4. **Grid Fixes**: Resolved overlap issues between navbar and sections
5. **Layout Optimization**: Adjusted proportions and spacing

### Phase 3: Styling Systems

1. **CSS Variables**: Created comprehensive root variable system
2. **Dark Theme**: Implemented glass morphism with backdrop-filter
3. **Light Theme**: Added neumorphism with soft shadows
4. **Theme Toggle**: Created React state-based theme switching
5. **Glass Variables**: Centralized glass effect properties

### Phase 4: Navigation System

1. **Navbar Integration**: Made navbar part of bento grid
2. **Ionicons**: Added icon library and replaced text with icons
3. **Marker Animation**: Created glowing marker that follows hover
4. **Color System**: Assigned unique colors to each nav item
5. **JavaScript Integration**: Fixed timing issues with React rendering

### Phase 5: Interactive Features

1. **Mouse Glow**: Added mouse-following background gradients
2. **Section Borders**: Created rotating borders on nav hover
3. **Animation Fixes**: Resolved marker visibility and glow issues
4. **Border Rotation**: Added alternating rotation directions
5. **Theme Compatibility**: Fixed animations for both themes

### Phase 6: Technical Refinements

1. **SCSS Deprecation**: Fixed Dart Sass 3.0 compatibility issues
2. **File Organization**: Separated navbar styles into components
3. **Responsive Fixes**: Improved mobile layout and spacing
4. **Performance**: Optimized animations and transitions
5. **Code Cleanup**: Removed duplicate styles and unused code

## Detailed Implementation Steps

### Grid System Evolution

```scss
// Initial attempt with template areas
grid-template-areas: 
  "navbar profile profile skills skills..."

// Final implementation with grid-area positioning
.navbar { grid-area: 1 / 1 / 6 / 2; }
.section--profile { grid-area: 1 / 2 / 4 / 5; }
// etc...
```

### Theme System Development

```scss
// Started with basic colors
--background-color: #0f1629;
--card-surface-color: #2d3037;

// Evolved to comprehensive system
:root {
  // Dark theme glass morphism
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-blur: blur(10px);
}

[data-theme="light"] {
  // Light theme neumorphism
  --neu-bg: #e0e5ec;
  --neu-outset: 5px 5px 10px #a3b1c6, -5px -5px 10px #ffffff;
}
```

### Animation System Progression

```javascript
// Initial simple marker
marker.style.left = e.offsetLeft + "px";

// Evolved to vertical navbar marker
marker.style.top = element.offsetTop + "px";

// Final implementation with React timing
function initNavMarker() {
  if (!marker || list.length === 0) {
    setTimeout(initNavMarker, 100);
    return;
  }
  // Setup animations...
}
```

### Problem-Solution Log

#### Issue: Bento Box Layout Not Working

**Problem**: Sections overlapping, navbar not integrated
**Solution**: Used grid-area positioning instead of template areas
**Code**: `grid-area: 1 / 1 / 6 / 2;` for precise control

#### Issue: React Components Not Rendering in Time

**Problem**: JavaScript couldn't find DOM elements
**Solution**: Recursive setTimeout to wait for React rendering
**Code**: `setTimeout(initNavMarker, 100);`

#### Issue: SCSS Deprecation Warnings

**Problem**: `map-values()` deprecated in Dart Sass 3.0
**Solution**: Updated to `@use 'sass:map'` and `map.values()`
**Code**: `@use 'sass:map';` then `map.values($grid-areas-map);`

#### Issue: Marker Colors Not Showing

**Problem**: CSS specificity and selector order
**Solution**: Fixed selector pattern and added !important
**Code**: `li.active:nth-child(1) ~ #marker::before`

#### Issue: Light Mode Border Not Visible

**Problem**: Background color override not working
**Solution**: Added !important to theme-specific styles
**Code**: `background: var(--neu-bg) !important;`

#### Issue: Section Hover Links Mixed Up

**Problem**: DOM order didn't match navbar order
**Solution**: Created explicit section mapping by CSS selectors
**Code**: `const sectionSelectors = ['.section--profile', '.section--about'...]`

### Component Architecture

#### App Structure

```jsx
// Initial structure
<BentoGrid>
  <ProfileSection />
  // other sections
</BentoGrid>

// Final structure (direct children for grid)
<div className="app">
  <Navbar />
  <ProfileSection />
  <AboutSection />
  // etc...
</div>
```

#### Navbar Evolution

```jsx
// Started with text links
<a href="#profile">Profile</a>

// Evolved to icons with theme toggle
<a href="#profile">
  <ion-icon name="person-outline"></ion-icon>
</a>
<button className="navbar__theme-toggle">
  {isDark ? '☀️' : '🌙'}
</button>
```

### Styling Methodology

#### SCSS Organization

```
src/scss/
├── abstracts/     # Variables, mixins
├── base/          # Reset, typography, root
├── components/    # Navbar, buttons
├── layouts/       # Sections, grid
└── utilities/     # Helper classes
```

#### CSS Custom Properties Strategy

```scss
// Theme-agnostic properties
--grid-gap: 0.625rem;
--border-radius: 1.25rem;
--transition-speed: 500ms;

// Theme-specific overrides
[data-theme="light"] {
  --glass-bg: transparent;
  --neu-bg: #e0e5ec;
}
```

### Animation Techniques

#### Mouse-Following Glow

```javascript
// Update CSS custom properties in real-time
const handleMouseMove = (e) => {
  const x = (e.clientX / window.innerWidth) * 100
  const y = (e.clientY / window.innerHeight) * 100
  document.documentElement.style.setProperty('--mouse-x', `${x}%`)
  document.documentElement.style.setProperty('--mouse-y', `${y}%`)
}
```

#### Rotating Borders

```scss
// Conic gradient rotation
background: conic-gradient(from 0deg, transparent, var(--nav-color), transparent);
animation: rotateBorder 2s linear infinite;

// Alternating directions
&.section--contact,
&.section--skills,
&.section--services {
  &::before {
    animation: rotateBorderReverse 2s linear infinite;
  }
}
```

### Performance Considerations

#### Hardware Acceleration

- Used `transform` instead of position changes
- Applied `will-change: transform` for smooth animations
- Utilized CSS custom properties for theme switching

#### Event Optimization

- Debounced mouse events where possible
- Used event delegation for better performance
- Cleaned up event listeners in React useEffect

#### CSS Optimization

- Minimized repaints with transform animations
- Used backdrop-filter for glass effects
- Leveraged CSS Grid for layout instead of JavaScript

### Browser Compatibility Notes

- CSS Grid: IE11+ (with -ms- prefix)
- Backdrop-filter: Chrome 76+, Firefox 103+
- CSS Custom Properties: IE11+ (partial)
- Conic-gradient: Chrome 69+, Firefox 83+

### Deployment Considerations

- Vite build optimization
- SCSS compilation to CSS
- Asset optimization and minification
- Environment variable configuration

### Future MERN Stack Migration Plan

backend/
├── models/
│   ├── User.js
│   ├── Project.js
│   └── Skill.js
├── routes/
│   ├── auth.js
│   ├── projects.js
│   └── profile.js
├── middleware/auth.js
└── server.js

#### Backend Architecture

```javascript
// Express routes
app.get('/api/profile', getProfile)
app.get('/api/projects', getProjects)
app.put('/api/profile', updateProfile)

// MongoDB schemas
const userSchema = {
  name: { first: String, last: String },
  title: String,
  projects: [{ type: ObjectId, ref: 'Project' }]
}
```

#### Frontend Integration

```javascript
// API service layer
const api = {
  getProfile: () => fetch('/api/profile').then(r => r.json()),
  updateProfile: (data) => fetch('/api/profile', {
    method: 'PUT',
    body: JSON.stringify(data)
  })
}

// React hooks for data fetching
const useProfile = () => {
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    api.getProfile().then(setProfile)
  }, [])
  return profile
}
```

### Key Learnings

1. **Grid-area positioning** provides more control than template areas
2. **React timing issues** require careful DOM element detection
3. **CSS custom properties** are powerful for theme systems
4. **Animation performance** benefits from transform-based animations
5. **SCSS architecture** should separate concerns clearly
6. **Browser compatibility** requires progressive enhancement
7. **Event handling** in React needs proper cleanup
8. **CSS specificity** matters for complex selectors
9. **Theme switching** works best with data attributes
10. **Performance optimization** should be considered from the start
