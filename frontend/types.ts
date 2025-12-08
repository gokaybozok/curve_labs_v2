import React from 'react';

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Article {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

