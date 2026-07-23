import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Experience from '../views/Experience.vue'
import Projects from '../views/Projects.vue'
import Education from '../views/Education.vue'
import Contact from '../views/Contact.vue'
import Look from '../views/Look.vue'
import { PROFILE } from '../data.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: `${PROFILE.name} | IT Developer & Digital Marketing Senior`,
      description: `${PROFILE.name} is an IT professional, web developer, and digital marketing specialist based in ${PROFILE.location}.`,
      image: '/images/foto.png'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: `About ${PROFILE.name} | Professional Profile`,
      description: `Learn more about ${PROFILE.name}, his background in technology, web development, and digital marketing.`,
      image: '/images/foto.png'
    }
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience,
    meta: {
      title: `${PROFILE.name} | Professional Experience`,
      description: `Explore the professional experience of ${PROFILE.name} in web development, technical leadership, and digital marketing.`,
      image: '/images/foto.png'
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: `${PROFILE.name} | Featured Projects`,
      description: `Discover featured projects by ${PROFILE.name}, including web and digital transformation initiatives.`,
      image: '/images/foto.png'
    }
  },
  {
    path: '/education',
    name: 'Education',
    component: Education,
    meta: {
      title: `${PROFILE.name} | Education & Training`,
      description: `View the education and professional training background of ${PROFILE.name}.`,
      image: '/images/foto.png'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: `Contact ${PROFILE.name}`,
      description: `Get in touch with ${PROFILE.name} for collaboration, opportunities, or professional inquiries.`,
      image: '/images/foto.png'
    }
  },
  {
    path: '/look',
    name: 'Look',
    component: Look,
    meta: {
      title: `${PROFILE.name} | Photo Gallery`,
      description: `A visual look at ${PROFILE.name} over the years.`,
      image: '/images/foto.png'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

function upsertMeta(selector, attrName, attrValue, content) {
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attrName, attrValue)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

function updateStructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PROFILE.name,
    jobTitle: PROFILE.title,
    url: window.location.origin,
    email: `mailto:${PROFILE.email}`,
    telephone: PROFILE.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bujumbura',
      addressCountry: 'Burundi'
    },
    sameAs: Object.values(PROFILE.social)
  }

  let script = document.getElementById('structured-data')
  if (!script) {
    script = document.createElement('script')
    script.id = 'structured-data'
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(jsonLd)
}

function updateSeo(route) {
  const title = route.meta?.title || `${PROFILE.name} | Portfolio`
  const description =
    route.meta?.description ||
    `${PROFILE.name} is an IT professional, web developer, and digital marketing specialist.`
  const image = route.meta?.image || '/images/foto.png'
  const canonical = new URL(route.fullPath || '/', window.location.origin).href

  document.title = title
  upsertMeta('meta[name="description"]', 'name', 'description', description)
  upsertMeta('meta[property="og:title"]', 'property', 'og:title', title)
  upsertMeta('meta[property="og:description"]', 'property', 'og:description', description)
  upsertMeta('meta[property="og:image"]', 'property', 'og:image', image)
  upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical)
  upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
  upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
  upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image)
  upsertLink('canonical', canonical)
  updateStructuredData()
}

router.afterEach((to) => {
  if (typeof window !== 'undefined') {
    updateSeo(to)
  }
})

export default router

export { updateSeo }
