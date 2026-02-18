<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="section-header text-center fade-in">
        <h2>Featured Projects</h2>
        <p class="section-subtitle">Showcasing my latest work and innovations</p>
      </div>
      
      <div class="projects-grid">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="project-card card"
          :class="getAnimationClass(index)"
        >
          <div class="project-image">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="project-img"
            />
            <div class="project-overlay">
              <div class="project-links">
                <a 
                  v-if="project.liveUrl && !project.youtubeUrl"
                  :href="project.liveUrl" 
                  target="_blank"
                  class="project-link-btn"
                  title="View Live Project"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                <a 
                  v-if="project.youtubeUrl"
                  :href="project.youtubeUrl" 
                  target="_blank"
                  class="project-link-btn youtube-btn"
                  title="Watch on YouTube"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a 
                  v-if="project.githubUrl"
                  :href="project.githubUrl" 
                  target="_blank"
                  class="project-link-btn"
                  title="View Source Code"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div class="project-content">
            <div class="project-header">
              <h3>{{ project.title }}</h3>
              <span class="project-status" :class="project.status">{{ project.status }}</span>
            </div>
            
            <p class="project-description">{{ project.description }}</p>
            
            <div class="project-tech">
              <!-- <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span> -->
            </div>
            
            <div class="project-features" v-if="project.features">
              <h4>Key Features</h4>
              <ul>
                <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div class="project-gallery mt-8" v-if="projectImages.length > 0">
        <div class="gallery-header text-center">
          <h3>Project Screenshots</h3>
          <p>E~Menage Project Development</p>
        </div>
        <div class="gallery-grid grid-2">
          <div 
            v-for="(image, index) in projectImages" 
            :key="index"
            class="gallery-item"
            @click="openImageModal(image)"
          >
            <img :src="image" :alt="`Project Screenshot ${index + 1}`" />
            <div class="gallery-overlay">
              <span>View Image</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      baseUrl: import.meta.env.BASE_URL,
      projects: [
        {
          title: 'E~Menage - Digital Household Management',
          description: 'A comprehensive system for modernizing household management and communication in Bujumbura city. Currently in active development with innovative features for urban digitalization.',
          image: import.meta.env.BASE_URL + 'emenage-main.png',
          liveUrl: 'https://prezi.com/p/hf0_vh_hyma7/digitalisation-de-la-gestion-des-menages-et-de-la-communication-a-bujumbura/',
          githubUrl: null,
          status: 'in-progress',
          technologies: ['Vue.js', 'Python', 'Data Mining', 'AI Integration', 'Web Development'],
          features: [
            'Digital household registration system',
            'Real-time communication platform',
            'Data analytics and reporting',
            'Mobile-responsive design',
            'AI-powered insights'
          ]
        },
        {
          title: 'AI-Powered Data Analysis Tool',
          description: 'An intelligent system that analyzes large datasets and provides actionable insights using machine learning algorithms and data visualization techniques.',
          image: 'https://placehold.co/400x300/2563eb/ffffff?text=AI+Data+Analysis',
          liveUrl: null,
          githubUrl: 'https://github.com/Kantore-jg',
          status: 'completed',
          technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Data Visualization'],
          features: [
            'Automated data processing',
            'Predictive analytics',
            'Interactive dashboards',
            'Export functionality',
            'Real-time data updates'
          ]
        },
        {
          title: 'My Short Movie - Animation Video',
          description: 'A creative short animated movie project showcasing storytelling through animation and video production techniques.',
          image: 'https://img.youtube.com/vi/G4nKTFQTkXw/hqdefault.jpg',
          liveUrl: null,
          youtubeUrl: 'https://youtu.be/G4nKTFQTkXw',
          githubUrl: null,
          status: 'completed',
          technologies: ['Animation', 'Video Production', 'Storytelling'],
          features: [
            'Original animated short film',
            'Creative storytelling',
            'Video editing & production',
            'Published on YouTube'
          ]
        },
        {
          title: 'FullStack Web Application Platform',
          description: 'A scalable web application platform built with modern technologies, featuring user authentication, database management, and responsive design.',
          image: 'https://placehold.co/400x300/2563eb/ffffff?text=Web+Platform',
          liveUrl: null,
          githubUrl: 'https://github.com/Kantore-jg',
          status: 'completed',
          technologies: ['Vue.js', 'PHP', 'Laravel', 'MySQL', 'REST APIs'],
          features: [
            'User authentication system',
            'Database management',
            'API integration',
            'Responsive design',
            'Performance optimization'
          ]
        }
      ],
      projectImages: [
        import.meta.env.BASE_URL + 'emenage-2.png',
        import.meta.env.BASE_URL + 'emenage-3.png',
        import.meta.env.BASE_URL + 'emenage-4.png'
      ]
    }
  },
  methods: {
    getAnimationClass(index) {
      const classes = ['fade-in', 'slide-in-left', 'slide-in-right'];
      return classes[index % classes.length];
    },
    openImageModal(image) {
      // Simple image viewer - in production, you might want a proper modal
      window.open(image, '_blank');
    }
  }
}
</script>

<style scoped>
.projects-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
}

.project-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-card:hover .project-img {
  transform: scale(1.1);
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link-btn {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.project-link-btn:hover {
  background: white;
  transform: scale(1.1);
}

.youtube-btn {
  background: rgba(255, 0, 0, 0.9);
  color: white;
}

.youtube-btn:hover {
  background: #ff0000;
  color: white;
}

.project-content {
  padding: 2rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-header h3 {
  margin-bottom: 0;
  color: var(--text-primary);
  flex: 1;
}

.project-status {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.project-status.completed {
  background-color: #10b981;
  color: white;
}

.project-status.in-progress {
  background-color: #f59e0b;
  color: white;
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background-color: var(--bg-tertiary);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
}

.project-features h4 {
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.project-features ul {
  list-style: none;
  padding: 0;
}

.project-features li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.project-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.gallery-header {
  margin-bottom: 2rem;
}

.gallery-header h3 {
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.gallery-header p {
  color: var(--text-secondary);
}

.gallery-grid {
  gap: 1.5rem;
}

.gallery-item {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.02);
}

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay span {
  color: white;
  font-weight: 600;
}

@media (max-width: 768px) {
  .project-header {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .project-status {
    align-self: flex-start;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
