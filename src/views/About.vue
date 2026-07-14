<template>
  <div class="container section">
    <div class="section-header">
      <h1>About Me</h1>
      <p class="text-muted">{{ profile.location }}</p>
    </div>

    <div style="max-width: 760px; margin: 0 auto;">
      <div style="text-align:center; margin-bottom: 2rem;">
        <img 
          src="/images/foto.png" 
          alt="Kantore Jean Gildas" 
          style="width:220px; height:220px; border-radius:9999px; object-fit:cover; border:8px solid #f7fafc;"
        >
      </div>

      <p style="font-size:1.1rem; line-height:1.75;">
        I am an IT,Developer, and Digital Marketing Senior
      </p>

      <p>
        I am passionate about using technology to solve real problems 
      </p>

      <hr>

      <h3 style="margin-bottom:0.6rem;">Core Strengths</h3>
      <div class="skills-list" style="margin-bottom:2rem;">
        <span v-for="skill in coreStrengths" :key="skill">{{ skill }}</span>
      </div>

      <h3>Languages</h3>
      <p>{{ profile.languages.join(' • ') }}</p>

      <div style="margin-top:2.5rem;">
        <router-link to="/experience" class="btn btn-primary">See my experience →</router-link>
        <router-link to="/look" class="btn btn-secondary" style="margin-left:0.6rem;">My evolution</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { PROFILE } from '../data.js'

export default {
  name: 'About',
  data() {
    return {
      profile: PROFILE,
      coreStrengths: ['Web Development', 'Digital Marketing', 'Social Media Management', 'Python & Data Analysis']
    }
  }
}
</script>