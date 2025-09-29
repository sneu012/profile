import type { Metric } from '../types';

const METRICS: Metric[] = [
    {
        id: 'system-design',
        title: 'System Architect',
        icon: 'Network',
        color: '#00ff88',
        description: 'Building systems that actually work on Mondays (most of the time)',
        category: 'technical'
    },
    {
      id: 'people-compiler',
      title: 'Human Load Balancer',
      icon: 'Users',
      color: '#ff6b35',
      description: 'Distributing workload across the team without anyone crashing (usually)',
      category: 'leadership'
    },
    {
        id: 'rubber-duck-debugging',
        title: 'Chaos Coordinator',
        icon: 'Shuffle',
        color: '#6b5b95',
        description: 'Turning project pandemonium into organized success (most days)',
        category: 'leadership'
    },
    {
        id: 'merge-conflicts',
        title: 'Conflict Resolver',
        icon: 'GitMerge',
        color: '#f7931e',
        description: 'Resolving team disputes smoother than resolving Git conflicts',
        category: 'leadership'
    },  
    {
      id: 'investigative-prowess',
      title: 'Data-Driven Decision Maker',
      icon: 'BarChart3',
      color: '#00a8cc',
      description: 'Making decisions based on data, not just gut feelings 50% of the time',
      category: 'leadership'
    },
    {
      id: 'technical-debt',
      title: 'Automation Enthusiast',
      icon: 'Bot',
      color: '#ffcc02',
      description: 'If I have to do it twice, there\'s probably a script for that',
      category: 'leadership'
    },
    {
      id: 'vibe-coder',
      title: 'Vibe Coder',
      icon: 'Music',
      color: '#8b5cf6',
      description: 'Writing code that feels good and debugging with the perfect playlist',
      category: 'technical'
    },
    // Career Progression Metrics
    {
      id: 'uno-foundation',
      title: 'UNO Research & Education',
      icon: 'Award',
      color: '#9b59b6',
      description: 'CS degree with 4.0 Major GPA, research in protein prediction, iOS development, and tutoring',
      category: 'education'
    },
    {
      id: 'software-engineer-growth',
      title: 'Software Developer at RXNT',
      icon: 'Code',
      color: '#3498db',
      description: 'Started 2017 - React, Node.js, .NET, form engines, and learning healthcare tech',
      category: 'career'
    },
    {
      id: 'senior-engineer-mentoring',
      title: 'Senior Engineer & Tech Lead',
      icon: 'Target',
      color: '#e74c3c',
      description: 'Led projects, mentored developers, maintained repos',
      category: 'career'
    },
    {
      id: 'engineering-manager-transition',
      title: 'Engineering Manager',
      icon: 'Users',
      color: '#f39c12',
      description: 'Mar 2023 - Present: Leading teams and learning that people problems are harder than code',
      category: 'career'
    },
    // Skills-Specific Metrics
    {
      id: 'csharp-dotnet',
      title: 'C# & .NET',
      icon: 'Code',
      color: '#239120',
      description: '5+ years of building healthcare systems with C# and .NET Core',
      category: 'technical'
    },
    {
      id: 'node-js',
      title: 'Node.js',
      icon: 'Zap',
      color: '#68a063',
      description: 'Building backend services and APIs with Node.js',
      category: 'technical'
    },
    {
      id: 'react',
      title: 'React',
      icon: 'Monitor',
      color: '#61dafb',
      description: 'Creating user interfaces that don\'t make users cry',
      category: 'technical'
    },
    {
      id: 'mssql',
      title: 'MS SQL Server',
      icon: 'Database',
      color: '#cc2927',
      description: 'Designing databases and optimizing queries (sometimes successfully)',
      category: 'technical'
    },
    {
      id: 'cosmos-db',
      title: 'Cosmos DB',
      icon: 'Globe',
      color: '#0078d4',
      description: 'NoSQL databases for when relational just won\'t cut it',
      category: 'technical'
    },
    {
      id: 'azure-cloud',
      title: 'Azure',
      icon: 'Server',
      color: '#0078d4',
      description: 'Comfortable with Azure services (when they cooperate)',
      category: 'technical'
    },
    {
      id: 'git-version-control',
      title: 'Git',
      icon: 'GitBranch',
      color: '#f05032',
      description: 'Version control master - can resolve merge conflicts in my sleep',
      category: 'technical'
    },
    {
      id: 'team-leadership',
      title: 'Team Leadership',
      icon: 'Users',
      color: '#ff6b35',
      description: 'Learning to translate "this should be easy" into realistic timelines',
      category: 'leadership'
    },
    {
      id: 'healthcare-domain',
      title: 'Healthcare Domain',
      icon: 'Shield',
      color: '#e74c3c',
      description: 'HIPAA compliance and understanding that healthcare moves carefully for good reasons',
      category: 'technical'
    },
    // Projects-Specific Metrics
    {
      id: 'platform-modernization',
      title: 'Platform Modernization',
      icon: 'RefreshCw',
      color: '#00ff88',
      description: 'Modernizing legacy healthcare systems without breaking everything',
      category: 'technical'
    },
    {
      id: 'api-development',
      title: 'API Development',
      icon: 'Zap',
      color: '#f39c12',
      description: 'Building APIs that occasionally work on the first try',
      category: 'technical'
    },
    {
      id: 'system-integration',
      title: 'System Integration',
      icon: 'Link',
      color: '#9b59b6',
      description: 'Connecting healthcare systems while maintaining HIPAA compliance',
      category: 'technical'
    },
    {
      id: 'team-projects',
      title: 'Team Project Leadership',
      icon: 'Users',
      color: '#00a8cc',
      description: 'Leading cross-functional teams through complex healthcare initiatives',
      category: 'leadership'
    }
];

export const useMetrics = () => {
  return { metrics: METRICS };
};
