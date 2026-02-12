<template>
  <section id="experience" class="section">
    <div class="container">
      <div class="section-header text-center fade-in">
        <h2>Professional Experience</h2>
        <p class="section-subtitle">My journey in the tech industry</p>
      </div>
      
      <div class="experience-timeline">
        <div 
          v-for="(job, index) in experiences" 
          :key="index"
          class="timeline-item"
          :class="index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'"
        >
          <div class="timeline-content card">
            <div class="timeline-header">
              <div class="timeline-company">
                <h3>{{ job.company }}</h3>
                <span class="timeline-period">{{ job.period }}</span>
              </div>
              <div class="timeline-position">
                <h4>{{ job.position }}</h4>
                <span class="timeline-location">{{ job.location }}</span>
              </div>
            </div>
            
            <div class="timeline-description">
              <p>{{ job.description }}</p>
            </div>
            
            <div class="timeline-skills">
              <span 
                v-for="skill in job.skills" 
                :key="skill"
                class="skill-tag"
              >
                {{ skill }}
              </span>
            </div>
          </div>
          
          <div class="timeline-dot"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      experiences: [
        {
          company: 'Advanced IT and Research Burundi',
          position: 'FullStack Developer & IT Technician',
          period: '2024 - Present',
          location: 'Bujumbura, Burundi',
          description: 'Currently working on innovative digital solutions and web applications. Leading the development of the E~Menage project for digital household management in Bujumbura.',
          skills: ['Vue.js', 'Python', 'Web Development', 'AI Integration', 'Data Mining']
        },
        {
          company: 'Freelance Projects',
          position: 'FullStack Developer',
          period: '2023 - 2024',
          location: 'Remote',
          description: 'Developed various web applications and provided IT consulting services for small businesses. Focused on creating scalable and user-friendly solutions.',
          skills: ['JavaScript', 'PHP', 'Laravel', 'MySQL', 'REST APIs']
        },
        {
          company: 'IT Support Intern',
          position: 'IT Technician',
          period: '2022 - 2023',
          location: 'Bujumbura, Burundi',
          description: 'Provided technical support and maintenance for computer systems. Assisted in network administration and troubleshooting.',
          skills: ['Technical Support', 'Network Administration', 'System Maintenance', 'Customer Service']
        }
      ]
    }
  }
}
</script>

<style scoped>
.experience-timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--primary-color), var(--accent-color));
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
}

.timeline-item:nth-child(odd) {
  justify-content: flex-end;
}

.timeline-content {
  width: calc(50% - 2rem);
  position: relative;
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-right: 2rem;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: 2rem;
}

.timeline-header {
  margin-bottom: 1rem;
}

.timeline-company h3 {
  color: var(--primary-color);
  margin-bottom: 0.25rem;
  font-size: 1.25rem;
}

.timeline-period {
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
}

.timeline-position h4 {
  color: var(--text-primary);
  margin-bottom: 0.25rem;
  font-size: 1.125rem;
}

.timeline-location {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.timeline-description {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.timeline-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background-color: var(--bg-tertiary);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
}

.timeline-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background: var(--primary-color);
  border: 3px solid var(--bg-primary);
  border-radius: 50%;
  box-shadow: 0 0 0 3px var(--border-color);
  z-index: 1;
}

@media (max-width: 768px) {
  .experience-timeline::before {
    left: 2rem;
  }
  
  .timeline-item {
    justify-content: flex-start;
    margin-bottom: 2rem;
  }
  
  .timeline-content {
    width: calc(100% - 4rem);
    margin-left: 4rem !important;
    margin-right: 0 !important;
  }
  
  .timeline-dot {
    left: 2rem;
  }
  
  .timeline-header {
    text-align: left;
  }
}
</style>
