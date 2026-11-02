<template>
  <div class="container section">
    <div class="section-header">
      <h1>Get In Touch</h1>
      <p class="text-muted">I’m always open to new opportunities, collaborations, and interesting conversations.</p>
    </div>

    <div class="contact-grid" style="max-width: 900px; margin: 0 auto;">
      
      <!-- Contact Info -->
      <div class="card">
        <h3>Contact Information</h3>
        <p style="margin:1rem 0 1.5rem;">
          <strong>{{ profile.name }}</strong><br>
          {{ profile.location }}
        </p>
        
        <p><strong>Email</strong><br>
          <a :href="'mailto:' + profile.email">{{ profile.email }}</a>
        </p>
        
        <p><strong>Phone / WhatsApp</strong><br>
          <a :href="'https://wa.me/25767908378'" target="_blank">{{ profile.phone }}</a>
        </p>

        <div style="margin-top: 1.5rem;">
          <p><strong>Social</strong></p>
          <div style="display:flex; flex-direction:column; gap:0.35rem; font-size:0.95rem;">
            <a :href="profile.social.linkedin" target="_blank">LinkedIn</a>
            <a :href="profile.social.github" target="_blank">GitHub</a>
            <a :href="profile.social.twitter" target="_blank">X / Twitter</a>
            <a :href="profile.social.instagram" target="_blank">Instagram</a>
          </div>
        </div>

        <div style="margin-top:1.5rem;">
          <a :href="profile.resumeUrl" download class="btn btn-secondary">Download my CV</a>
        </div>
      </div>

      <!-- Form -->
      <div class="card">
        <h3>Send a Message</h3>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" v-model="form.name" name="name" required autocomplete="name">
          </div>
          <div class="form-group">
            <label for="email">Your Email</label>
            <input type="email" id="email" v-model="form.email" name="email" required autocomplete="email">
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" v-model="form.subject" name="subject" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" name="message" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%;" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>

        <div v-if="formStatus" class="form-status" :class="formStatus.type">
          {{ formStatus.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PROFILE } from '../data.js'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

export default {
  name: 'Contact',
  data() {
    return {
      profile: PROFILE,
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
      if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
        this.formStatus = { type: 'error', message: 'Please fill out all fields.' }
        return
      }

      if (!FORMSPREE_ID) {
        this.formStatus = {
          type: 'error',
          message: 'Contact form is not configured yet. Please email me directly.'
        }
        return
      }

      this.isSubmitting = true
      this.formStatus = null

      try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name: this.form.name,
            email: this.form.email,
            _subject: this.form.subject,
            message: this.form.message
          })
        })

        if (response.ok) {
          this.formStatus = {
            type: 'success',
            message: 'Thank you for reaching out!'
          }
          this.form = { name: '', email: '', subject: '', message: '' }
        } else {
          const data = await response.json().catch(() => null)
          const errorMessage = data?.errors?.[0]?.message
            || 'Something went wrong. Please try again or email me directly.'
          this.formStatus = { type: 'error', message: errorMessage }
        }
      } catch {
        this.formStatus = {
          type: 'error',
          message: 'Network error. Please check your connection and try again.'
        }
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>
