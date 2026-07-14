<template>
  <div class="container section">
    <div class="section-header">
      <h1>Education &amp; Professional Development</h1>
    </div>

    <div style="max-width: 820px; margin: 0 auto;">
      <div class="card" v-for="(edu, i) in education" :key="i">
        <h3>{{ edu.degree }}</h3>
        <div class="meta">{{ edu.institution }} • {{ edu.period }} • {{ edu.location }}</div>
      </div>

      <hr>

      <h2 style="margin-bottom:1.25rem;">Professional Training &amp; Certifications</h2>

      <div class="card" v-for="(cert, i) in certifications" :key="i">
        <h3>{{ cert.name }}</h3>
        <div class="meta">{{ cert.issuer }} • {{ cert.year }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { EDUCATION, CERTIFICATIONS } from '../data.js'

export default {
  name: 'Education',
  data() {
    return {
      education: EDUCATION,
      certifications: CERTIFICATIONS
    }
  }
}
</script>