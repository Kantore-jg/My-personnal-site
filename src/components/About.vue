<template>
  <section id="about" class="section section-alt">
    <div class="container">
      <div class="section-header text-center fade-in">
        <h2>About Me</h2>
        <p class="section-subtitle">Get to know more about my journey and expertise</p>
      </div>
      
      <div class="about-content">
        <div class="about-card card slide-in-left">
          <div class="about-header">
            <div class="about-avatar">
              <img 
                src="https://pbs.twimg.com/profile_images/1940855239579467777/FmAsEdzg_400x400.jpg" 
                alt="Kantore Jean Gildas"
              />
            </div>
            <div class="about-info">
              <h3>Kantore Jean Gildas</h3>
              <p class="about-title"> Developer & IT Technician</p>
              <div class="about-meta">
                <span class="meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  Born June 3
                </span>
                <span class="meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Bujumbura, Burundi
                </span>
              </div>
            </div>
          </div>
          
          <div class="about-description">
            <p>
              I'm a Developer and IT Technician. <br> I specialize in building scalable 
              web applications and creating innovative digital solutions that make a real impact.
            </p>
            <p>
              With a strong foundation in modern web technologies and an interest in 
              artificial intelligence and data mining, I love transforming complex problems 
              into elegant, user-friendly solutions. <br>
              i'm also an AI graphics designer, creating stunning visuals and animations that bring ideas to life.
            </p>
            <p>
              Let's collaborate, connect, and create something impactful together!
            </p>
          </div>
          
          <div class="about-highlights">
            <div class="highlight-item">
              <div class="highlight-icon">
                <i class="pi pi-code"></i>
              </div>
              <div class="highlight-text">
                <h4>Web Development</h4>
                <p>Building modern, responsive web applications</p>
              </div>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">
                <i class="pi pi-microchip-ai"></i>
              </div>
              <div class="highlight-text">
                <h4>AI & Machine Learning</h4>
                <p>Creating intelligent solutions with Python</p>
              </div>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">
                <i class="pi pi-chart-bar"></i>
              </div>
              <div class="highlight-text">
                <h4>Data Mining</h4>
                <p>Extracting insights from complex datasets</p>
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
  name: 'About'
}
</script>

<style scoped>
.section-header {
  margin-bottom: 3rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
}

.about-avatar {
  flex-shrink: 0;
}

.about-avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--primary-color);
  box-shadow: var(--shadow-lg);
}

.about-info h3 {
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.about-title {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 1rem;
}

.about-meta {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.meta-item svg {
  flex-shrink: 0;
}

.about-description {
  margin-bottom: 2rem;
}

.about-description p {
  margin-bottom: 1rem;
  line-height: 1.7;
}

.about-highlights {
  display: grid;
  gap: 1.5rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--bg-secondary);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.highlight-item:hover {
  transform: translateX(8px);
  box-shadow: var(--shadow-md);
}

.highlight-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.highlight-icon .pi {
  font-size: 1.25rem;
  color: white;
}

.highlight-text h4 {
  margin-bottom: 0.25rem;
  font-size: 1rem;
  color: var(--text-primary);
}

.highlight-text p {
  font-size: 0.875rem;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .about-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .about-meta {
    justify-content: center;
  }
  
  .highlight-item {
    flex-direction: column;
    text-align: center;
  }
  
  .highlight-item:hover {
    transform: translateY(-4px);
  }
}
</style>
