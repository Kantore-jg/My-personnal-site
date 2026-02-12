<template>
  <section id="education" class="section section-alt">
    <div class="container">
      <div class="section-header text-center fade-in">
        <h2>Education</h2>
        <p class="section-subtitle">My academic background and qualifications</p>
      </div>
      
      <div class="education-grid grid-2">
        <div 
          v-for="(edu, index) in education" 
          :key="index"
          class="education-card card"
          :class="getAnimationClass(index)"
        >
          <div class="education-icon">
            <div class="icon-wrapper">
              <span class="icon-emoji">{{ edu.icon }}</span>
            </div>
          </div>
          
          <div class="education-content">
            <div class="education-header">
              <h3>{{ edu.institution }}</h3>
              <span class="education-period">{{ edu.period }}</span>
            </div>
            
            <div class="education-degree">
              <h4>{{ edu.degree }}</h4>
              <p class="education-location">{{ edu.location }}</p>
            </div>
            
            <div class="education-achievements" v-if="edu.achievements">
              <h5>Key Achievements</h5>
              <ul>
                <li v-for="achievement in edu.achievements" :key="achievement">{{ achievement }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Education',
  data() {
    return {
      education: [
        {
          institution: 'Universite du Lac Tanganyika',
          degree: 'Bachelor in Software Engineering',
          period: '2023 - 2025',
          location: 'Bujumbura, Burundi',
          icon: '🎓',
          achievements: [
            'Focus on modern software development practices',
            'Specialized in web technologies and AI',
            'Active participant in tech competitions'
          ]
        },
        {
          institution: 'ETS Kamenge de Bujumbura',
          degree: 'High School Diploma in Information Technology',
          period: '2019 - 2022',
          location: 'Bujumbura, Burundi',
          icon: '🏫',
          achievements: [
            'Excellence in programming and computer science',
            'Led IT club activities',
            'Developed first web applications'
          ]
        }
      ]
    }
  },
  methods: {
    getAnimationClass(index) {
      const classes = ['fade-in', 'slide-in-left', 'slide-in-right'];
      return classes[index % classes.length];
    }
  }
}
</script>

<style scoped>
.education-grid {
  gap: 2rem;
}

.education-card {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.education-card:hover {
  transform: translateY(-4px);
}

.education-icon {
  flex-shrink: 0;
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
}

.icon-emoji {
  font-size: 1.5rem;
  filter: brightness(0) invert(1);
}

.education-content {
  flex: 1;
  text-align: left;
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.education-header h3 {
  margin-bottom: 0;
  color: var(--primary-color);
  font-size: 1.25rem;
}

.education-period {
  background-color: var(--bg-tertiary);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid var(--border-color);
}

.education-degree h4 {
  margin-bottom: 0.25rem;
  color: var(--text-primary);
  font-size: 1.125rem;
}

.education-location {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.education-achievements h5 {
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  font-size: 1rem;
}

.education-achievements ul {
  list-style: none;
  padding: 0;
}

.education-achievements li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.education-achievements li::before {
  content: '🏆';
  position: absolute;
  left: 0;
}

@media (max-width: 768px) {
  .education-card {
    flex-direction: column;
    text-align: center;
  }
  
  .education-content {
    text-align: center;
  }
  
  .education-header {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
</style>
