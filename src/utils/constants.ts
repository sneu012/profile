/**
 * Application Constants
 * 
 * This file contains all the configuration constants used throughout the application.
 * Organized by feature area for better maintainability.
 */

import type { GearSystemConfig, TerminalCommand } from '../types';

// =============================================================================
// DASHBOARD METRICS CONFIGURATION
// =============================================================================


// =============================================================================
// GEAR SYSTEM CONFIGURATION
// =============================================================================

/**
 * Gear System Configurations
 * Defines the animated gear systems displayed in the background
 */
export const GEAR_SYSTEMS: GearSystemConfig[] = [
  {
    size: 'large',
    position: { top: '10%', left: '5%' },
    speed: 'slow',
    direction: 'clockwise',
    gearCount: 16,
    satelliteCount: 3,
  },
  {
    size: 'medium',
    position: { top: '60%', right: '8%' },
    speed: 'medium',
    direction: 'counterclockwise',
    gearCount: 12,
    satelliteCount: 2,
  },
  {
    size: 'small',
    position: { bottom: '15%', left: '15%' },
    speed: 'fast',
    direction: 'clockwise',
    gearCount: 8,
    satelliteCount: 1,
  },
];

// =============================================================================
// TERMINAL COMMANDS CONFIGURATION
// =============================================================================

/**
 * Terminal Commands Configuration
 * Defines all available commands and their outputs for the interactive terminal
 */
