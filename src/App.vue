<template>
  <div id="app">
    <Navigation />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Education />
    <Courses />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Education from './components/Education.vue'
import Courses from './components/Courses.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Hero,
    About,
    Skills,
    Experience,
    Projects,
    Education,
    Courses,
    Contact,
    Footer
  }
}
</script>

<style>
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --bg-tertiary: #f3f4f6;
  --border-color: #e5e7eb;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--text-primary);
}

h3 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--primary-color);
}

p {
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--secondary-color);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  gap: 0.5rem;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: white;
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background-color: var(--bg-tertiary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background-color: var(--bg-secondary);
  transform: translateY(-1px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section {
  padding: 5rem 0;
}

.section-alt {
  background-color: var(--bg-secondary);
}

.card {
  background-color: var(--bg-primary);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.grid {
  display: grid;
  gap: 2rem;
}

.grid-2 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.flex {
  display: flex;
}

.flex-center {
  align-items: center;
  justify-content: center;
}

.flex-between {
  align-items: center;
  justify-content: space-between;
}

.flex-col {
  flex-direction: column;
}

.gap-4 {
  gap: 1rem;
}

.gap-8 {
  gap: 2rem;
}

.text-center {
  text-align: center;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mt-8 {
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .section {
    padding: 3rem 0;
  }
  
  .card {
    padding: 1.5rem;
  }
  
  .grid {
    gap: 1.5rem;
  }
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.6s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-30px);
  animation: slideInLeft 0.6s ease forwards;
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-right {
  opacity: 0;
  transform: translateX(30px);
  animation: slideInRight 0.6s ease forwards;
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
