<template>
  <section id="skills" class="section section-alt">
    <div class="container">
      <div class="section-header text-center fade-in">
        <h2>Skills & Expertise</h2>
        <p class="section-subtitle">Technologies and areas I specialize in</p>
      </div>
      
      <div class="skills-grid grid-3">
        <div 
          v-for="(skill, index) in skills" 
          :key="index"
          class="skill-card card"
          :class="getAnimationClass(index)"
        >
          <div class="skill-icon">
            <div class="icon-wrapper">
              <span class="icon-emoji">{{ skill.icon }}</span>
            </div>
          </div>
          
          <div class="skill-content">
            <h3>{{ skill.title }}</h3>
            <p>{{ skill.description }}</p>
            
            <div class="skill-technologies">
              <span 
                v-for="tech in skill.technologies" 
                :key="tech"
                class="tech-badge"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="additional-skills mt-8">
        <div class="skills-overview card">
          <h3>Technical Proficiency</h3>
          <div class="proficiency-grid grid-2">
            <div 
              v-for="category in skillCategories" 
              :key="category.name"
              class="proficiency-item"
            >
              <div class="proficiency-header">
                <h4>{{ category.name }}</h4>
                <span class="proficiency-level">{{ category.level }}</span>
              </div>
              <div class="proficiency-bar">
                <div 
                  class="proficiency-fill"
                  :style="{ width: category.percentage + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
        {
          icon: '💻',
          title: 'Web Development',
          description: 'Building modern, responsive web applications with cutting-edge technologies and best practices.',
          technologies: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3', 'PHP', 'Laravel']
        },
        {
          icon: '🤖',
          title: 'AI & Machine Learning',
          description: 'Creating intelligent solutions that can learn, adapt, and make decisions based on data patterns.',
          technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'NLP', 'Data Analysis']
        },
        {
          icon: '📊',
          title: 'Data Mining',
          description: 'Extracting valuable insights and patterns from large datasets to drive informed decisions.',
          technologies: ['Python', 'Pandas', 'NumPy', 'Data Visualization', 'Statistics']
        },
        {
          icon: '🗄️',
          title: 'Database Management',
          description: 'Designing and optimizing database systems for efficient data storage and retrieval.',
          technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQL']
        },
        {
          icon: '☁️',
          title: 'Cloud & DevOps',
          description: 'Deploying and managing applications in cloud environments with modern DevOps practices.',
          technologies: ['Docker', 'Git', 'CI/CD', 'Linux', 'AWS Basics']
        },
        {
          icon: '🎨',
          title: 'UI/UX Design',
          description: 'Creating intuitive and visually appealing user interfaces with great user experience.',
          technologies: ['Figma', 'Responsive Design', 'CSS Animations', 'User Research']
        }
      ],
      skillCategories: [
        { name: 'Frontend Development', level: 'Advanced', percentage: 85 },
        { name: 'Backend Development', level: 'Intermediate', percentage: 75 },
        { name: 'Python Programming', level: 'Advanced', percentage: 80 },
        { name: 'Data Analysis', level: 'Intermediate', percentage: 70 },
        { name: 'Database Design', level: 'Intermediate', percentage: 75 },
        { name: 'AI/ML Concepts', level: 'Intermediate', percentage: 65 }
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
.skills-grid {
  margin-bottom: 3rem;
}

.skill-card {
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
}

.skill-card:hover {
  transform: translateY(-8px);
}

.skill-icon {
  margin-bottom: 1.5rem;
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
}

.icon-emoji {
  font-size: 2rem;
  filter: brightness(0) invert(1);
}

.skill-content h3 {
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.skill-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.skill-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.tech-badge {
  background-color: var(--bg-tertiary);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
}

.skills-overview {
  text-align: left;
}

.skills-overview h3 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.proficiency-item {
  margin-bottom: 1.5rem;
}

.proficiency-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.proficiency-header h4 {
  margin-bottom: 0;
  color: var(--text-primary);
  font-size: 1rem;
}

.proficiency-level {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.875rem;
}

.proficiency-bar {
  width: 100%;
  height: 8px;
  background-color: var(--bg-tertiary);
  border-radius: 4px;
  overflow: hidden;
}

.proficiency-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 4px;
  transition: width 1s ease;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .icon-wrapper {
    width: 60px;
    height: 60px;
  }
  
  .icon-emoji {
    font-size: 1.5rem;
  }
}
</style>
