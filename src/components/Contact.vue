<template>
  <section id="contact" class="section section-alt">
    <div class="container">
      <div class="section-header text-center fade-in">
        <h2>Get In Touch</h2>
        <p class="section-subtitle">Let's collaborate and create something impactful together</p>
      </div>
      
      <div class="contact-content">
        <div class="contact-grid grid-2">
          <div class="contact-info card slide-in-left">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new opportunities, exciting projects, 
              or just having a chat about technology and innovation. Whether you're looking 
              for a developer, have a project idea, or want to collaborate, I'd love to hear from you.
            </p>
            
            <div class="contact-methods">
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div class="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:codewithkantox@gmail.com">codewithkantox@gmail.com</a>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div class="contact-details">
                  <h4>GitHub</h4>
                  <a href="https://github.com/Kantore-jg" target="_blank">github.com/Kantore-jg</a>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div class="contact-details">
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/kantore-jean-gildas-94b43a345/" target="_blank">linkedin.com/in/kantore-jean-gildas</a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form card slide-in-right">
            <h3>Send Me a Message</h3>
            <form @submit.prevent="handleSubmit" class="form">
              <div class="form-group">
                <label for="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required
                  placeholder="Your Name"
                />
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  required
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="5" 
                  required
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>
              </button>
            </form>
            
            <div v-if="formStatus" class="form-status" :class="formStatus.type">
              {{ formStatus.message }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      formStatus: null
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true;
      this.formStatus = null;
      
      try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Open email client with pre-filled information
        const subject = encodeURIComponent(this.form.subject);
        const body = encodeURIComponent(
          `Name: ${this.form.name}\nEmail: ${this.form.email}\n\nMessage:\n${this.form.message}`
        );
        
        window.location.href = `mailto:codewithkantox@gmail.com?subject=${subject}&body=${body}`;
        
        this.formStatus = {
          type: 'success',
          message: 'Opening your email client...'
        };
        
        // Reset form
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      } catch (error) {
        this.formStatus = {
          type: 'error',
          message: 'Something went wrong. Please try again.'
        };
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>

<style scoped>
.contact-grid {
  gap: 2rem;
}

.contact-info h3,
.contact-form h3 {
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.contact-info p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--bg-secondary);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateX(8px);
  box-shadow: var(--shadow-md);
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.contact-details h4 {
  margin-bottom: 0.25rem;
  color: var(--text-primary);
  font-size: 1rem;
}

.contact-details a {
  color: var(--primary-color);
  font-weight: 500;
  text-decoration: none;
}

.contact-details a:hover {
  color: var(--secondary-color);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: var(--text-primary);
}

.form-group input,
.form-group textarea {
  padding: 0.75rem;
  border: 2px solid var(--border-color);
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-status {
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  text-align: center;
  font-weight: 500;
}

.form-status.success {
  background-color: #10b981;
  color: white;
}

.form-status.error {
  background-color: #ef4444;
  color: white;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-item {
    flex-direction: column;
    text-align: center;
  }
  
  .contact-item:hover {
    transform: translateY(-4px);
  }
}
</style>