export const TERMINAL_COMMANDS: Record<string, TerminalCommand> = {
  // ---------------------------------------------------------------------------
  // HELP COMMAND - Lists all available commands
  // ---------------------------------------------------------------------------
  help: {
    command: 'help',
    output: `<div class="command-category">📋 COMMANDS</div>
    <div class="command-item"><span class="command-name">about</span><span class="command-desc">Personal background and leadership philosophy</span></div>
    <div class="command-item"><span class="command-name">experience</span><span class="command-desc">Engineering management experience and achievements</span></div>
    <div class="command-item"><span class="command-name">timeline</span><span class="command-desc">Visual career timeline with detailed progression</span></div>
    <div class="command-item"><span class="command-name">projects</span><span class="command-desc">Major projects and technical initiatives</span></div>
    <div class="command-item"><span class="command-name">skills</span><span class="command-desc">Technical expertise and management capabilities</span></div>
    <div class="command-item"><span class="command-name">techstack</span><span class="command-desc">Comprehensive technology stack and tools</span></div>
    <div class="command-item"><span class="command-name">learning</span><span class="command-desc">Current learning goals and objectives</span></div>
    <div class="command-item"><span class="command-name">mentoring</span><span class="command-desc">Mentoring philosophy and approach</span></div>
    <div class="command-item"><span class="command-name">vision</span><span class="command-desc">Engineering vision and strategic thinking</span></div>
    <div class="command-item"><span class="command-name">education</span><span class="command-desc">Academic background and achievements</span></div>

    <div class="command-category">💬 COMMUNICATION</div>
    <div class="command-item"><span class="command-name">contact</span><span class="command-desc">Get in touch for opportunities</span></div>

    <div class="command-category">🛠️ SYSTEM COMMANDS</div>
    <div class="command-item"><span class="command-name">clear</span><span class="command-desc">Clear terminal screen</span></div>
    <div class="command-item"><span class="command-name">exit</span><span class="command-desc">Close terminal interface</span></div>

    <span class="info-text">💡 Tip: Type any command above to explore my engineering management profile</span>
    <span class="info-text">🚀 All commands are interactive and provide detailed information</span>`,
  },

  // ---------------------------------------------------------------------------
  // ABOUT COMMAND - Personal background and philosophy
  // ---------------------------------------------------------------------------
  about: {
    command: 'about',
    output: `<div class="command-category">👨‍💻 SAMIP NEUPANE</div>
    <span class="success-text">Engineering Manager at RXNT</span>
    <span class="info-text">Leading engineering teams and developing healthcare technology solutions since 2017</span>
    <span class="info-text">📍 Annapolis, Maryland (Remote)</span>

    <div class="command-category">🎯 LEADERSHIP PHILOSOPHY</div>
    <span class="info-text">• Servant leadership focused on team growth and development</span>
    <span class="info-text">• Technical excellence through systematic processes</span>
    <span class="info-text">• Continuous learning culture and knowledge sharing</span>
    <span class="info-text">• Data-driven decisions balanced with team empathy</span>

    <div class="command-category">💡 MANAGEMENT APPROACH</div>
    <span class="info-text">• Regular 1:1s focused on career development and feedback</span>
    <span class="info-text">• Open communication to encourage growth and learning</span>
    <span class="info-text">• Growth mindset and learning from failures</span>
    <span class="info-text">• Remote team leadership and cross-timezone collaboration</span>

    <div class="command-category">🏥 HEALTHCARE TECHNOLOGY FOCUS</div>
    <span class="info-text">• Building systems that improve healthcare provider workflows</span>
    <span class="info-text">• Balancing innovation with healthcare reliability requirements</span>

    <span class="success-text">Committed to building both great software and great engineering teams.</span>`,
    type: 'info',
    delay: 1,
  },

  // ---------------------------------------------------------------------------
  // EXPERIENCE COMMAND - Career timeline and achievements
  // ---------------------------------------------------------------------------
  experience: {
    command: 'experience',
    output: `<div class="command-category">💼 COMPLETE CAREER TIMELINE</div>

    <div class="command-category">🏛️ UNIVERSITY RESEARCH EXPERIENCE (2015-2017)</div>
    <span class="success-text">Summa Lab, University of New Orleans - Undergraduate Research Assistant</span>
    <span class="info-text">• Worked on Protein Structure Prediction using Genetic Algorithm, Threading, Monte Carlo</span>
    <span class="info-text">• Focused on HIV surface proteins gp120 & gp41</span>
    <span class="info-text">• Applied complex algorithms to real research problems</span>

    <span class="success-text">Canizaro Livingston Gulf States Center - Undergraduate Research Assistant</span>
    <span class="info-text">• Developed iOS map displaying aeronautical data for U.S Naval Research Laboratory</span>
    <span class="info-text">• Redesigned and denormalized database for Ruby on Rails fish tracking app</span>
    <span class="info-text">• Gained experience in database optimization and performance tuning</span>

    <span class="success-text">UNO Computer Science Department - Programming Tutor</span>
    <span class="info-text">• Tutored students in Java, C++, and Assembly</span>
    <span class="info-text">• Developed teaching and mentoring skills</span>

    <div class="command-category">💻 SOFTWARE DEVELOPER AT RXNT (2017 - Present)</div>
    <span class="success-text">Started as Software Developer, now Engineering Manager</span>
    <span class="info-text">• Worked on Mozilla's react-jsonschema-form to create form engine using React with Redux and Node.js</span>
    <span class="info-text">• Follow agile methodology to develop RXNT EHR products using React, Node.js, Angular, .NET and C#</span>
    <span class="info-text">• Worked as tech lead for various projects</span>
    <span class="info-text">Focus: Building reliable healthcare software systems</span>

    <div class="command-category">📈 CAREER PROGRESSION AT RXNT</div>
    <span class="success-text">🎯 Engineering Manager (Mar 2023 - Present)</span>
    <span class="info-text">   └─ Leading teams and learning people management</span>
    <span class="success-text">👨‍💻 Senior Software Engineer (Apr 2021 - Mar 2023)</span>
    <span class="info-text">   └─ Tech lead role, mentoring others</span>
    <span class="success-text">💻 Software Developer (2017 - Apr 2021)</span>
    <span class="info-text">   └─ Building healthcare systems from the ground up</span>

    <span class="success-text">🎯 Total Journey: From research algorithms to leading teams!</span>`,
    type: 'success',
    delay: 1,
  },

  // ---------------------------------------------------------------------------
  // PROJECTS COMMAND - Major technical projects and initiatives
  // ---------------------------------------------------------------------------
  projects: {
    command: 'projects',
    output: `<div class="command-category">🏥 HEALTHCARE TECHNOLOGY PROJECTS AT RXNT</div>

    <div class="command-category">🚀 CURRENT ENGINEERING INITIATIVES (2023-2024)</div>
    <span class="success-text">Healthcare Platform Modernization</span>
    <span class="info-text">• Leading modernization of legacy healthcare systems</span>
    <span class="info-text">• Migrating monolithic architecture to microservices</span>
    <span class="info-text">• Technologies: C#, .NET Core, Azure, SQL Server, React</span>


    <div class="command-category">📈 KEY CONTRIBUTIONS</div>
    <span class="info-text">• Maintained and optimized critical healthcare systems</span>
    <span class="info-text">• Improved system response times and provider efficiency</span>
    <span class="info-text">• Enhanced development processes and team productivity</span>

    <span class="success-text">Focus: Building reliable healthcare technology that serves patients and providers.</span>`,
    type: 'success',
    delay: 1,
  },

  // ---------------------------------------------------------------------------
  // SKILLS COMMAND - Technical expertise and management capabilities
  // ---------------------------------------------------------------------------
  skills: {
    command: 'skills',
    output: `<div class="command-category">💻 SAMIP'S TECHNICAL & LEADERSHIP SKILLS</div>
    <div class="command-category">🎯 CORE TECHNICAL EXPERTISE</div>
    <span class="success-text">Programming Languages & Frameworks:</span>
    <span class="info-text">• NodeJS, C# & .NET Core - Primary backend development language (7+ years)</span>
    <span class="info-text">• Front-End Development - React, JavaScript, HTML5, CSS3</span>
    <span class="info-text">• SQL Server - Database design, optimization, and management</span>
    <span class="info-text">• Application Programming Interfaces (API) - RESTful services, OAuth 2.0</span>

    <span class="success-text">Cloud & Infrastructure:</span>
    <span class="info-text">• Microsoft Azure - Cloud architecture and services</span>
    <span class="info-text">• CircleCI - CI/CD pipelines and project management</span>
    <span class="info-text">• Docker & Containerization - Application deployment and scaling</span>
    <span class="info-text">• Microservices Architecture - Breaking down monolithic systems</span>

    <div class="command-category">👥 LEADERSHIP & MANAGEMENT SKILLS</div>
    <span class="success-text">Engineering Management:</span>
    <span class="info-text">• Team Leadership - Successfully managing 8+ engineers across multiple projects</span>
    <span class="info-text">• Agile/Scrum - Process optimization and sprint planning</span>
    <span class="info-text">• Mentoring & Development - Growing junior developers into senior contributors</span>
    <span class="info-text">• Cross-functional Collaboration - Working with Product, QA, and Business teams</span>

    <span class="success-text">Strategic & Soft Skills:</span>
    <span class="info-text">• Technical Strategy - Long-term architecture planning and roadmap development</span>
    <span class="info-text">• Stakeholder Communication - Translating tech concepts to business stakeholders</span>
    <span class="info-text">• Problem Solving - Complex healthcare compliance and performance challenges</span>
    <span class="info-text">• Remote Team Management - Leading distributed teams across time zones</span>

    <div class="command-category">🏥 HEALTHCARE DOMAIN EXPERTISE</div>
    <span class="warning-text">• HIPAA Compliance - Ensuring patient data security and privacy</span>
    <span class="warning-text">• Healthcare Workflows - Understanding provider and patient needs</span>
    <span class="warning-text">• Medical Data Standards - HL7, FHIR, and healthcare interoperability</span>

    <div class="command-category">🎓 EDUCATION & CERTIFICATIONS</div>
    <span class="success-text">• Bachelor's Degree in Computer Science - University of New Orleans</span>
    <span class="info-text">  └─ Graduated with University High and Department Honors (4.0 Major GPA)</span>
    <span class="info-text">  └─ Minor in Mathematics and Biology</span>

    <span class="success-text">Combining technical expertise with healthcare domain knowledge to build effective solutions.</span>`,
    type: 'info',
    delay: 1,
  },

  // ---------------------------------------------------------------------------
  // TECHSTACK COMMAND - Comprehensive technology stack and tools
  // ---------------------------------------------------------------------------
  techstack: {
    command: 'techstack',
    output: `<div class="command-category">🛠️ COMPREHENSIVE TECH STACK</div>
    <div class="command-category">💻 BACKEND TECHNOLOGIES</div>
    <span class="success-text">.NET Ecosystem:</span>
    <span class="info-text">• C# - Primary programming language for enterprise applications</span>
    <span class="info-text">• .NET Core/.NET 6+ - Cross-platform framework for modern applications</span>
    <span class="info-text">• ASP.NET Core - Web APIs</span>
    <span class="info-text">• Entity Framework Core - ORM for database operations</span>

    <span class="success-text">Node.js Stack:</span>
    <span class="info-text">• Node.js - JavaScript runtime for server-side development</span>
    <span class="info-text">• Express.js - Fast, unopinionated web framework</span>
    <span class="info-text">• NPM/Yarn - Package management and dependency resolution</span>
    <span class="info-text">• TypeScript - Typed superset of JavaScript for better development</span>

    <div class="command-category">🎨 FRONTEND TECHNOLOGIES</div>
    <span class="success-text">JavaScript & Frameworks:</span>
    <span class="info-text">• JavaScript (ES6+) - Modern JavaScript with latest features</span>
    <span class="info-text">• React - Component-based UI library for building interfaces</span>
    <span class="info-text">• React Hooks - Modern state management and lifecycle methods</span>
    <span class="info-text">• Next.js - React framework with SSR and static generation</span>

    <span class="success-text">Styling & UI:</span>
    <span class="info-text">• HTML5 - Semantic markup and modern web standards</span>
    <span class="info-text">• CSS3 - Advanced styling with flexbox, grid, and animations</span>
    <span class="info-text">• Sass/SCSS - CSS preprocessor for maintainable stylesheets</span>
    <span class="info-text">• Material-UI/Ant Design - Component libraries</span>

    <div class="command-category">🗄️ DATABASE TECHNOLOGIES</div>
    <span class="success-text">SQL Databases:</span>
    <span class="info-text">• Microsoft SQL Server - Primary relational database for enterprise apps</span>
    <span class="info-text">• PostgreSQL - Open-source relational database</span>

    <span class="success-text">NoSQL & Cloud Databases:</span>
    <span class="info-text">• Azure Cosmos DB - Multi-model NoSQL database service</span>
    <span class="info-text">• MongoDB - Document-oriented NoSQL database</span>
    <span class="info-text">• Redis - In-memory data structure store for caching</span>

    <div class="command-category">☁️ CLOUD & DEVOPS</div>
    <span class="success-text">Microsoft Azure:</span>
    <span class="info-text">• Azure App Service - Web app hosting and scaling</span>
    <span class="info-text">• Azure Functions - Serverless computing platform</span>
    <span class="info-text">• Azure SQL Database - Managed SQL database service</span>
    <span class="info-text">• Azure Key Vault - Secure secrets and certificate management</span>

    <span class="success-text">Development Tools:</span>
    <span class="info-text">• Git - Version control and collaborative development</span>
    <span class="info-text">• Docker - Containerization for consistent deployments</span>
    <span class="info-text">• Visual Studio/VS Code - Primary development environments</span>
    <span class="info-text">• Postman - API testing and documentation</span>
    <span class="info-text">• Azure Data Studio - Database management and querying</span>

    <div class="command-category">🔧 ADDITIONAL TECHNOLOGIES</div>
    <span class="success-text">APIs & Integration:</span>
    <span class="info-text">• REST APIs - RESTful web services design and implementation</span>
    <span class="info-text">• GraphQL - Query language for APIs</span>
    <span class="info-text">• OAuth 2.0/JWT - Authentication and authorization</span>
    <span class="info-text">• Swagger/OpenAPI - API documentation and testing</span>

    <span class="success-text">Testing & Quality:</span>
    <span class="info-text">• Unit Testing - xUnit, NUnit for .NET; Jest for JavaScript</span>
    <span class="info-text">• Integration Testing - End-to-end application testing with Playwright</span>
    <span class="info-text">• Code Quality - SonarQube, ESLint, Prettier</span>

    <span class="success-text">🚀 Currently Exploring:</span>
    <span class="warning-text">• Domain Driven Development</span>
    <span class="warning-text">• Kubernetes - Container orchestration and management</span>
    <span class="warning-text">• AI/ML Integration - Incorporating intelligent features</span>

    <span class="success-text">💡 Tech Philosophy: "Choose the right tool for the job, not the newest tool for the resume!" 🎯</span>`,
    type: 'success',
    delay: 1,
  },

  // ---------------------------------------------------------------------------
  // LEARNING COMMAND - Current learning goals and objectives
  // ---------------------------------------------------------------------------
  learning: {
    command: 'learning',
    output: `<div class="command-category">🎯 CURRENT LEARNING GOALS & OBJECTIVES</div>
    <div class="command-category">🚀 IMMEDIATE FOCUS AREAS</div>
    <span class="success-text">Advanced System Architecture:</span>
    <span class="info-text">• Cloud-Native Architecture - Serverless computing and containerization strategies</span>
    <span class="info-text">• Domain-Driven Design (DDD) - Better modeling of complex business domains</span>
    <span class="info-text">• API Gateway Patterns - Advanced routing, rate limiting, and security</span>

    <span class="success-text">Leadership & Management Excellence:</span>
    <span class="info-text">• Engineering Management Best Practices - Scaling teams and processes</span>
    <span class="info-text">• Technical Decision Making - Balancing technical debt vs. feature delivery</span>
    <span class="info-text">• Cross-functional Collaboration - Working effectively with Product and Design</span>
    <span class="info-text">• Remote Team Leadership - Building culture and productivity in distributed teams</span>

    <div class="command-category">🏥 HEALTHCARE TECHNOLOGY TRENDS</div>
    <span class="success-text">Healthcare Innovation:</span>
    <span class="info-text">• FHIR R4 Implementation - Advanced healthcare data interoperability</span>
    <span class="info-text">• AI/ML in Healthcare - Predictive analytics for patient outcomes</span>
    <span class="info-text">• Healthcare Security - Advanced threat detection and compliance automation</span>


    <div class="command-category">⚡ MODERN DEVOPS & INFRASTRUCTURE</div>
    <span class="success-text">DevOps Evolution:</span>
    <span class="info-text">• Kubernetes Mastery - Advanced orchestration and service mesh (Istio)</span>
    <span class="info-text">• Observability Stack - Prometheus, Grafana, and distributed tracing</span>
    <span class="info-text">• Security DevOps - Shift-left security and automated compliance</span>

    <span class="success-text">Cloud Architecture:</span>
    <span class="info-text">• Multi-Cloud Strategies - Avoiding vendor lock-in while optimizing costs</span>
    <span class="info-text">• Serverless Architectures - Event-driven systems and Function-as-a-Service</span>
    <span class="info-text">• Edge Computing - Bringing computation closer to healthcare providers</span>


    <div class="command-category">📚 LEARNING METHODOLOGY</div>
    <span class="success-text">How I Learn:</span>
    <span class="warning-text">• 🔬 Hands-on Projects - Building proof-of-concepts and prototypes</span>
    <span class="warning-text">• 📖 Technical Reading - Architecture books, research papers, and documentation</span>
    <span class="warning-text">• 👥 Peer Learning - Code reviews, architecture discussions, and mentoring</span>
    <span class="warning-text">• 🧪 Experimentation - Setting up lab environments for new technologies</span>

    <div class="command-category">🎯 2026 SPECIFIC GOALS</div>
    <span class="success-text">2025 Objectives:</span>
    <span class="info-text">• Hands on Experience with Kubernetes</span>
    <span class="info-text">• Mentor senior engineers into technical leadership roles</span>

    <span class="success-text">💡 Learning Philosophy: "Stay curious, stay humble, and remember that every expert was once a beginner!" 🌱</span>`,
    type: 'info',
    delay: 1,
  },

  // ---------------------------------------------------------------------------
  // MENTORING COMMAND - Mentoring philosophy and approach
  // ---------------------------------------------------------------------------
  mentoring: {
    command: 'mentoring',
    output: `<div class="command-category">👨‍🏫 MENTORING PHILOSOPHY & APPROACH</div>
    <div class="command-category">🎯 CORE MENTORING PRINCIPLES</div>
    <span class="success-text">Listen First, Advise Second:</span>
    <span class="info-text">• Understanding the mentee's perspective before offering solutions</span>
    <span class="info-text">• Asking open-ended questions to encourage self-discovery</span>
    <span class="info-text">• Creating a safe space for admitting knowledge gaps and mistakes</span>
    <span class="info-text">• Recognizing that everyone learns differently and at their own pace</span>

    <span class="success-text">Growth-Oriented Mindset:</span>
    <span class="info-text">• Focusing on progress over perfection</span>
    <span class="info-text">• Celebrating small wins and learning from failures</span>
    <span class="info-text">• Encouraging experimentation in safe, controlled environments</span>
    <span class="info-text">• Building confidence through incremental challenges</span>

    <div class="command-category">🛠️ PRACTICAL MENTORING TECHNIQUES</div>
    <span class="success-text">Pair Programming Sessions:</span>
    <span class="info-text">• Working together on complex problems to demonstrate thought processes</span>
    <span class="info-text">• Switching between driver/navigator roles to build different skills</span>

    <span class="success-text">Code Reviews as Learning Opportunities:</span>
    <span class="info-text">• Providing constructive feedback with clear explanations</span>
    <span class="info-text">• Suggesting alternative approaches and explaining trade-offs</span>
    <span class="info-text">• Highlighting good practices and explaining why they work</span>
    <span class="info-text">• Using code reviews to discuss architecture and design patterns</span>

    <div class="command-category">🎓 SKILL DEVELOPMENT AREAS</div>
    <span class="success-text">Technical Skills:</span>
    <span class="info-text">• Problem-Solving Methodology - Breaking down complex problems systematically</span>
    <span class="info-text">• Code Quality - Writing maintainable, readable, and testable code</span>
    <span class="info-text">• Debugging Techniques - Systematic approaches to finding and fixing issues</span>
    <span class="info-text">• Architecture Thinking - Understanding system design and scalability</span>

    <span class="success-text">Professional Skills:</span>
    <span class="info-text">• Communication - Explaining technical concepts to different audiences</span>
    <span class="info-text">• Time Management - Balancing feature work with learning and improvement</span>
    <span class="info-text">• Collaboration - Working effectively in team environments</span>
    <span class="info-text">• Continuous Learning - Building habits for staying current with technology</span>

    <div class="command-category">🚀 CAREER DEVELOPMENT SUPPORT</div>
    <span class="success-text">Growth Path Planning:</span>
    <span class="info-text">• Identifying individual strengths and areas for improvement</span>
    <span class="info-text">• Setting realistic short-term and long-term career goals</span>
    <span class="info-text">• Creating learning plans with specific, measurable objectives</span>
    <span class="info-text">• Providing opportunities for increased responsibility and visibility</span>

    <span class="success-text">Leadership Development:</span>
    <span class="info-text">• Encouraging participation in technical discussions and decisions</span>
    <span class="info-text">• Providing opportunities to lead small projects or initiatives</span>
    <span class="info-text">• Teaching how to mentor others and share knowledge</span>
    <span class="info-text">• Building confidence in presenting ideas and solutions</span>

    <div class="command-category">🎯 MENTORING METHODOLOGY</div>
    <span class="success-text">Regular Check-ins:</span>
    <span class="info-text">• Weekly 1:1 sessions for ongoing support and guidance</span>
    <span class="info-text">• Quarterly career development discussions</span>
    <span class="info-text">• Ad-hoc support for urgent questions or challenges</span>

    <span class="success-text">Structured Learning:</span>
    <span class="info-text">• Curated reading lists and learning resources</span>
    <span class="info-text">• Hands-on projects with increasing complexity</span>
    <span class="info-text">• Knowledge sharing sessions</span>
    <span class="info-text">• Cross-team collaboration opportunities</span>

    <div class="command-category">💡 MENTORING PHILOSOPHY</div>
    <span class="success-text">My Approach:</span>
    <span class="warning-text">"I believe the best mentors don't create copies of themselves, but help others discover and develop their unique strengths and perspectives."</span>

    <span class="success-text">🌟 Core Belief: "Every engineer has the potential to be great - sometimes they just need someone to believe in them and show them the way!" 🚀</span>`,
    type: 'success',
    delay: 1,
  },

  // ---------------------------------------------------------------------------
  // TIMELINE COMMAND - Visual career timeline with detailed progression
  // ---------------------------------------------------------------------------
  timeline: {
    command: 'timeline',
    output: `<div class="command-category">📅 COMPREHENSIVE CAREER TIMELINE</div>
    <div class="command-category">🎓 EDUCATION FOUNDATION (2013-2017)</div>
    <span class="success-text">2013-2017 │ University of New Orleans</span>
    <span class="info-text">         │ Bachelor of Science in Computer Science</span>
    <span class="info-text">         │ • Minor in Mathematics and Biology</span>
    <span class="info-text">         │ • 4.0 Major GPA, University High Honors</span>
    <span class="info-text">         │ • Dean's List for 8 consecutive semesters</span>
    <span class="info-text">         │ • President, Nepalese Student Association</span>
    <span class="info-text">         │ • Orientation Leader</span>
    <span class="info-text">         └─ 🎯 Key Learning: Strong foundation in CS fundamentals</span>

    <div class="command-category">🔬 RESEARCH EXPERIENCE (2015-2017)</div>
    <span class="success-text">2015-2016 │ Summa Lab - Undergraduate Research Assistant</span>
    <span class="info-text">         │ • Protein Structure Prediction using Genetic Algorithms</span>
    <span class="info-text">         │ • Focused on HIV surface proteins gp120 & gp41</span>
    <span class="info-text">         │ • Monte Carlo methods and Threading techniques</span>
    <span class="info-text">         └─ 🧬 First exposure to complex algorithms in real research</span>

    <span class="success-text">2016-2017 │ Canizaro Livingston Gulf States Center</span>
    <span class="info-text">         │ • iOS app development for U.S Naval Research Laboratory</span>
    <span class="info-text">         │ • Aeronautical data visualization and mapping</span>
    <span class="info-text">         │ • Ruby on Rails fish tracking app optimization</span>
    <span class="info-text">         │ • Database redesign and denormalization</span>
    <span class="info-text">         └─ 📱 First taste of mobile development and database optimization</span>

    <span class="success-text">2015-2017 │ UNO CS Department - Programming Tutor</span>
    <span class="info-text">         │ • Tutored students in Java, C++, and Assembly</span>
    <span class="info-text">         │ • Developed teaching and mentoring skills</span>
    <span class="info-text">         └─ 👨‍🏫 Discovered passion for explaining complex concepts</span>

    <div class="command-category">💻 PROFESSIONAL CAREER AT RXNT (2017-Present)</div>

    <span class="success-text">2017-2021 │ Software Developer</span>
    <span class="info-text">         │ 📍 Entry Level → Experienced Developer</span>
    <span class="info-text">         │ • Joined RXNT Healthcare Technology</span>
    <span class="info-text">         │ • React, Node.js, .NET, and C# development</span>
    <span class="info-text">         │ • Mozilla react-jsonschema-form contributions</span>
    <span class="info-text">         │ • Form engine development using React with Redux</span>
    <span class="info-text">         │ • Agile methodology adoption</span>
    <span class="info-text">         │ • EHR (Electronic Health Records) product development</span>
    <span class="info-text">         │ • HIPAA compliance learning</span>
    <span class="info-text">         └─ 🏥 Immersion into healthcare technology domain</span>

    <span class="success-text">2021-2023 │ Senior Software Engineer & Tech Lead</span>
    <span class="info-text">         │ 📍 Individual Contributor → Technical Leadership</span>
    <span class="info-text">         │ • Technical leadership across multiple projects</span>
    <span class="info-text">         │ • Mentoring junior and mid-level developers</span>
    <span class="info-text">         │ • Architecture design and decision making</span>
    <span class="info-text">         │ • Public GitHub repository maintenance</span>
    <span class="info-text">         │ • Code review processes and quality standards</span>
    <span class="info-text">         │ • Cross-team collaboration and communication</span>
    <span class="info-text">         └─ 🎯 Transition from coding to leading technical initiatives</span>

    <span class="success-text">2023-2024 │ Engineering Manager (Current)</span>
    <span class="info-text">         │ 📍 Technical Leadership → People Management</span>
    <span class="info-text">         │ • Team leadership and people management</span>
    <span class="info-text">         │ • Engineering process optimization</span>
    <span class="info-text">         │ • Strategic technical decision making</span>
    <span class="info-text">         │ • Cross-functional stakeholder management</span>
    <span class="info-text">         │ • Healthcare platform modernization leadership</span>
    <span class="info-text">         │ • Microservices architecture initiatives</span>
    <span class="info-text">         │ • Team scaling and hiring processes</span>
    <span class="info-text">         │ • Performance management and career development</span>
    <span class="info-text">         └─ 👥 Learning that people problems are harder than code problems</span>

    <div class="command-category">🏆 KEY MILESTONES & ACHIEVEMENTS</div>

    <span class="success-text">🎓 University Education (2013-2017)</span>
    <span class="warning-text">   • Graduated Summa Cum Laude with University High Honors</span>
    <span class="warning-text">   • 4.0 Major GPA in Computer Science</span>
    <span class="warning-text">   • Published research work in protein structure prediction</span>

    <span class="success-text">🔬 Research Impact (2015-2017)</span>
    <span class="warning-text">   • Contributed to HIV protein research using advanced algorithms</span>
    <span class="warning-text">   • Developed iOS applications for naval research</span>
    <span class="warning-text">   • Optimized database performance for scientific applications</span>

    <span class="success-text">💻 Technical Growth (2017-2023)</span>
    <span class="warning-text">   • Mastered full-stack healthcare application development</span>
    <span class="warning-text">   • Led technical initiatives serving 1000+ healthcare practices</span>
    <span class="warning-text">   • Contributed to open-source projects and maintained public repositories</span>

    <span class="success-text">👥 Leadership Development (2021-Present)</span>
    <span class="warning-text">   • Mentored 10+ engineers</span>
    <span class="warning-text">   • Led platform modernization and microservices initiatives</span>

    <div class="command-category">📈 CAREER PROGRESSION SUMMARY</div>
    <span class="success-text">Total Experience: 8+ Years in Technology</span>
    <span class="info-text">├─ 4 Years Research & Education (2013-2017)</span>
    <span class="info-text">├─ 4 Years Software Development (2017-2021)</span>
    <span class="info-text">├─ 2 Years Technical Leadership (2021-2023)</span>
    <span class="info-text">└─ 1+ Years Engineering Management (2023-Present)</span>

    <span class="success-text">🎯 Next Chapter: Scaling teams, modernizing healthcare technology, and building the next generation of engineering leaders!</span>`,
    type: 'info',
    delay: 1,
  },

  // ---------------------------------------------------------------------------
  // VISION COMMAND - Engineering vision and strategic thinking
  // ---------------------------------------------------------------------------
  vision: {
    command: 'vision',
    output: `<div class="command-category">🚀 SAMIP'S ENGINEERING VISION & PHILOSOPHY</div>
    <div class="command-category">🏥 HEALTHCARE TECHNOLOGY VISION</div>
    <span class="success-text">Building Technology That Saves Lives:</span>
    <span class="info-text">• Creating healthcare systems that are both innovative and reliable</span>
    <span class="info-text">• Ensuring technology enhances patient care, not complicates it</span>
    <span class="info-text">• Balancing cutting-edge features with rock-solid stability</span>
    <span class="info-text">• Making healthcare data accessible while maintaining privacy and security</span>

    <div class="command-category">👥 TEAM LEADERSHIP PHILOSOPHY</div>
    <span class="success-text">People-First Engineering Management:</span>
    <span class="info-text">• Engineers are humans first, code writers second</span>
    <span class="info-text">• Creating psychological safety where "I don't know" is encouraged</span>
    <span class="info-text">• Empowering teams to make technical decisions and learn from outcomes</span>
    <span class="info-text">• Building diverse, inclusive teams that reflect our user base</span>

    <div class="command-category">🔮 STRATEGIC FOCUS AREAS</div>
    <span class="warning-text">• AI/ML integration for predictive healthcare analytics</span>
    <span class="warning-text">• Developer experience optimization and productivity improvements</span>
    <span class="warning-text">• Security-first architecture with zero-trust principles</span>
    <span class="warning-text">• Sustainable engineering practices and technical debt management</span>

    <div class="command-category">💭 CORE BELIEFS</div>
    <span class="success-text">"Great engineering isn't just about the code - it's about the people who write it."</span>
    <span class="info-text">"Every system we build should make healthcare providers' lives easier, not harder."</span>
    <span class="warning-text">"The best technical decision is the one your team can maintain at 3 AM."</span>
    <span class="success-text">"Innovation without reliability is just expensive chaos."</span>

    <span class="success-text">🎯 Mission: Building healthcare technology that scales with empathy and precision.</span>`,
    type: 'success',
    delay: 1,
  },

  // ---------------------------------------------------------------------------
  // EDUCATION COMMAND - Academic background and achievements
  // ---------------------------------------------------------------------------
  education: {
    command: 'education',
    output: `<div class="command-category">🎓 SAMIP'S EDUCATION & ACADEMIC ACHIEVEMENTS</div>
    <div class="command-category">🏛️ UNIVERSITY OF NEW ORLEANS (2013-2017)</div>
    <span class="success-text">Bachelor of Science in Computer Science</span>
    <span class="info-text">📍 New Orleans, Louisiana</span>
    <span class="info-text">🏆 Dean's List for 8 semesters (basically lived there)</span>

    <div class="command-category">📊 ACADEMIC PERFORMANCE</div>
    <span class="success-text">Major GPA: 4.0 / 4.0</span>
    <span class="info-text">Cumulative GPA: 3.95 / 4.0</span>

    <div class="command-category">📚 DOUBLE MINOR STUDIES</div>
    <span class="success-text">Minor in Mathematics</span>
    <span class="info-text">• Advanced algorithms and computational theory</span>
    <span class="info-text">• Statistical analysis and discrete mathematics</span>
    <span class="info-text">• Applied mathematical concepts to computer science problems</span>

    <span class="success-text">Minor in Biology</span>
    <span class="info-text">• Understanding biological systems and processes</span>
    <span class="info-text">• Research methodology and scientific analysis</span>

    <div class="command-category">🏅 HONORS & RECOGNITION</div>
    <span class="warning-text">• Homer L. Hitt Scholarship - Full ride covering tuition, room and board</span>
    <span class="warning-text">• Dean's List - 8 consecutive semesters</span>
    <span class="warning-text">• Undergraduate Honors Thesis on "Storing and Rendering Geospatial Data in Mobile Application"</span>

    <div class="command-category">🎯 LEADERSHIP & ACTIVITIES</div>
    <span class="info-text">• President, Nepalese Student Association of New Orleans</span>
    <span class="info-text">• Orientation Leader at University of New Orleans</span>
    <span class="info-text">• Programming Tutor (Java, C++, Assembly)</span>

    <span class="success-text">Strong academic foundation combining technical and scientific knowledge.</span>`,
    type: 'info',
    delay: 1,
  },

  // ---------------------------------------------------------------------------
  // CONTACT COMMAND - Professional contact information
  // ---------------------------------------------------------------------------
  contact: {
    command: 'contact',
    output: `<div class="command-category">📬 CONTACT SAMIP NEUPANE</div>
    <span class="success-text">Engineering Manager - Healthcare Technology</span>
    <span class="info-text">Open to discussing engineering leadership opportunities</span>

    <div class="command-category">📧 PROFESSIONAL CONTACT</div>
    <div class="command-item"><span class="command-name">LinkedIn:</span><span class="command-desc">linkedin.com/in/sneu012</span></div>
    <div class="command-item"><span class="command-name">Location:</span><span class="command-desc">Remote (EST/EDT)</span></div>
    <div class="command-item"><span class="command-name">GitHub:</span><span class="command-desc">github.com/sneu012</span></div>

    <div class="command-category">💼 CAREER INTERESTS</div>
    <div class="command-item"><span class="command-name">Roles:</span><span class="command-desc">Senior Engineering Manager, Director of Engineering</span></div>
    <div class="command-item"><span class="command-name">Industry Focus:</span><span class="command-desc">Healthcare Technology, FinTech, High-impact products</span></div>
    <div class="command-item"><span class="command-name">Team Size:</span><span class="command-desc">10-50 engineers</span></div>

    <span class="success-text">Key Interests:</span>
    <span class="info-text">   • Growing and scaling engineering teams</span>
    <span class="info-text">   • Technical strategy and architecture</span>
    <span class="info-text">   • Building high-performing remote teams</span>
    <span class="info-text">   • Mentoring engineers and watching them level up</span>
    <span class="info-text">   • Healthcare tech that actually improves patient outcomes</span>

    <span class="warning-text">"Great engineering leaders build both systems and people."</span>`,
    type: 'success',
    delay: 1,
  },
};

