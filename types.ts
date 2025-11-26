import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Program {
  id: string;
  title: string;
  price: string;
  description?: string; 
  features: string[];
  cta: string;
  popular?: boolean;
  isElite?: boolean;
  bestFor?: string;
  duration?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  metric: string;
  // New fields for detailed page
  age?: string;
  location?: string;
  date?: string;
  image?: string; // URL placeholder
  story?: string; // Longer text
}

export interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface BlogCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  count: number;
}

export interface Guide {
  id: string;
  title: string;
  type: string; // e.g., "PDF Guide", "Video Series"
  downloadUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface AudienceItem {
  id: string;
  text: string;
}