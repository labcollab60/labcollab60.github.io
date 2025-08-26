# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a static website for "The Lab Collab" (William Bell School #60 Parent Teacher Collaborative) designed for GitHub Pages hosting. It's built with vanilla HTML and CSS without any build tools or dependencies.

## Architecture
- **Static HTML/CSS**: No JavaScript framework or build process
- **GitHub Pages Ready**: Designed to be served directly as static files
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px
- **Google Fonts**: External dependency on Poppins font family

## File Structure
- `index.html` - About page (main landing page)
- `meetings.html`, `fundraising.html`, `contactus.html` - Placeholder pages with "Coming Soon" content
- `styles.css` - Single shared stylesheet for all pages
- All pages share identical header, navigation, and footer structure

## Key Design Patterns
- **Color Scheme**: Primary color #001a57 (dark blue), white background
- **Navigation**: Hamburger menu for mobile, horizontal nav for desktop
- **Container Width**: 85% max-width with 1200px limit
- **Font Hierarchy**: Poppins font with weights 300-700

## Maintenance Guidelines
- When replacing placeholder content, maintain the existing HTML structure (header, nav, main container, footer)
- Keep all styling in `styles.css` - avoid inline styles
- Use semantic HTML5 elements
- Images should be placed in an `images/` folder when added