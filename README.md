# Personal-Portfolio
A dynamic and responsive personal portfolio showcasing my projects, skills, and achievements in web development and software engineering. Features interactive design, smooth animations, and a user-friendly interface to highlight creativity, technical expertise, and professional journey effectively.

# Personal Portfolio Website

A modern, responsive personal portfolio showcasing projects, skills, and services. Designed for web developers, cloud enthusiasts, and IoT innovators to highlight their professional journey and connect with potential clients or employers.

## 🚀 Features
- **Responsive Design** — Optimized for desktop, tablet, and mobile devices.
- **Animated Hero Section** — Smooth floating image and typing effect.
- **Skills Progress Bars** — Animated percentage-based skill levels.
- **Services with Modals** — Detailed service descriptions via popup.
- **Download Resume Button** — With loading animation progress.
- **Contact Form** — Integrated with EmailJS for direct email sending.
- **WhatsApp Floating Button** — Quick chat access.
- **Scroll Animations** — Using ScrollReveal for engaging transitions.
- **Sticky Navbar & Active Links** — Smooth navigation experience.

## 🛠️ Tech Stack
- **HTML5** — Semantic markup for structure.
- **CSS3** — Custom styles, animations, responsive grid & flexbox layout.
- **JavaScript (ES6)** — Dynamic interactions, DOM manipulation.
- **Typed.js** — Typing animation in the hero section.
- **ScrollReveal.js** — On-scroll animations.
- **EmailJS** — Email form integration.
- **Boxicons** — Icons for navigation, social links, and services.

## 📂 Project Structure
├── index.html # Main HTML file
├── css/
│ └── styles.css # Stylesheet
├── js/
│ └── script.js # JavaScript functionality
├── images/ # Portfolio images & icons
├── documents/ # Resume and other files


## 📸 Preview Sections
- **Home:** Intro with profile image, typing animation, and social links.
- **About:** Personal bio, education, and technical skills overview.
- **Skills:** Animated skill progress bars.
- **Services:** Four main service categories with details.
- **Contact:** Email form with validation and success/error messages.

## 📧 Contact Form Setup
This project uses **EmailJS** for form submissions.
1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Create a new service and template.
3. Replace the `serviceID`, `templateID`, and `publicKey` in `script.js`:
   ```javascript
   const serviceID = 'your_service_id';
   const templateID = 'your_template_id';
   emailjs.init({
       publicKey: 'your_public_key',
   });
