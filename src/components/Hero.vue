<template>
  <section id="home" class="hero section">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text fade-in">
          <h1>Hi, I'm Kantore Jean Gildas</h1>
          <h2>FullStack Developer & IT Technician</h2>
          <p class="hero-description">
            Passionate about building scalable web applications and creating innovative digital solutions. 
            Specialized in modern web technologies and continuously exploring emerging frameworks.
          </p>
          <div class="hero-actions">
            <a href="#contact" class="btn btn-primary">Get In Touch</a>
            <a href="/resume/Kantore%20Jean%20Gildas.pdf" download="Kantore_Jean_Gildas_CV.pdf" class="btn btn-secondary">
              Download CV
            </a>
          </div>
        </div>
        
        <div class="hero-image slide-in-right">
          <div class="image-container">
            <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQFBnEiEgahS3A/profile-displayphoto-crop_800_800/B56Zr34NR_MIAI-/0/1765095311237?e=1772668800&v=beta&t=Nrm2i3r2etvPsecX50xSgeLDUFCjG-6Gyhyohtk1mWs" 
              alt="Kantore Jean Gildas"
              class="profile-image"
            />
            <div class="image-decoration"></div>
          </div>
        </div>
      </div>
      
      <div class="hero-scroll">
        <div class="scroll-indicator">
          <span>Scroll</span>
          <div class="scroll-arrow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text {
  color: white;
}

.hero-text h1 {
  margin-bottom: 1rem;
  color: white;
  background: none;
  -webkit-text-fill-color: white;
}

.hero-text h2 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  position: relative;
  width: 300px;
  height: 300px;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.image-decoration {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  border-radius: 50%;
  opacity: 0.3;
  animation: float 3s ease-in-out infinite;
}

.hero-scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.scroll-arrow {
  width: 2px;
  height: 30px;
  background: rgba(255, 255, 255, 0.5);
  position: relative;
}

.scroll-arrow::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  border-right: 2px solid rgba(255, 255, 255, 0.5);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  transform: translateX(-50%) rotate(45deg);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .image-container {
    width: 250px;
    height: 250px;
  }
  
  .hero-description {
    font-size: 1rem;
  }
}
</style>
