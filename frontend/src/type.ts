/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'database';
  tags: string[];
  githubUrl: string;
  deployUrl?: string; // Optional deploy URL
  detailedMetrics?: string; // High-impact metric for recruiters, e.g. "+40% performance gain"
  keyArchitecture?: string; // Brief architectural highlight
}

export interface Skill {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'tools';
  proficiency: number; // 0 to 100 for visual progress indicators
  highlight: string; // Highlight like "Spring Boot 3.x", "React 19 Hooks", "PostgreSQL Indexes"
}

export interface Recommendation {
  id: string;
  author: string;
  role: string;
  company: string;
  text: string;
  avatarUrl?: string;
}

export interface RecruiterProposal {
  company: string;
  recruiterName: string;
  roleType: 'Hybrid' | 'Remote' | 'On-site';
  techPreference: 'Java/Spring' | 'React/Node' | 'Full-stack';
  customMessage: string;
}
