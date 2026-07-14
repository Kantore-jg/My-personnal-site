<template>
  <div class="container section">
    <div class="section-header">
      <h1>Professional Experience</h1>
      <p class="text-muted">My journey in technology and digital leadership</p>
    </div>

    <div style="max-width: 860px; margin: 0 auto;">
      <div class="card" v-for="(exp, index) in experiences" :key="index">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; flex-wrap:wrap;">
          <div>
            <h3>{{ exp.role }}</h3>
            <div style="font-weight:600; color:#2c5282;">{{ exp.company }}</div>
          </div>
          <div style="text-align:right; font-size:0.9rem; color:#4a5568;">
            {{ exp.period }}<br>
            <span style="font-size:0.85rem;">{{ exp.location }}</span>
          </div>
        </div>
        <p style="margin:1rem 0;">{{ exp.description }}</p>
        <ul style="padding-left:1.1rem; color:#4a5568; font-size:0.95rem;">
          <li v-for="h in exp.highlights" :key="h">{{ h }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { EXPERIENCES } from '../data.js'

export default {
  name: 'Experience',
  data() {
    return {
      experiences: EXPERIENCES
    }
  }
}
</script>