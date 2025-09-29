import React, { useState } from 'react';
import { Terminal, Briefcase, Code, Award, Mail } from 'lucide-react';
// Commented out for later: Settings, Download
import { GearSystem } from './GearSystem';
import { MetricRadar } from './MetricRadar';
import { StatusPanel } from './StatusPanel';
import { SteamEffects } from './SteamEffects';
import { MetricModal } from './MetricModal';
import { useMetrics } from '../../hooks/useMetrics';
import type { Metric } from '../../types';
import './MechanicalDashboard.css';

interface MechanicalDashboardProps {
  onOpenTerminal: (command?: string) => void;
  onOpenTimeline: () => void;
}

export const MechanicalDashboard: React.FC<MechanicalDashboardProps> = ({ 
  onOpenTerminal,
  onOpenTimeline 
}) => {
  const { metrics } = useMetrics();
  const [selectedMetric, setSelectedMetric] = useState<Metric | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('overview');

  const handleMetricClick = (metric: Metric) => {
    setSelectedMetric(metric);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMetric(null);
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  // Function to get section-specific content
  const getSectionContent = () => {
    switch (activeSection) {
      case 'overview':
        return {
          title: 'Overview',
          subtitle: 'What I\'ve been up to (with feelings involved)',
          description: '👋 Engineering Manager, where I spend my days trying to keep systems running and my team motivated. Over eight years, I\'ve mastered the art of identifying which five-minute task will secretly take three weeks. Still figuring things out, but having fun doing it! ☕',
          metrics: metrics.filter(m => ['system-design', 'people-compiler', 'rubber-duck-debugging', 'merge-conflicts', 'investigative-prowess', 'technical-debt', 'vibe-coder'].includes(m.id)),
          actions: [
            { icon: Briefcase, label: 'View Projects', primary: true },
            { icon: Code, label: 'Tech Stack', primary: false },
            { icon: Award, label: 'What I\'ve Learned', primary: false }
          ]
        };
      case 'experience':
        return {
          title: 'Professional Experience',
          subtitle: 'From UNO research to RXNT Engineering Manager (debugging life since 2015)',
          description: `Started with university research in protein structure prediction and iOS development, then joined RXNT in 2017 as a Software Developer. Each role taught me something new about technology, research, and leading teams.`,
          metrics: metrics.filter(m => ['uno-foundation', 'software-engineer-growth', 'senior-engineer-mentoring', 'engineering-manager-transition'].includes(m.id)),
          actions: [
            { icon: Briefcase, label: 'Career Timeline', primary: true }
          ]
        };
      case 'projects':
        return {
          title: 'Project Portfolio',
          subtitle: 'Things I\'ve built (with minimal crying and maximum coffee)',
          description: '🏗️ Here are the main types of projects I\'ve been involved in at RXNT. Each card represents a different area where I\'ve contributed to building and improving healthcare technology.',
          metrics: metrics.filter(m => ['platform-modernization', 'api-development', 'system-integration', 'team-projects'].includes(m.id)),
          actions: [
          ]
        };
      case 'skills':
        return {
          title: 'Skills & Technologies',
          subtitle: 'My toolkit (constantly expanding like my coffee addiction)',
          description: '🛠️ Here are the main technologies and skills I work with daily. Each card shows my comfort level and experience with that particular area. Always learning something new!',
          metrics: metrics.filter(m => ['csharp-dotnet', 'node-js', 'react', 'mssql', 'cosmos-db', 'azure-cloud', 'git-version-control', 'team-leadership', 'healthcare-domain'].includes(m.id)),
          actions: [
          ]
        };
      default:
        return {
          title: 'Overview',
          subtitle: 'What I\'ve been up to at RXNT',
          description: '👋 Engineering Manager at RXNT, where I spend my days trying to keep healthcare systems running and my team caffeinated. 5+ years of learning that "it works on my machine" doesn\'t count in healthcare, and that HIPAA compliance is both a blessing and a curse. Still figuring things out, but having fun doing it! ☕',
          metrics: metrics,
          actions: [
            { icon: Briefcase, label: 'View Projects', primary: true },
            { icon: Code, label: 'Tech Stack', primary: false },
            { icon: Award, label: 'What I\'ve Learned', primary: false }
          ]
        };
    }
  };


  const handleContact = () => {
    // Implement contact functionality
    window.open('mailto:sneu012@gmail.com', '_blank');
  };


  return (
    <div className="mechanical-dashboard">
      {/* Background Gear Systems */}
      <div className="background-gears">
        <GearSystem
          size="large"
          position={{ top: '8%', left: '3%' }}
          speed="slow"
          direction="clockwise"
          gearCount={16}
          satelliteCount={3}
          className="bg-gear-1"
        />
        <GearSystem
          size="medium"
          position={{ top: '65%', right: '5%' }}
          speed="medium"
          direction="counterclockwise"
          gearCount={12}
          satelliteCount={2}
          className="bg-gear-2"
        />
        <GearSystem
          size="small"
          position={{ bottom: '12%', left: '12%' }}
          speed="fast"
          direction="clockwise"
          gearCount={8}
          satelliteCount={1}
          className="bg-gear-3"
        />
      </div>

      {/* Header Panel */}
      <header className="dashboard-header animate-slide-down">
        <div className="header-content">
          <div className="logo-section">
            <div className="engineer-logo">
              <div className="logo-gear rotate-slow clockwise">
                <div className="gear-teeth">
                  {Array.from({ length: 12 }, (_, i) => (
                    <div key={i} className="gear-tooth" style={{ transform: `rotate(${i * 30}deg)` }} />
                  ))}
                </div>
                <div className="gear-center">
                  <img 
                    src="/profile.jpeg" 
                    alt="Samip Neupane" 
                    className="profile-image"
                  />
                </div>
              </div>
            </div>
            <div className="title-section">
              <h1 className="engineer-name">Samip Neupane</h1>
              <p className="engineer-subtitle">Curious • Naive</p>
            </div>
          </div>

          <div className="header-controls">
            <button 
              className="control-button terminal-btn" 
              onClick={() => onOpenTerminal()}
              aria-label="Open terminal interface"
              title="Open terminal interface"
            >
              <Terminal size={18} />
              <span>Terminal</span>
            </button>
            {/* <button className="control-button" onClick={handleDownloadResume}>
              <Download size={18} />
              <span>Resume</span>
            </button> */}
            <button 
              className="control-button" 
              onClick={handleContact}
              aria-label="Send email to contact"
              title="Send email to contact"
            >
              <Mail size={18} />
              <span>Contact</span>
            </button>
            {/* <button className="control-button" onClick={handleSettings}>
              <Settings size={18} />
              <span>Settings</span>
            </button> */}
          </div>
        </div>
      </header>

      {/* Navigation Panel */}
      <nav className="navigation-panel animate-slide-in-left">
        <div className="nav-content">
          <h3>Sections</h3>
          <div className="nav-buttons">
            {['overview', 'experience', 'projects', 'skills'].map((section) => (
              <button
                key={section}
                className={`nav-btn ${activeSection === section ? 'active' : ''}`}
                onClick={() => handleSectionChange(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="dashboard-main">
        {(() => {
          const sectionContent = getSectionContent();
          return (
            <>
              <div className="section-header">
                <div className="section-title-area">
                  <h2>{sectionContent.title}</h2>
                  <p className="section-subtitle">{sectionContent.subtitle}</p>
                </div>
                <div className="section-indicator">
                  <div className="indicator-dot animate-pulse-dot" />
                  <span>Live Metrics</span>
                </div>
              </div>

              {/* Section Description */}
              <div className="section-description animate-fade-in">
                <p>{sectionContent.description}</p>
              </div>

              <div className="metrics-grid animate-fade-in">
                {sectionContent.metrics.map((metric, index) => (
                  <div 
                    key={metric.id} 
                    className="metric-container" 
                    style={{ animationDelay: `${index * 0.15}s` }}
                    data-category={metric.category}
                  >
                    <MetricRadar
                      metric={metric}
                      onClick={() => handleMetricClick(metric)}
                      isSelected={selectedMetric?.id === metric.id}
                    />
                  </div>
                ))}
              </div>

              {/* Dynamic Actions */}
              <div className="portfolio-actions animate-slide-up">
                <div className="action-group">
                  {sectionContent.actions.map((action, index) => {
                    const IconComponent = action.icon;
                    const handleActionClick = () => {
                      switch (action.label) {
                        case 'View Projects':
                          window.open('https://github.com/sneu012', '_blank');
                          break;
                        case 'Tech Stack':
                          setActiveSection('skills');
                          break;
                        case 'What I\'ve Learned':
                          setActiveSection('experience');
                          break;
                        case 'Career Timeline':
                          // Open the beautiful timeline UI
                          onOpenTimeline();
                          break;
                        case 'Technical Deep Dive':
                          setActiveSection('skills');
                          break;
                        case 'Project Impact':
                          // Show project-specific metrics or open GitHub
                          window.open('https://github.com/sneu012', '_blank');
                          break;
                        case 'Team Collaboration': {
                          // Highlight leadership/team metrics
                          const teamMetrics = document.querySelectorAll('[data-category="leadership"]');
                          if (teamMetrics.length > 0) {
                            teamMetrics[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }
                          break;
                        }
                        case 'Tech Stack Details':
                          // Open terminal with techstack command
                          onOpenTerminal('techstack');
                          break;
                        case 'Learning Goals':
                          // Open terminal with learning command
                          onOpenTerminal('learning');
                          break;
                        case 'Mentoring Approach':
                          // Open terminal with mentoring command
                          onOpenTerminal('mentoring');
                          break;
                        default:
                          // Handler not implemented yet
                      }
                    };
                    
                    return (
                      <button 
                        key={index}
                        className={`portfolio-action ${action.primary ? 'primary' : 'secondary'}`}
                        onClick={handleActionClick}
                      >
                        <IconComponent size={20} />
                        <span>{action.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })()}
      </main>

      {/* Right Side Panel */}
      <aside className="dashboard-sidebar animate-slide-in-right">
        <StatusPanel />
      </aside>

      {/* Steam Effects */}
      <SteamEffects />

      {/* Footer Contact Bar */}
      <footer className="dashboard-footer animate-slide-up">
        <div className="footer-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="label">Samip Neupane:</span>
              <span className="value">Engineering Manager at RXNT</span>
            </div>
            <div className="contact-item">
              <span className="label">Location:</span>
              <span className="value">Remote 🌍</span>
            </div>
            <div className="contact-item">
              <span className="label">Status:</span>
              <span className="value status-available">Always exploring 🌌</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://linkedin.com/in/sneu012" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/sneu012" target="_blank" rel="noopener noreferrer" className="social-link github">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <div className="portfolio-status">
              <div className="indicator-dot animate-pulse-dot" />
              <span>Active</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Metric Modal */}
      <MetricModal
        metric={selectedMetric}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};