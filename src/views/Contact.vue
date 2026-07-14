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
            <input type="text" id="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">Your Email</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" v-model="form.subject" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%;" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>

        <div v-if="formStatus" class="form-status" :class="formStatus.type">
          {{ formStatus.message }}
        </div>

        <!-- Saved messages -->
        <div class="saved-messages" style="margin-top:2rem;">
          <h3 style="font-size:1.1rem;">Messages Received (local)</h3>
          <div v-if="savedMessages.length === 0" class="text-muted" style="font-size:0.9rem;">No messages saved yet.</div>
          <div v-for="msg in savedMessages" :key="msg.id" class="message-item">
            <div class="meta">{{ new Date(msg.timestamp).toLocaleString() }} — {{ msg.name }}</div>
            <strong>{{ msg.subject }}</strong><br>
            <span>{{ msg.message }}</span>
          </div>
          <button v-if="savedMessages.length" @click="clearSaved" class="btn btn-secondary" style="font-size:0.8rem; padding:0.35rem 0.9rem; margin-top:0.5rem;">
            Clear saved messages
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PROFILE, saveMessage, getMessages, clearMessages } from '../data.js'

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
      formStatus: null,
      savedMessages: []
    }
  },
  methods: {
    handleSubmit() {
      if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
        this.formStatus = { type: 'error', message: 'Please fill out all fields.' }
        return
      }

      this.isSubmitting = true

      // Simulate + save
      setTimeout(() => {
        saveMessage({ ...this.form })
        this.formStatus = { type: 'success', message: 'Thank you! Your message has been recorded locally.' }
        this.form = { name: '', email: '', subject: '', message: '' }
        this.savedMessages = getMessages()
        this.isSubmitting = false
      }, 600)
    },
    clearSaved() {
      if (confirm('Clear all locally saved messages?')) {
        clearMessages()
        this.savedMessages = []
      }
    }
  },
  mounted() {
    this.savedMessages = getMessages()
  }
}
</script>