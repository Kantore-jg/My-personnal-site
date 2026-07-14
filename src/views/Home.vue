<template>
  <header class="top-hero">
    <img src="/images/cloud.png" alt="" class="cloud cloud-top">
    <img src="/images/cloud.png" alt="" class="cloud cloud-bottom">

    <div class="hero-content" style="position: relative; z-index: 3;">
      <img 
        src="/images/foto.png" 
        alt="Kantore Jean Gildas" 
        style="width:138px; height:138px; border-radius:9999px; object-fit:cover; border:5px solid white; box-shadow:0 8px 25px rgba(0,0,0,0.15); margin-bottom:1rem;"
      >

      <h1>Kantore Jean Gildas</h1>
      <h2 class="subtitle" style="color: rgb(14, 3, 3); font-size: 1.25rem; font-weight: 500;">
        IT &amp; Developer,<br>Digital Marketing senior
      </h2>

      <div class="hero-actions">
        <router-link to="/about" class="btn btn-primary">Learn more about me</router-link>
        <a :href="profile.resumeUrl" download class="btn btn-secondary">Download CV</a>
      </div>

      <p style="margin-top: 2.5rem; font-size: 0.95rem;">
        <router-link to="/look" style="color:#0a0e14; font-weight:500;">
          Want to see what I look like? →
        </router-link>
      </p>
    </div>

    <img src="/images/mountain.png" alt="" class="mountain">
  </header>

  <main>
    <div class="container section">
      <div class="section-header">
        <h2>Professional Summary</h2>
      </div>
      <div style="max-width: 720px; margin: 0 auto; text-align: center;">
        <p>{{ profile.summary }}</p>
      </div>
    </div>

    <div class="container section section-alt">
      <div class="section-header">
        <h2>Current Focus</h2>
      </div>
      <div style="max-width: 860px; margin: 0 auto;">
        <div class="card">
          <h3>Ikinyamakuru Project</h3>
          <p class="meta">Currently in active development</p>
          <p>A new digital project focused on news and information management in Burundi.</p>
          <router-link to="/projects" style="font-weight:600; display:inline-block; margin-top:0.75rem;">
            See project details →
          </router-link>
        </div>
      </div>
    </div>

    <div class="container section">
      <div style="text-align:center; margin-bottom:1.5rem;">
        <h2>Quick Links</h2>
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:1rem; justify-content:center;">
        <router-link to="/experience" class="btn btn-secondary">Professional Experience</router-link>
        <router-link to="/education" class="btn btn-secondary">Education &amp; Training</router-link>
        <router-link to="/contact" class="btn btn-secondary">Get in Touch</router-link>
        <router-link to="/look" class="btn btn-secondary">My Evolution</router-link>
      </div>
    </div>
  </main>
</template>

<script>
import { PROFILE } from '../data.js'

export default {
  name: 'Home',
  data() {
    return {
      profile: PROFILE
    }
  }
}
</script>