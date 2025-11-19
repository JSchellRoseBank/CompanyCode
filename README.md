# Grim Reaper & Co – Funeral Services Website

## Student Infomation

Name: Joshua Schell
Student ID: ST10486426

## Project Overview

Grim Reaper & Co is a Cape Town–based funeral services provider branching into the digital market to make funeral planning easier, more accessible, and more compassionate. The website will serve as a one-stop platform where grieving families can arrange services, request quotes, and access guidance — all with just a few clicks.

The site will provide:

-   Options for handling the body with dignity
-   Catering services for gatherings
-   Funeral vehicles and transport arrangements
-   Complete funeral planning support
-   Memorial products such as urns, headstones, and keepsakes

---

## Website Goals and Objectives

**Primary Goals**

-   Provide grieving families with a simple and respectful way to plan funerals online
-   Streamline the quotation and booking process
-   Showcase available products and services
-   Establish a trusted digital presence for Grim Reaper & Co

**Secondary Goals**

-   Increase brand awareness and online visibility
-   Improve customer engagement with contact forms and FAQs
-   Provide educational resources for those dealing with grief
-   Allow for future expansion (online payments, live chat support, digital memorials)

---

## Key Features and Functionality

-   **Homepage** – Overview, highlights of services & products, About Us intro, quick quote button
-   **Services Section** – Body handling, planning, transport, catering, flowers, memorials
-   **Products Section** – Caskets, urns, headstones, floral tributes, keepsakes, candles, digital memorials
-   **Get a Quote Page** – Interactive form for selecting services and products, with instant calculation
-   **Contact Page** – Contact form, office location, hours, and urgent support details
-   **FAQs Page** – Common questions answered in a compassionate tone
-   **Resources (Future)** – Guidance articles and grief support

---

## Timeline and Milestones

| Phase      | Tasks                                                   | Estimated Timeframe |
| ---------- | ------------------------------------------------------- | ------------------- |
| **Week 1** | Requirements gathering, content preparation, wireframes | 5 days              |
| **Week 2** | HTML structure, navigation, homepage layout             | 5 days              |
| **Week 3** | CSS styling, responsive design                          | 5 days              |
| **Week 4** | JavaScript functionality for forms and quote calculator | 5 days              |
| **Week 5** | Testing across devices, debugging, content finalization | 5 days              |
| **Week 6** | Final review, hosting setup, launch                     | 5 days              |

---

## Part 1 Details

This repository currently contains **Part 1** of the project.  
Future updates will include **Part 2** and **Part 3** with additional functionality and refinements.

---

## Site Map

### 1. Home (/index.html)

-   **Hero Section** (Heading + Paragraph)
-   **About Us** (Intro & Image/Logo)
-   **Services Overview** (list of main services)
-   **Products Overview** (list of main products)
-   **Footer** (About Us, Quick Links, Contact Info, Copyright)

### 2. Get a Quote (/quote.html)

-   Service Type (checkboxes)
-   Product Selection (checkboxes)
-   Additional Options (checkboxes)
-   Button: _Calculate Quote_

### 3. Contact (/contact.html)

-   Contact Form (Full Name, Email, Phone, Subject, Message)
-   Company Details (Office Address, Phone, Email)
-   CTA Banner (_24/7 Assistance_)

### 4. FAQs (/faqs.html)

-   Requesting a Quote
-   Services Outside Cape Town
-   Funeral Package Details
-   Cremation Services
-   Arrangement Speed
-   Customisation Options
-   Grief Support
-   Service Guidance
-   Payment Options
-   After Hours Support

---

### 🔗 Global Navigation (appears on all pages)

-   Home
-   About Us _(scrolls to section on Home)_
-   Services _(scrolls to section on Home)_
-   Products _(scrolls to section on Home)_
-   Get a Quote
-   Contact
-   FAQs

---

## Change Log

**v1.0 – Major Feature Update & Enhancements**

-   **Interactive Elements:**
    -   Added accordion functionality for Services & Products sections with single-open behavior
    -   Implemented modal dialogs for detailed service/product information with comprehensive pricing
    -   Integrated Leaflet.js interactive map showing Cape Town location with custom markers
    -   Added scroll animations and CSS transitions throughout the site
    -   Removed hero section animations for cleaner appearance
-   **SEO Optimization:**
    -   Added comprehensive meta tags (description, keywords, Open Graph, Twitter Card)
    -   Implemented JSON-LD structured data for FuneralHome schema
    -   Created robots.txt file for search engine crawlers
    -   Created sitemap.xml for all pages
    -   Added canonical URLs and favicon references
    -   Updated meta tags across all HTML pages (quote.html, faqs.html)
