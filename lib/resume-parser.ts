// This is a simplified resume parser for demonstration purposes
// In a real application, you would use a more robust solution

export interface ResumeData {
  education: EducationItem[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  skills: string[]
  contact: ContactInfo
}

export interface EducationItem {
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  gpa?: string
}

export interface ExperienceItem {
  company: string
  position: string
  startDate: string
  endDate: string
  description: string[]
}

export interface ProjectItem {
  name: string
  description: string
  technologies: string[]
  link?: string
}

export interface ContactInfo {
  name: string
  email: string
  phone?: string
  location?: string
  socialLinks: {
    linkedin?: string
    github?: string
    twitter?: string
    portfolio?: string
  }
}

export async function parseResume(): Promise<ResumeData> {
  // In a real application, you would send the file to a server or use a library
  // to parse the resume. For this demo, we'll return mock data.

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Return mock data
  return {
    education: [
      {
        institution: "Stanford University",
        degree: "Master of Science",
        field: "Computer Science",
        startDate: "2018",
        endDate: "2020",
        gpa: "3.9/4.0",
      },
      {
        institution: "University of California, Berkeley",
        degree: "Bachelor of Science",
        field: "Computer Science",
        startDate: "2014",
        endDate: "2018",
        gpa: "3.8/4.0",
      },
    ],
    experience: [
      {
        company: "Google",
        position: "Senior Software Engineer",
        startDate: "Jan 2021",
        endDate: "Present",
        description: [
          "Led a team of 5 engineers to develop a new feature that increased user engagement by 25%",
          "Optimized database queries resulting in a 40% reduction in load time",
          "Implemented CI/CD pipeline that reduced deployment time by 60%",
        ],
      },
      {
        company: "Facebook",
        position: "Software Engineer",
        startDate: "Jun 2020",
        endDate: "Dec 2020",
        description: [
          "Developed new features for the Facebook Messenger app",
          "Collaborated with designers to implement UI/UX improvements",
          "Fixed critical bugs affecting millions of users",
        ],
      },
    ],
    projects: [
      {
        name: "AI-Powered Task Manager",
        description:
          "A task management application that uses AI to prioritize tasks and suggest optimal work schedules",
        technologies: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
        link: "https://github.com/johndoe/ai-task-manager",
      },
      {
        name: "E-commerce Platform",
        description: "A full-featured e-commerce platform with payment processing, inventory management, and analytics",
        technologies: ["Next.js", "Express", "PostgreSQL", "Stripe API"],
        link: "https://github.com/johndoe/ecommerce-platform",
      },
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Django",
      "SQL",
      "NoSQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "Agile Methodologies",
    ],
    contact: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (123) 456-7890",
      location: "San Francisco, CA",
      socialLinks: {
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        portfolio: "https://johndoe.dev",
      },
    },
  }
}
