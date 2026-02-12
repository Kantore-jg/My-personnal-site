<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-brand">
            <img 
              src="https://pbs.twimg.com/profile_images/1940855239579467777/FmAsEdzg_400x400.jpg" 
              alt="Kantore Jean Gildas"
              class="footer-logo"
            />
            <h3>Kantore Jean Gildas</h3>
            <p>FullStack Developer & IT Technician</p>
          </div>
          
          <div class="footer-description">
            <p>
              Passionate about building innovative digital solutions and creating impactful 
              web experiences. Always eager to learn and take on new challenges.
            </p>
          </div>
        </div>
        
        <div class="footer-section">
          <h4>Quick Links</h4>
          <div class="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        
        <div class="footer-section">
          <h4>Connect With Me</h4>
          <div class="social-links">
            <a 
              v-for="(link, index) in socialLinks" 
              :key="index"
              :href="link.url" 
              target="_blank"
              class="social-link"
              :title="link.name"
            >
              <component :is="link.icon" width="20" height="20" />
              <span>{{ link.name }}</span>
            </a>
          </div>
          
          <div class="footer-actions">
            <a 
              href="mailto:codewithkantox@gmail.com" 
              class="btn btn-primary btn-sm"
            >
              Email Me
            </a>
            <a 
              href="/resume/Kantore%20Jean%20Gildas.pdf" 
              download="Kantore_Jean_Gildas_CV.pdf"
              class="btn btn-secondary btn-sm"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-divider"></div>
        <div class="footer-copyright">
          <p>&copy; 2025 Kantore Jean Gildas. All rights reserved.</p>
          <p>Built with Vue.js, CSS, and lots of ☕</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      socialLinks: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/kantore-jean-gildas-94b43a345/',
          icon: 'LinkedinIcon'
        },
        {
          name: 'Twitter',
          url: 'https://x.com/ni_Kantore',
          icon: 'TwitterIcon'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/i_m_kantore?igsh=dHZ3bWllcmt0aDRp',
          icon: 'InstagramIcon'
        },
        {
          name: 'GitHub',
          url: 'https://github.com/Kantore-jg',
          icon: 'GithubIcon'
        }
      ]
    }
  },
  components: {
    LinkedinIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      `
    },
    TwitterIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      `
    },
    InstagramIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
        </svg>
      `
    },
    GithubIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      `
    }
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section h4 {
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
}

.footer-brand {
  text-align: center;
}

.footer-logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid rgba(255, 255, 255, 0.2);
  object-fit: cover;
}

.footer-brand h3 {
  margin-bottom: 0.5rem;
  color: white;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
}

.footer-description {
  max-width: 300px;
  margin: 0 auto;
}

.footer-description p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0.25rem 0;
}

.footer-links a:hover {
  color: white;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.social-link:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateX(4px);
}

.footer-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.footer-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
}

.footer-copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-copyright p {
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .footer-brand {
    text-align: center;
  }
  
  .footer-description {
    max-width: 100%;
  }
  
  .footer-copyright {
    flex-direction: column;
    text-align: center;
  }
  
  .social-link {
    justify-content: center;
  }
  
  .social-link:hover {
    transform: translateY(-2px);
  }
}
</style>