// =============================================================================
// SYSTEM STATUS CONFIGURATION
// =============================================================================

/**
 * System Status Indicators
 * Defines the status indicators displayed in the dashboard footer
 */
export const STATUS_INDICATORS = [
  {
    id: 'system',
    label: 'All Systems Operational',
    value: 'ONLINE',
    status: 'online' as const,
    icon: 'CheckCircle',
  },
  {
    id: 'performance',
    label: 'Performance Monitoring Active',
    value: 'ACTIVE',
    status: 'warning' as const,
    icon: 'Activity',
  },
  {
    id: 'productivity',
    label: 'Team Productivity: Optimal',
    value: 'OPTIMAL',
    status: 'online' as const,
    icon: 'TrendingUp',
  },
];

// =============================================================================
// ANIMATION & TIMING CONFIGURATION
// =============================================================================

/**
 * Animation Durations (in seconds)
 * Defines consistent timing values used throughout the application
 */
export const ANIMATION_DURATIONS = {
  FAST: 0.15,
  NORMAL: 0.2,
  SLOW: 0.3,
  GEAR_SLOW: 20,
  GEAR_MEDIUM: 12,
  GEAR_FAST: 8,
} as const;

// =============================================================================
// RESPONSIVE DESIGN CONFIGURATION
// =============================================================================

