<template>
  <div class="container section">
    <div class="section-header">
      <h1>Featured Projects</h1>
    </div>

    <div class="project-grid" style="max-width:1100px; margin:0 auto;">
      <div class="card" v-for="(project, index) in projects" :key="index">
        <h3>{{ project.title }}</h3>
        <div class="meta">{{ project.status }}</div>
        <p>{{ project.description }}</p>
        
        <div class="project-tech" style="margin: 0.75rem 0;">
          <span class="tag" v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PROJECTS } from '../data.js'

export default {
  name: 'Projects',
  data() {
    return {
      projects: PROJECTS
    }
  }
}
</script>