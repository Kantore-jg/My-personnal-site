<template>
  <div id="app">
    <nav class="nav">
      <div class="container nav-content">
        <router-link to="/" class="nav-logo">Kantore Jean Gildas</router-link>
        
        <ul class="nav-links" :class="{ open: isMenuOpen }" id="nav-links">
          <li><router-link to="/" @click="closeMenu">Home</router-link></li>
          <li><router-link to="/about" @click="closeMenu">About</router-link></li>
          <li><router-link to="/experience" @click="closeMenu">Experience</router-link></li>
          <li><router-link to="/projects" @click="closeMenu">Projects</router-link></li>
          <li><router-link to="/education" @click="closeMenu">Education</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
        </ul>

        <button 
          class="nav-toggle" 
          @click="toggleMenu" 
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>
    </nav>

    <router-view />

    <footer class="footer">
      <div class="container">
        <p>© {{ currentYear }} Kantore Jean Gildas • Bujumbura, Burundi</p>
        <p style="margin-top: 0.3rem; font-size: 0.85rem;">
          <a href="https://github.com/Kantore-jg" target="_blank" rel="noopener noreferrer">GitHub</a> • 
          <a href="https://www.linkedin.com/in/kantore-jean-gildas-94b43a345/" target="_blank" rel="noopener noreferrer">LinkedIn</a> • 
          <a :href="'mailto:' + profile.email">{{ profile.email }}</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { PROFILE } from './data.js'

export default {
  name: 'App',
  data() {
    return {
      isMenuOpen: false,
      profile: PROFILE,
      currentYear: new Date().getFullYear()
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  },
  watch: {
    $route() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style>
/* Ensure router-link active styling matches */
.nav-links a.router-link-active {
  color: var(--primary);
  border-bottom: 2px solid var(--primary);
}
</style>
