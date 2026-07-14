/**
 * data.js
 * Central data store for Kantore Jean Gildas Portfolio
 * All profile information, experiences, projects, etc. are defined here.
 * Contact messages are saved here (localStorage).
 */

const PROFILE = {
  name: "Kantore Jean Gildas",
  title: "IT | Developer | Digital Marketing senior",
  location: "Bujumbura, Burundi",
  email: "codewithkantox@gmail.com",
  phone: "+257 67 908 378",
  birthdate: "June 3, 2005",
  summary: "Passionate and results-driven IT professional with experience in web development, digital"+
"marketing, and technology management. Skilled in developing modern websites, managing"+
"digital platforms, creating engaging content, and supporting digital transformation initiatives."+
"Strong analytical, communication, and teamwork skills with a commitment to continuous"+
"learning",
  languages: ["English", "French", "Kiswahili", "Kirundi"],
  availability: "Full Availability",
  social: {
    linkedin: "https://www.linkedin.com/in/kantore-jean-gildas-94b43a345/",
    github: "https://github.com/Kantore-jg",
    twitter: "https://x.com/ni_Kantore",
    instagram: "https://www.instagram.com/i_m_kantore"
  },
  resumeUrl: "resume/Kantore Jean Gildas.pdf"
};

const EXPERIENCES = [
  {
    company: "Advanced IT",
    role: "Web Developer",
    period: "December 2025 – Present",
    location: "Bujumbura, Burundi",
    description: "Develop and maintain modern web applications. Design responsive and user-friendly websites. Optimize website performance and security. Collaborate with development teams on software projects.",
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
    description: "Transorm ideas into digital solutions by teaching and leading technical teams.",
    highlights: [
      "Team leadership",
      "Technical project management",
      "Digital transformation support"
    ]
  },
  {
    company: "Senior Digital Marketing (Skynet)",
    role: "Social Media Manager",
    period: "2026",
    location: "Bujumbura, Burundi",
    description: "Managed company social media platforms. Created engaging digital content, maintained company websites and improved online visibility and brand awareness.",
    highlights: [
      "Social media strategy & execution",
      "Content creation",
      "Brand visibility growth"
    ]
  }
];

const PROJECTS = [
  
];

const EDUCATION = [
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
];

const CERTIFICATIONS = [
  {
    name: "100 Days of Code – Python",
    issuer: "Udemy",
    year: "2025"
  },
  {
    name: "JuneTech Participation",
    issuer: "JuneTech",
    year: "2025"
  }
];

const SKILLS = [
  "HTML5", "CSS3", "JavaScript", "PHP", "Laravel",
  "MySQL", "Python", "Git / GitHub",
  "Web Development", "Website Maintenance",
  "Digital Marketing", "Content Creation", "Social Media Management"
];

// Simple contact message storage
function saveMessage(messageData) {
  const messages = getMessages();
  const newMessage = {
    id: Date.now(),
    ...messageData,
    timestamp: new Date().toISOString()
  };
  messages.push(newMessage);
  localStorage.setItem('kantore_messages', JSON.stringify(messages));
  return newMessage;
}

function getMessages() {
  try {
    const data = localStorage.getItem('kantore_messages');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function clearMessages() {
  localStorage.removeItem('kantore_messages');
}

// Export for use in pages
window.PORTFOLIO_DATA = {
  PROFILE,
  EXPERIENCES,
  PROJECTS,
  EDUCATION,
  CERTIFICATIONS,
  SKILLS,
  saveMessage,
  getMessages,
  clearMessages
};