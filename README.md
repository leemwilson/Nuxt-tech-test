# 🎬 Vue Video App

A Nuxt 3 application to search and explore movies and series using the OMDb API. Includes features like dark mode, live search, fallback images, loading states, and detailed movie/series views.

---

## ✨ Features

✅ Search movies and TV series from the OMDb API  
✅ View detailed information including cast, genre, rating, and plot  
✅ Browse featured content on the homepage  
✅ Dynamic dark/light mode toggle  
✅ Live search with instant results  
✅ Poster fallback for missing images  
✅ Loader animation while fetching data  
✅ Clean, responsive layout with TailwindCSS  
✅ Reusable components (MovieCard, SearchBar, Loader)  
✅ Toast notifications for form validation (Contact page)  
✅ Route-based dynamic detail pages   
✅ Accessible forms with validation feedback


---

## 🚀 Tech Test 1

### 🔧 Prerequisites

- [Node.js](https://nodejs.org/) v16 or later
- [npm](https://www.npmjs.com/)

### 🔑 Notes

- The OMDb API key is already built into the project.
- No additional setup is needed to make API requests.
- Form submission is spoofed for the contact page, no backend required.

### 📦 Installation

```bash
git clone https://github.com/leemwilson/nuxt-tech-test.git
cd nuxt-tech-test
npm install
npm run dev
```

### 🚀 Production Build

To create a production-ready build:

```bash
git clone https://github.com/leemwilson/nuxt-tech-test.git
cd nuxt-tech-test
npm install
npm run build
npm run start