/**
 * Breakpoints for responsive design
 * Defines screen size breakpoints for responsive layouts
 */
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

/**
 * Z-Index scale
 * Defines consistent layering values for UI elements
 */
export const Z_INDEX = {
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070,
  TOAST: 1080,
} as const;

// =============================================================================
// TERMINAL CONFIGURATION
// =============================================================================

/**
 * Terminal Configuration
 * Defines terminal behavior, styling, and performance settings
 */
export const TERMINAL_CONFIG = {
  PROMPT: '$ ',
  WELCOME_MESSAGE: `<div class="welcome-message">
    <span class="success-text">Terminal v2.1.0</span>
    <span class="info-text">Interactive CLI for exploring professional background</span>
    <span class="warning-text">Status:</span> <span class="success-text">ONLINE</span> | <span class="info-text">Ready for commands</span>
    Type <span class="command-name">'help'</span> to see available commands.
    </div>`,
  TYPING_DELAY: 0.2, // Even faster typing speed
  // Removed MAX_HISTORY - keep all commands in session
} as const;

// =============================================================================
// DASHBOARD CONFIGURATION
// =============================================================================

/**
 * Dashboard Configuration
 * Defines dashboard behavior, update intervals, and animation settings
 */
export const DASHBOARD_CONFIG = {
  UPDATE_INTERVAL: 1000, // 1 second
  GAUGE_ANIMATION_DELAY: 500, // 0.5 seconds
  STEAM_PARTICLE_COUNT: 6,
  GEAR_ANIMATION_STAGGER: 0.2, // seconds between gear animations
} as const;