-   **Performance Improvements:**
    -   Implemented lazy loading for images using Intersection Observer API
    -   Added image optimization with loading states and placeholders
    -   Set fetchpriority="high" for above-the-fold images
    -   Added width/height attributes to prevent layout shift
-   **Forms & Validation:**
    -   Created enquiry.html page with multi-step form and conditional logic
    -   Enhanced contact.html with comprehensive validation
    -   Implemented formValidation.js for client-side validation
    -   Added real-time character counters and error messages
    -   Implemented mailto: functionality for contact form
    -   Added visual feedback (success/error states, loading spinners)
-   **Quote Page Enhancements:**
    -   Added comprehensive pricing section with 14 detailed pricing cards
    -   Completely redesigned quote form with 6 organized sections
    -   Added contact information collection (name, phone, email, urgency)
    -   Implemented card-style checkboxes with hover effects
    -   Added budget range selector and guest count input
    -   Included contact preference selection (phone, email, WhatsApp)
    -   Added numbered section badges and gradient submit button
    -   Displayed pricing inline with each service/product option
-   **Styling & UI/UX:**
    -   Fixed navbar z-index to always show above other elements
    -   Enhanced accordion styles with smooth transitions
    -   Added modal overlay with fade-in animations
    -   Styled map section with location cards and custom markers
    -   Improved form styling with better spacing and visual hierarchy
    -   Added responsive grid layouts for pricing and form sections
    -   Enhanced button styles with hover effects and gradients
-   **Code Organization:**
    -   Created modular JavaScript files (accordion.js, modal.js, map.js, animations.js, lazyload.js)
    -   Organized CSS with separate files for different page sections
    -   Removed unused features (gallery/lightbox, search, filter/sort)
    -   Cleaned up codebase for better maintainability

**v0.5**

-   Updated responsive media queries and 1 more

**v0.4**

-   Added media queries for mobile and table
-   Resized and checked responsiveness

**v0.3 - Fixed Visual Bugs and Added more styles**

-   Fixed Spacing on index page for services and products
-   Added gradiant to navbar and footer
-   Removed colour on titles for products
-   Added icons for services and products
-   Fixed line issue in footer

**v0.2 – Added Styles**

-   Made a global container and applied to all pages
-   Added Buttons to hero section
-   Added css to index page
-   Added css to quote page
-   Added css to contact page
-   Added css to faq page
-   Added css to navbar
-   Added css to footer

**v0.1 – Initial Project Setup**

-   Created project overview
-   Defined goals and objectives
-   Added services and products content
-   Added About Us and FAQ content
-   Drafted project timeline and milestones
-   Finalized sitemap structure (4-page layout)
-   Updated navigation to include in-page links for About, Services, Products

---

## About Grim Reaper & Co

At Grim Reaper & Co, we understand that planning a funeral is one of life’s most difficult moments. Based in Cape Town, we provide compassionate and professional services designed to ease the burden on grieving families. From handling the body with dignity to arranging catering, vehicles, and complete funeral planning, our team is here to take care of every detail.

With just a few clicks, we offer quick and transparent quotes, giving you more time to focus on honouring the memory of your loved one. Our mission is simple — to make the process as seamless and supportive as possible, ensuring every farewell is treated with the respect it deserves.

---

## References

• Peninsula Funerals, PF, 2025. Peninsula Funerals. Available at: [https://peninsulafunerals.co.za/](https://peninsulafunerals.co.za/) (Accessed: 27 August 2025)
• AVBOB. (2025). Funeral Services. Available at: [https://www.avbob.co.za/funeral-services](https://www.avbob.co.za/funeral-services) (27 August 2025)
• Quest Funeral Services, QFS (2025). Our Services. Available at: [https://www.questfuneralservices.co.za/our-services](https://www.questfuneralservices.co.za/our-services) (Accessed: 27 August 2025)
• Royal Funerals SA, RFSA, (2025). About – Royal Funerals. Available at: [https://www.royalfuneralssa.co.za/about/](https://www.royalfuneralssa.co.za/about/) (Accessed: 27 August 2025)
• Google Search Central, GSC, (2025). Search Engine Optimization (SEO) Starter Guide. Available at: [https://developers.google.com/search/docs/fundamentals/seo-starter-guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) (Accessed: 15 November 2025)
• MDN Web Docs, MDNWD, (2025). HTML performance optimization. Available at: [https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/HTML) (Accessed: 16 November 2025)
• MDN Web Docs, MDNWD, (2025). CSS performance optimization. Available at: [https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/CSS) (Accessed: 16 November 2025)
• MDN Web Docs, MDNWD, (2025). JavaScript performance optimization. Available at: [https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/JavaScript) (Accessed: 16 November 2025)


