<template>
  <section id="courses" class="section">
    <div class="container">
      <div class="section-header text-center fade-in">
        <h2>Courses & Certifications</h2>
        <p class="section-subtitle">Continuous learning and professional development</p>
      </div>
      
      <div class="courses-container">
        <div class="courses-grid grid-3">
          <div 
            v-for="(course, index) in courses" 
            :key="index"
            class="course-card card"
            :class="getAnimationClass(index)"
          >
            <div class="course-platform">
              <div class="platform-badge" :class="course.platform.toLowerCase()">
                {{ course.platform }}
              </div>
            </div>
            
            <div class="course-content">
              <h3>{{ course.name }}</h3>
              <div class="course-meta">
                <span class="course-duration">{{ course.duration }}</span>
                <span class="course-year">{{ course.year }}</span>
              </div>
              
              <div class="course-skills">
                <span 
                  v-for="skill in course.skills" 
                  :key="skill"
                  class="skill-badge"
                >
                  {{ skill }}
                </span>
              </div>
              
              <div class="course-certificate" v-if="course.certificate">
                <span class="certificate-badge">✓ Certified</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="learning-path mt-8">
          <div class="path-card card">
            <h3>Learning Journey</h3>
            <div class="path-timeline">
              <div 
                v-for="(step, index) in learningPath" 
                :key="index"
                class="path-step"
              >
                <div class="step-marker">{{ index + 1 }}</div>
                <div class="step-content">
                  <h4>{{ step.title }}</h4>
                  <p>{{ step.description }}</p>
                </div>
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
  name: 'Courses',
  data() {
    return {
      courses: [
        {
          name: '100 Days of Code Python',
          platform: 'Udemy',
          duration: '100 Days',
          year: '2023',
          skills: ['Python', 'Programming', 'Problem Solving'],
          certificate: true
        },
        {
          name: 'Web Development in 48 Days',
          platform: 'Udemy',
          duration: '48 Days',
          year: '2023',
          skills: ['HTML', 'CSS', 'JavaScript', 'FullStack'],
          certificate: true
        },
        {
          name: 'Python Basics',
          platform: 'OpenClassroom',
          duration: '6 Weeks',
          year: '2022',
          skills: ['Python', 'Programming Fundamentals'],
          certificate: true
        },
        {
          name: 'Vue.js Framework',
          platform: 'Online Course',
          duration: '8 Weeks',
          year: '2023',
          skills: ['Vue.js', 'Frontend', 'JavaScript'],
          certificate: false
        },
        {
          name: 'PHP + Laravel',
          platform: 'Online Course',
          duration: '10 Weeks',
          year: '2023',
          skills: ['PHP', 'Laravel', 'Backend', 'MySQL'],
          certificate: false
        },
        {
          name: 'Machine Learning Fundamentals',
          platform: 'Self-Study',
          duration: 'Ongoing',
          year: '2024',
          skills: ['ML', 'Python', 'Data Science'],
          certificate: false
        }
      ],
      learningPath: [
        {
          title: 'Programming Fundamentals',
          description: 'Started with Python basics and programming concepts'
        },
        {
          title: 'Web Development',
          description: 'Learned HTML, CSS, JavaScript and modern frameworks'
        },
        {
          title: 'Backend Development',
          description: 'Mastered PHP, Laravel and database management'
        },
        {
          title: 'Advanced Topics',
          description: 'Currently exploring AI, Machine Learning and advanced frameworks'
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
.courses-grid {
  margin-bottom: 3rem;
}

.course-card {
  text-align: left;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.course-card:hover {
  transform: translateY(-6px);
}

.course-platform {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.platform-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.platform-badge.udemy {
  background-color: #a435f0;
  color: white;
}

.platform-badge.openclassroom {
  background-color: #ff6f00;
  color: white;
}

.platform-badge.online {
  background-color: var(--primary-color);
  color: white;
}

.platform-badge.self-study {
  background-color: var(--text-secondary);
  color: white;
}

.course-content {
  padding-top: 2rem;
}

.course-content h3 {
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-size: 1.125rem;
}

.course-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 1rem;
}

.course-duration,
.course-year {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.course-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.skill-badge {
  background-color: var(--bg-tertiary);
  color: var(--primary-color);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
}

.course-certificate {
  text-align: right;
}

.certificate-badge {
  background-color: #10b981;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.path-card {
  text-align: left;
}

.path-card h3 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.path-timeline {
  position: relative;
}

.path-timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--primary-color), var(--accent-color));
}

.path-step {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
}

.step-marker {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  flex-shrink: 0;
  box-shadow: var(--shadow-md);
}

.step-content {
  flex: 1;
  padding-top: 0.5rem;
}

.step-content h4 {
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-size: 1.125rem;
}

.step-content p {
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .courses-grid {
    grid-template-columns: 1fr;
  }
  
  .course-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .path-step {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .path-timeline::before {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
