# HTML Over JS

A comprehensive demonstration of how native HTML elements solve 90% of common UI problems without JavaScript frameworks.

## Author

Michael W. Czechowski <mail@dailysh.it>

## Overview

This project exposes the absurdity of JavaScript wheel-reinvention and demonstrates the path to enlightened web development through semantic markup and progressive enhancement.

---

## Native HTML Solutions

### Priority 1: Core UI Patterns

The most commonly reinvented patterns that HTML already solves perfectly.

#### Modal Dialogs
- **JS Problem**: Focus trapping, ESC handling, backdrop clicks, memory leaks, z-index wars
- **HTML Solution**: `<dialog>` with `.showModal()` and `.close()`
- **Features**: Automatic focus management, ESC to close, backdrop via `::backdrop`, form integration with `method="dialog"`

#### Collapsible Content & Accordions
- **JS Problem**: Complex event handling, manual ARIA, broken keyboard navigation
- **HTML Solution**: `<details>` and `<summary>`
- **Features**: Built-in toggle, exclusive groups via `name` attribute, keyboard accessible, screen reader support

#### Form Validation
- **JS Problem**: Custom regex, manual error display, inconsistent UX across browsers
- **HTML Solution**: HTML5 constraint validation API
- **Features**: `required`, `pattern`, `minlength/maxlength`, `min/max`, `type="email|url|tel"`, `:valid/:invalid` CSS, `setCustomValidity()`

#### Autocomplete & Search
- **JS Problem**: Custom dropdowns, keyboard navigation bugs, focus management
- **HTML Solution**: `<input>` with `<datalist>`
- **Features**: Native OS integration, keyboard navigation, fuzzy matching, works with any input type

#### Progress Indicators
- **JS Problem**: Manual width calculations, custom ARIA updates, animation jank
- **HTML Solution**: `<progress>` for tasks, `<meter>` for measurements
- **Features**: Semantic meaning, automatic screen reader announcements, indeterminate state, CSS styling via `::-webkit-progress-bar`

---

### Priority 2: Form & Input Elements

Native inputs that replace entire JavaScript libraries.

#### Date & Time Pickers
- **JS Problem**: Massive libraries (jQuery UI, Flatpickr), mobile UX issues, localization nightmares
- **HTML Solution**: `type="date|time|datetime-local|month|week"`
- **Features**: OS-native UI, touch-optimized, `min/max` constraints, automatic localization

#### Range Sliders
- **JS Problem**: Custom drag handling, touch support, visual feedback
- **HTML Solution**: `type="range"`
- **Features**: `min/max/step`, keyboard control, `list` for tick marks via datalist, CSS styling

#### Color Pickers
- **JS Problem**: Complex color space math, custom palettes, touch handling
- **HTML Solution**: `type="color"`
- **Features**: OS-native picker, returns hex value, eyedropper tool (on supported browsers)

#### File Uploads
- **JS Problem**: Drag-drop zones, file type validation, preview generation
- **HTML Solution**: `type="file"` with `accept` and `multiple`
- **Features**: MIME type filtering, camera/capture on mobile, form integration

#### Output Display
- **JS Problem**: Manual DOM updates for calculated values
- **HTML Solution**: `<output>` element
- **Features**: Semantic calculation result, `for` attribute links to inputs, form association

#### Rich Text Editing
- **JS Problem**: Complex editor libraries (Quill, TinyMCE, CKEditor)
- **HTML Solution**: `contenteditable` attribute
- **Features**: Native editing, `execCommand()` for formatting, `input` events, works on any element

---

### Priority 3: Semantic Structure

Stop using divs for everything. Semantic elements improve SEO, accessibility, and code clarity.

#### Page Layout
- **JS Problem**: Generic div soup with ARIA roles bolted on
- **HTML Solution**: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- **Features**: Implicit ARIA landmarks, screen reader navigation, document outline

#### Content Grouping
- **JS Problem**: Complex image galleries with caption management
- **HTML Solution**: `<figure>` and `<figcaption>`
- **Features**: Semantic association, works for images, code blocks, quotes, diagrams

#### Data Tables
- **JS Problem**: JavaScript table libraries for basic tabular data
- **HTML Solution**: `<table>` with `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<th scope>`
- **Features**: Proper screen reader navigation, sortable via CSS `:nth-child`, responsive with minimal CSS

#### Form Grouping
- **JS Problem**: Custom form sections with manual labeling
- **HTML Solution**: `<fieldset>` and `<legend>`
- **Features**: Visual grouping, semantic association, disabled state propagation to all children

#### Description Lists
- **JS Problem**: Custom key-value displays with divs
- **HTML Solution**: `<dl>`, `<dt>`, `<dd>`
- **Features**: Semantic term-definition pairs, multiple definitions per term, metadata display

---

### Priority 4: Interactive Features

Modern HTML and CSS features that replace JavaScript interactions.

#### Popover & Tooltips
- **JS Problem**: Tippy.js, Floating UI, z-index management, positioning logic
- **HTML Solution**: `popover` attribute with `popovertarget`
- **Features**: Auto-positioning, light dismiss, no JS required, anchor positioning (coming)

#### Scroll Snap
- **JS Problem**: Carousel libraries, swipe handling, momentum physics
- **HTML Solution**: CSS `scroll-snap-type` and `scroll-snap-align`
- **Features**: Native momentum, touch-optimized, keyboard scrollable, works with any layout

