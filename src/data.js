/**
 * Central data for Kantore Jean Gildas Portfolio (Vue.js)
 */

export const PROFILE = {
  name: "Kantore Jean Gildas",
  title: "IT & Developer, Digital Marketing senior",
  location: "Bujumbura, Burundi",
  email: "codewithkantox@gmail.com",
  phone: "+257 67 908 378",
  birthdate: "June 3, 2005",
  summary: "Passionate and results-driven IT professional with experience in web development, digital"+
"marketing, and technology management. Skilled in developing modern websites, managing"+
"digital platforms, creating engaging content, and supporting digital transformation initiatives."+
"Strong analytical, communication, and teamwork skills with a commitment to continuous"+
"learning.",
  languages: ["English", "French", "Kiswahili", "Kirundi"],
  social: {
    linkedin: "https://www.linkedin.com/in/kantore-jean-gildas-94b43a345/",
    github: "https://github.com/Kantore-jg",
    twitter: "https://x.com/ni_Kantore",
    instagram: "https://www.instagram.com/i_m_kantore"
  },
  resumeUrl: "/resume/Kantore Jean Gildas.pdf"
}

export const EXPERIENCES = [
  {
    company: "Advanced IT",
    role: "Web Developer",
    period: "December 2025 – Present",
    location: "Bujumbura, Burundi",
    description: "Develop and maintain modern web applications. Design responsive and user-friendly websites. Optimize website performance and security.",
    highlights: [
      "Building production web applications",
      "Responsive design implementation",
      "Performance & security optimization"
    ]
  },
  {
    company: "Isomero BI Technologies",
    role: "Technical Director",
    period: "2026 – Present",
    location: "Bujumbura, Burundi",
    description: "Led technical projects and software development. Coordinated development teams and supported innovation and digital transformation.",
    highlights: ["Team leadership", "Technical project management", "Digital transformation support"]
  },
  {
    company: "Senior Digital Marketing (Skynet)",
    // role: "2025-2026",
    period: "2025 – 2026",
    location: "Bujumbura, Burundi",
    description: "Managed company social media platforms. Created engaging digital content and improved online visibility.",
    highlights: ["Social media strategy", "Content creation", "Brand visibility growth"]
  }
]

export const PROJECTS = [
  {
    title: "Ikinyamakuru Project",
    status: "In Progress",
    description: "A new digital project focused on news and information management.",
    technologies: ["Web Development"]
  },
  {
    title: "E~Menage - Digital Household Management",
    status: "In Progress",
    description: "Comprehensive system for modernizing household management and communication in Bujumbura city.",
    technologies: ["Vue.js", "Python", "Data Analysis"]
  }
]

export const EDUCATION = [
  {
    institution: "University of Lake Tanganyika",
    degree: "Bachelor of Software Engineering",
    period: "2023 – 2026",
    location: "Bujumbura, Burundi"
  },
  {
    institution: "ETS Kamenge",
    degree: "Information Technology",
    period: "2019 – 2023",
    location: "Bujumbura, Burundi"
  }
]

export const CERTIFICATIONS = [
  // { name: "100 Days of Code – Python", issuer: "Udemy", year: "2025" },
]

export const SKILLS = [
  "HTML5", "CSS3", "JavaScript", "PHP", "Laravel", "MySQL", "Python", "Git/GitHub",
  "Web Development", "Digital Marketing", "Content Creation", "Social Media Management"
]

// Contact message storage (persists in localStorage)
export function saveMessage(messageData) {
  const messages = getMessages()
  const newMessage = {
    id: Date.now(),
    ...messageData,
    timestamp: new Date().toISOString()
  }
  messages.push(newMessage)
  localStorage.setItem('kantore_messages', JSON.stringify(messages))
  return newMessage
}

export function getMessages() {
  try {
    const data = localStorage.getItem('kantore_messages')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function clearMessages() {
  localStorage.removeItem('kantore_messages')
}