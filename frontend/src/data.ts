export const PERSONAL_INFO = {
  name: "Guilherme Vasconcelos",
  status: "Disponível para novas oportunidades",
  specialty: "Desenvolvedor Full-Stack Jr",
  role: "Desenvolvedor Full-Stack",
  location: "Natal, RN - Brasil",
  email: "guilhermevasconcelosdev@gmail.com",
  linkedin: "https://linkedin.com/in/guilherme-vasconcelos-dev",
  github: "https://github.com/GuiVasconcelosDev",
  experienceYears: 2,
};

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'all' | 'backend' | 'frontend' | 'fullstack' | 'database';
  keyArchitecture: string;
  tags: string[];
  detailedMetrics?: string;
  githubUrl: string;
  deployUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "API RESTful de Barbearia SaaS",
    description: "Desenvolvimento de uma API robusta utilizando Spring Boot e Spring Security com autenticação JWT.",
    category: "backend",
    keyArchitecture: "Java 21 / Spring Boot / MySQL",
    tags: ["Java", "Spring Boot", "MySQL", "JWT"],
    detailedMetrics: "Redução de 40% no tempo de resposta das requisições com cache estratégico.",
    githubUrl: "https://github.com/GuiVasconcelosDev/barbearia-saas-api",
    deployUrl: "https://agendacorte-saas.vercel.app/"
  },
  {
    id: "2",
    title: "CineDiscover",
    description: "Interface SPA moderna construída com React, JavaScript e HTML5..",
    category: "frontend",
    keyArchitecture: "React / CSS3 / HTML5",
    tags: ["React", "CSS3", "HTML5", "JavaScript"],
    detailedMetrics: "Pontuação de 98% no Lighthouse com otimização de bundle.",
    githubUrl: "https://github.com/GuiVasconcelosDev/cine-discover"
  },
  {
    id: "3",
    title: "Bot de Whatsapp",
    description: "Desenvolvimento de um bot de WhatsApp para agendamento de serviços, utilizando Node.js e integração com Twilio API.",
    category: "fullstack",
    keyArchitecture: "Node.js / IA / Twilio API",
    tags: ["Node.js", "Twilio API", "IA", "Express"],
    detailedMetrics: "Automatização de 70% dos agendamentos, aumentando a eficiência operacional.",
    githubUrl: "https://github.com/GuiVasconcelosDev/barbearia-bot-whatsapp"
  }

];


export interface Skill {
  name: string;
  proficiency: number; 
  category: 'backend' | 'frontend' | 'database' | 'tools';
  highlight: string;
}

export const TECH_STACK: Skill[] = [
  { 
    name: "Java / Spring Boot", 
    proficiency: 90, 
    category: "backend", 
    highlight: "Construção de APIs RESTful robustas, ecossistema Spring e segurança com JWT." 
  },
  { 
    name: "React / TypeScript", 
    proficiency: 85, 
    category: "frontend", 
    highlight: "Desenvolvimento de SPAs performáticas, gerenciamento de estado e hooks avançados." 
  },
  { 
    name: "PostgreSQL / MySQL", 
    proficiency: 75, 
    category: "database", 
    highlight: "Modelagem de dados relacionais, otimização de queries e indexação estruturada." 
  }
];