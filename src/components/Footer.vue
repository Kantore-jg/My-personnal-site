<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <img 
            src="https://pbs.twimg.com/profile_images/1940855239579467777/FmAsEdzg_400x400.jpg" 
            alt="Kantore Jean Gildas"
            class="footer-logo"
          />
          <h3>Kantore Jean Gildas</h3>
          <p>Developer & IT</p>
          <p class="footer-description">
            Always eager to learn and take on new challenges.
          </p>
        </div>
        
        <div class="footer-social">
          <div class="social-links">
            <a 
              v-for="(link, index) in socialLinks" 
              :key="index"
              :href="link.url" 
              target="_blank"
              class="social-link"
              :title="link.name"
            >
              <i :class="'pi ' + link.icon"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-divider"></div>
        <p class="footer-copyright">&copy; 2025 Kantore Jean Gildas</p>
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
          name: 'Twitter',
          url: 'https://x.com/ni_Kantore',
          icon: 'pi-twitter'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/i_m_kantore?igsh=dHZ3bWllcmt0aDRp',
          icon: 'pi-instagram'
        }
      ]
    }
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  padding: 2.5rem 0 1.5rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 0.75rem;
  border: 3px solid rgba(255, 255, 255, 0.2);
  object-fit: cover;
}

.footer-brand h3 {
  margin-bottom: 0.25rem;
  color: white;
  font-size: 1.25rem;
}

.footer-brand > p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0;
  font-size: 0.875rem;
}

.footer-description {
  max-width: 400px;
  line-height: 1.6;
  margin-top: 0.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.1);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.125rem;
}

.social-link:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.footer-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
}

.footer-copyright {
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  font-size: 0.8rem;
  text-align: center;
}
</style>
