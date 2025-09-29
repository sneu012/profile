import React from 'react';
import { X, Calendar, MapPin, Award, Code, Users, Briefcase, GraduationCap, FlaskConical, Zap } from 'lucide-react';
import './CareerTimeline.css';

interface CareerTimelineProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TimelineItem {
  id: string;
  period: string;
  title: string;
  company: string;
  location: string;
  type: 'education' | 'research' | 'work';
  description: string;
  achievements: string[];
  technologies?: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 'education',
    period: '2013-2017',
    title: 'Bachelor of Science in Computer Science',
    company: 'University of New Orleans',
    location: 'New Orleans, LA',
    type: 'education',
    description: 'Graduated Summa Cum Laude with University High Honors, maintaining a 4.0 Major GPA while pursuing minors in Mathematics and Biology.',
    achievements: [
      'Dean\'s List for 8 consecutive semesters',
      '4.0 Major GPA in Computer Science',
      'University High Honors and Department Honors',
      'President, Nepalese Student Association',
      'Orientation Leader',
      'Programming Tutor for Java, C++, and Assembly'
    ],
    icon: GraduationCap,
    color: '#9b59b6'
  },
  {
    id: 'research-summa',
    period: '2015-2016',
    title: 'Undergraduate Research Assistant',
    company: 'Summa Lab, University of New Orleans',
    location: 'New Orleans, LA',
    type: 'research',
    description: 'Conducted cutting-edge research in protein structure prediction using advanced computational methods.',
    achievements: [
      'Protein Structure Prediction using Genetic Algorithms',
      'Focused on HIV surface proteins gp120 & gp41',
      'Monte Carlo methods and Threading techniques',
      'Published research contributions'
    ],
    technologies: ['Genetic Algorithms', 'Monte Carlo', 'Threading', 'Bioinformatics'],
    icon: FlaskConical,
    color: '#e74c3c'
  },
  {
    id: 'research-canizaro',
    period: '2016-2017',
    title: 'Undergraduate Research Assistant',
    company: 'Canizaro Livingston Gulf States Center',
    location: 'New Orleans, LA',
    type: 'research',
    description: 'Developed mobile applications and optimized databases for naval research and environmental tracking.',
    achievements: [
      'iOS app development for U.S Naval Research Laboratory',
      'Aeronautical data visualization and mapping',
      'Ruby on Rails fish tracking app optimization',
      'Database redesign and denormalization'
    ],
    technologies: ['iOS', 'Swift', 'Ruby on Rails', 'Database Design', 'GIS'],
    icon: FlaskConical,
    color: '#3498db'
  },
  {
    id: 'software-developer',
    period: '2017-2021',
    title: 'Software Developer',
    company: 'RXNT Healthcare Technology',
    location: 'Annapolis, MD (Remote)',
    type: 'work',
    description: 'Started my professional career in healthcare technology, building EHR systems and learning the complexities of healthcare software.',
    achievements: [
      'React, Node.js, .NET, and C# development',
      'Mozilla react-jsonschema-form contributions',
      'Form engine development using React with Redux',
      'Agile methodology adoption',
      'EHR (Electronic Health Records) product development',
      'HIPAA compliance implementation'
    ],
    technologies: ['React', 'Node.js', '.NET', 'C#', 'Redux', 'JavaScript', 'SQL Server'],
    icon: Code,
    color: '#00ff88'
  },
  {
    id: 'senior-engineer',
    period: '2021-2023',
    title: 'Senior Software Engineer & Tech Lead',
    company: 'RXNT Healthcare Technology',
    location: 'Annapolis, MD (Remote)',
    type: 'work',
    description: 'Transitioned into technical leadership, mentoring developers and leading architectural decisions across multiple healthcare projects.',
    achievements: [
      'Technical leadership across multiple projects',
      'Mentoring junior and mid-level developers',
      'Architecture design and decision making',
      'Public GitHub repository maintenance',
      'Code review processes and quality standards',
      'Cross-team collaboration and communication'
    ],
    technologies: ['System Architecture', 'Team Leadership', 'Open Source', 'DevOps', 'Mentoring'],
    icon: Zap,
    color: '#f39c12'
  },
  {
    id: 'engineering-manager',
    period: '2023-Present',
    title: 'Engineering Manager',
    company: 'RXNT Healthcare Technology',
    location: 'Annapolis, MD (Remote)',
    type: 'work',
    description: 'Leading engineering teams and driving strategic technical initiatives while modernizing healthcare platform architecture.',
    achievements: [
      'Team leadership and people management',
      'Engineering process optimization',
      'Strategic technical decision making',
      'Cross-functional stakeholder management',
      'Healthcare platform modernization leadership',
      'Microservices architecture initiatives',
      'Team scaling and hiring processes',
      'Performance management and career development'
    ],
    technologies: ['People Management', 'Strategic Planning', 'Microservices', 'Platform Architecture'],
    icon: Users,
    color: '#ff6b35'
  }
];

