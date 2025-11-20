# Modern Portfolio Website

A stunning, modern personal portfolio website built with Next.js 15, featuring smooth animations, dark mode, and a clean, minimalistic design inspired by antigravity.google.

![Portfolio Preview](https://via.placeholder.com/1200x600/667eea/ffffff?text=Modern+Portfolio)

## ✨ Features

- **🎨 Modern Design**: Clean, minimalistic interface with 2025 aesthetic
- **🌓 Dark Mode**: Seamless light/dark theme toggle with persistent preferences
- **✨ Smooth Animations**: Scroll-triggered animations using Framer Motion
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop
- **⚡ Performance**: Built with Next.js 15 for optimal speed and SEO
- **♿ Accessible**: WCAG compliant with keyboard navigation and screen reader support
- **🎯 SEO Optimized**: Meta tags, Open Graph, and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm installed
- A code editor (VS Code recommended)

### Installation

1. **Clone or download this repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### 1. Personal Information

Update your personal details in the following files:

#### **Hero Section** (`components/Hero.tsx`)
```typescript
// Line 53-54: Update your name
<span className="gradient-text">Your Name</span>
```

#### **About Section** (`components/About.tsx`)
- Replace the emoji placeholder (line 52) with your photo
- Update bio text (lines 72-82)
- Modify skills (lines 16-21)

#### **Footer** (`components/Footer.tsx`)
- Update name, email, phone, and location (lines 14, 47-49)

### 2. Projects

Edit `components/Projects.tsx` (lines 13-48) to add your projects:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Brief description of your project",
    tags: ["Tech1", "Tech2", "Tech3"],
    gradient: "from-blue-500 to-purple-600",
  },
  // Add more projects...
];
```

**To add project images:**
1. Place images in the `public/projects/` folder
2. Update the project card to use your images instead of the gradient placeholder

### 3. Services

Modify `components/Services.tsx` (lines 12-35) to reflect your services:

```typescript
const services = [
  {
    icon: Code2, // Choose from lucide-react icons
    title: "Your Service",
    description: "Service description",
    gradient: "from-blue-500 to-cyan-500",
  },
  // Add more services...
];
```

### 4. Testimonials

Update `components/Testimonials.tsx` (lines 12-35) with real client testimonials:

```typescript
const testimonials = [
  {
    name: "Client Name",
    role: "Position, Company",
    content: "Testimonial text",
    avatar: "👤", // Replace with image path
  },
  // Add more testimonials...
];
```

### 5. Social Links

Edit `components/Contact.tsx` (lines 39-44) to add your social media:

```typescript
const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  // Add more links...
];
```

### 6. Colors & Theme

Customize colors in `app/globals.css` (lines 3-26):

```css
:root {
  --primary: #667eea;        /* Main accent color */
  --primary-dark: #764ba2;   /* Secondary accent */
  --accent: #f472b6;         /* Highlight color */
  /* ... more colors */
}
```

### 7. SEO & Metadata

Update `app/layout.tsx` (lines 12-21):

```typescript
export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description: "Your custom description",
  keywords: ["your", "keywords"],
  authors: [{ name: "Your Name" }],
  // ... more metadata
};
```

## 🎨 Adding Images

### Profile Photo
1. Add your photo to `public/images/profile.jpg`
2. Update `components/About.tsx` to use the image:
   ```typescript
   <Image src="/images/profile.jpg" alt="Your Name" fill />
   ```

### Project Thumbnails
1. Add project images to `public/projects/`
2. Update each project in `components/Projects.tsx`:
   ```typescript
   <Image src="/projects/project-1.jpg" alt="Project Name" fill />
   ```

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repository

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   "scripts": {
     "deploy": "next build && next export && gh-pages -d out"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles and theme variables
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects showcase
│   ├── Services.tsx        # Services offered
│   ├── Testimonials.tsx    # Client testimonials
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   ├── ThemeToggle.tsx     # Dark mode toggle
│   └── ThemeProvider.tsx   # Theme context provider
├── public/                 # Static assets
└── README.md              # This file
```

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 💡 Tips

- **Performance**: Use WebP images for better performance
- **Accessibility**: Always add alt text to images
- **SEO**: Update meta tags for each page
- **Analytics**: Add Google Analytics or Plausible for tracking
- **Forms**: Connect the contact form to a service like Formspree or EmailJS

## 📞 Support

If you have questions or need help customizing your portfolio:
- Open an issue on GitHub
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review the [Tailwind CSS docs](https://tailwindcss.com/docs)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
