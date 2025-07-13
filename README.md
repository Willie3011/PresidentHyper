# Icy Butterfly Website - Developer Deliverables

**Project Goal**: Build a responsive, brand-aligned website for Icy Butterfly (luxury fabric store) within 2 days.  
**Tech Stack**: HTML, CSS, JavaScript (vanilla), Bootstrap (optional), Formspree for forms.  

---

## ✅ **Mandatory Requirements**  
### **1. Pages to Complete**  
- **`index.html`** (Landing Page):  
  - [ ] Navbar (links to all pages, mobile-friendly).  
  - [ ] Hero section with CTA button ("View Catalogue" → `products.html`).  
  - [ ] "About the Team" section (placeholder images + text).  
  - [ ] Footer (copyright + nav links).  

- **`products.html`** (Catalogue):  
  - [ ] Grid of 6-8 product cards (image + title + "Inquire" link to `contact.html`).  

- **`contact.html`**:  
  - [ ] Functional contact form (Formspree or `mailto:` fallback).  
  - [ ] Map placeholder (image or embedded Google Maps).  

- **`tos.html`**:  
  - [ ] Basic terms template (copy from [Termly.io](https://termly.io/)).  

### **2. Technical Requirements**  
- [ ] **Mobile-responsive** (test on Chrome DevTools).  
- [ ] **Brand colors**: Blue (`#0d6efd` or client-approved shade).  
- [ ] **No broken links** (verify all navigation + CTAs).  
- [ ] **Optimized images** (compressed placeholders).  

### **3. Deployment**  
- [ ] Host on **Netlify/Vercel** (connect GitHub repo).  
- [ ] Live demo URL shared with client.  

---

## 📁 **Repository Structure**  
```plaintext
/src  
  ├── index.html          # Landing page  
  ├── products.html       # Product catalogue  
  ├── contact.html        # Contact form  
  ├── tos.html            # Terms of Service  
  ├── css/                # Styles  
  │   └── styles.css  
  ├── js/                 # Scripts (if needed)  
  │   └── scripts.js  
  └── images/             # Placeholder assets  
      ├── fabric-placeholder.jpg  
      └── team-placeholder.jpg  