export const CareerTimeline: React.FC<CareerTimelineProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'education':
        return GraduationCap;
      case 'research':
        return FlaskConical;
      case 'work':
        return Briefcase;
      default:
        return Calendar;
    }
  };

  return (
    <div className="timeline-backdrop">
      <div className="timeline-modal">
        {/* Header */}
        <div className="timeline-header">
          <div className="timeline-title">
            <Calendar size={24} />
            <h2>Career Timeline</h2>
            <span className="timeline-subtitle">From Research to Engineering Leadership</span>
          </div>
          <button 
            className="timeline-close-btn" 
            onClick={onClose}
            aria-label="Close career timeline"
            title="Close career timeline"
          >
            <X size={20} />
          </button>
        </div>

        {/* Timeline Content */}
        <div className="timeline-content">
          <div className="timeline-container">
            {timelineData.map((item, index) => {
              const IconComponent = item.icon;
              const TypeIcon = getTypeIcon(item.type);
              
              return (
                <div key={item.id} className={`timeline-item ${item.type}`} style={{ '--item-color': item.color } as React.CSSProperties}>
                  {/* Timeline Line */}
                  <div className="timeline-line">
                    <div className="timeline-dot">
                      <IconComponent size={16} />
                    </div>
                    {index < timelineData.length - 1 && <div className="timeline-connector" />}
                  </div>

                  {/* Content Card */}
                  <div className="timeline-card">
                    <div className="card-header">
                      <div className="card-title-section">
                        <div className="card-period">
                          <Calendar size={14} />
                          <span>{item.period}</span>
                        </div>
                        <h3 className="card-title">{item.title}</h3>
                        <div className="card-company">
                          <TypeIcon size={14} />
                          <span>{item.company}</span>
                        </div>
                        <div className="card-location">
                          <MapPin size={14} />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      <div className="card-type-badge" data-type={item.type}>
                        {item.type}
                      </div>
                    </div>

                    <div className="card-description">
                      <p>{item.description}</p>
                    </div>

                    <div className="card-achievements">
                      <h4>
                        <Award size={14} />
                        Key Achievements
                      </h4>
                      <ul>
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    {item.technologies && (
                      <div className="card-technologies">
                        <h4>
                          <Code size={14} />
                          Technologies & Skills
                        </h4>
                        <div className="tech-tags">
                          {item.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary Stats */}
          <div className="timeline-summary">
            <h3>Career Journey Summary</h3>
            <div className="summary-stats">
              <div className="stat-item">
                <GraduationCap size={20} />
                <div>
                  <span className="stat-number">4</span>
                  <span className="stat-label">Years Education</span>
                </div>
              </div>
              <div className="stat-item">
                <FlaskConical size={20} />
                <div>
                  <span className="stat-number">3</span>
                  <span className="stat-label">Research Projects</span>
                </div>
              </div>
              <div className="stat-item">
                <Briefcase size={20} />
                <div>
                  <span className="stat-number">8+</span>
                  <span className="stat-label">Years Professional</span>
                </div>
              </div>
              <div className="stat-item">
                <Users size={20} />
                <div>
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Engineers Mentored</span>
                </div>
              </div>
            </div>
            <div className="career-philosophy">
              <p>"From algorithms to architecture to people - every step builds on the last!"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