#### Lazy Loading
- **JS Problem**: Intersection Observer wrappers, placeholder images
- **HTML Solution**: `loading="lazy"` on `<img>` and `<iframe>`
- **Features**: Browser-managed, viewport-aware, no layout shift with proper dimensions

#### Responsive Images
- **JS Problem**: JavaScript-based responsive image loading
- **HTML Solution**: `<picture>`, `srcset`, `sizes`
- **Features**: Art direction, format selection (WebP/AVIF), resolution switching

#### Anchor Links & Scroll
- **JS Problem**: Smooth scroll libraries, scroll position management
- **HTML Solution**: `id` + `<a href="#id">` with CSS `scroll-behavior: smooth`
- **Features**: Deep linking, browser history, keyboard accessible

#### Disclosure Widgets
- **JS Problem**: FAQ accordions, expandable cards
- **HTML Solution**: `<details open>` with `<summary>`
- **Features**: Initial state control, toggle events, exclusive groups

---

### Priority 5: Accessibility & Enhancement

Native HTML features that improve accessibility without ARIA.

#### Abbreviations
- **JS Problem**: Custom tooltip implementations for acronyms
- **HTML Solution**: `<abbr title="...">`
- **Features**: Browser/OS native tooltip, screen reader expansion

#### Quotations
- **JS Problem**: Styled blockquotes with attribution divs
- **HTML Solution**: `<blockquote cite="">`, `<q>`, `<cite>`
- **Features**: Semantic quotes, automatic quotation marks for `<q>`, citation links

#### Text Highlighting
- **JS Problem**: Custom search highlighting with spans
- **HTML Solution**: `<mark>`
- **Features**: Semantic highlighting, default yellow background, screen reader announcement

#### Time & Dates
- **JS Problem**: Human-readable dates with hidden ISO values
- **HTML Solution**: `<time datetime="...">`
- **Features**: Machine-readable dates, search engine understanding, localization potential

#### Data Attributes
- **JS Problem**: Storing data in hidden inputs or global JS objects
- **HTML Solution**: `data-*` attributes
- **Features**: DOM-accessible via `dataset`, CSS targeting via `[data-*]`, no JS required for basic use

#### Meter vs Progress
- **JS Problem**: Confusing gauges vs loading states
- **HTML Solution**: `<meter>` for measurements, `<progress>` for tasks
- **Features**: `<meter>` has `low/high/optimum`, color changes automatically, semantic distinction

---

### Priority 6: Media & Embedding

Native solutions for media handling.

#### Video & Audio
- **JS Problem**: Custom players (Video.js, Plyr)
- **HTML Solution**: `<video>` and `<audio>` with `controls`
- **Features**: Native controls, `<track>` for captions, `<source>` for formats, poster images

#### Embedded SVG
- **JS Problem**: Icon libraries, SVG sprite management
- **HTML Solution**: Inline `<svg>` or `<img src="*.svg">`
- **Features**: CSS styling for inline SVG, accessibility via `<title>` and `<desc>`, animation with CSS/SMIL

#### Picture-in-Picture
- **JS Problem**: Custom floating video implementations
- **HTML Solution**: `<video>` with `requestPictureInPicture()`
- **Features**: OS-level floating, works while navigating away, minimal JS

#### Responsive iframes
- **JS Problem**: Aspect ratio calculations
- **HTML Solution**: `<iframe>` with CSS `aspect-ratio`
- **Features**: Native aspect ratio, lazy loading, permission policies

---

## CSS-Only Solutions

These patterns often use JavaScript but can be achieved with pure CSS:

| Pattern | CSS Solution |
|---------|--------------|
| Dropdowns | `:focus-within` + sibling selectors |
| Tabs | Radio buttons + `:checked` + adjacent sibling |
| Dark Mode | `prefers-color-scheme` + CSS custom properties |
| Sticky Headers | `position: sticky` |
| Parallax | `background-attachment: fixed` or `scroll-timeline` |
| Animations | `@keyframes` + `transition` |
| Tooltips | `::before/::after` + `:hover/:focus` |
| Hamburger Toggle | Checkbox + `:checked` + label |
| Counters | CSS `counter()` for numbered lists |
| Feature Detection | `@supports` queries |

---

## Key Benefits

- **Zero JavaScript dependencies** for core functionality
- **Built-in accessibility** - ARIA semantics included
- **Cross-browser consistency** - browser-tested implementations
- **SEO-friendly** - semantic markup understood by crawlers
- **Progressive enhancement** - works without JS, enhanced with it
- **Reduced bundle size** - no framework overhead
- **Native keyboard navigation** - Tab, Enter, Space, Escape
- **Screen reader compatibility** - out of the box
- **Mobile optimized** - touch-friendly native controls
- **Future-proof** - platform standards outlast frameworks

---

## Philosophy

> "The best code is no code. The second best code is semantic HTML that leverages decades of browser engineering and accessibility research."

Stop fighting the platform. HTML already solved these problems. Embrace semantic markup and progressive enhancement for a better, more accessible web.

---

## Resources

- [Code Crispies](https://codecrispi.es/) - Interactive HTML/CSS learning platform
- [MDN Web Docs](https://developer.mozilla.org/) - Definitive HTML reference
- [Can I Use](https://caniuse.com/) - Browser support tables
- [The HTML Spec](https://html.spec.whatwg.org/) - Living standard

---

## Getting Started

```bash
npm start
```

Serves the demo on `http://localhost:1312`

---

## The Choice

- Continue fighting the platform with complex JavaScript implementations
- **Or embrace the zen of semantic HTML and progressive enhancement**

The web platform is your friend. Stop reinventing the wheel.
