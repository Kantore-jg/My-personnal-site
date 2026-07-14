<template>
  <div class="container" style="padding-top: 2.5rem;">
    <div class="look-header">
      <h1>Kantore Jean Gildas</h1>
      <p class="text-muted" style="font-size:1.05rem;">My Evolution — 2019 to Present</p>
    </div>

    <div class="look-container">
      <div class="look-entry" v-for="entry in timeline" :key="entry.year">
        <div class="year">{{ entry.year }}</div>
        <div class="content">
          <img :src="entry.image" :alt="'Kantore in ' + entry.year">
          <div class="look-caption">{{ entry.caption }}</div>
        </div>
      </div>
    </div>

    <div class="text-center" style="margin: 2.5rem 0 3rem;">
      <router-link to="/" class="btn btn-secondary">← Back to Home</router-link>
      <router-link to="/contact" class="btn btn-primary" style="margin-left:0.75rem;">Let's Connect</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Look',
  data() {
    return {
      timeline: [
        {
          year: '2019',
          image: '/look/2019.png',
          caption: 'Early years. Beginning my journey in technology and personal development in Bujumbura.'
        },
        {
          year: '2022',
          image: '/look/2022.png',
          caption: 'High school years at ETS Kamenge. Strong focus on Information Technology and first programming steps.'
        },
        {
          year: '2023',
          image: '/look/2023.png',
          caption: 'Starting university. Exploring web development and discovering my passion for building digital solutions.'
        },
        {
          year: '2024',
          image: '/look/2024.png',
          caption: 'Growing professionally. Working on real projects and developing skills in web development and digital marketing.'
        },
        {
          year: '2025',
          image: '/look/2025.png',
          caption: 'Advancing in Software Engineering at University of Lake Tanganyika. Taking on leadership roles.'
        },
        {
          year: '2026',
          image: '/look/2026.png',
          caption: 'Present. Working as Web Developer and leading digital transformation projects.'
        },
        {
          year: '',
          image: '/look/where_i_call_home1.png',
          caption: 'Where I call home. Bujumbura and the beautiful landscapes that inspire me every day.'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Small scoped improvements for look page */
.look-entry {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-bottom: 2.25rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 1.75rem;
}
.look-entry:last-child {
  border-bottom: none;
}
.year {
  width: 110px;
  font-weight: 700;
  color: #1e3a5f;
  flex-shrink: 0;
  padding-top: 4px;
  font-size: 1.05rem;
}
.content {
  flex: 1;
}
.content img {
  max-width: 380px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid var(--border);
  margin: 0.5rem 0;
}
.look-caption {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 700px) {
  .look-entry {
    flex-direction: column;
  }
  .year {
    width: auto;
  }
}
</style>