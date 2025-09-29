import React from 'react';
import { MapPin, Clock, Award, TrendingUp } from 'lucide-react';
import './StatusPanel.css';

export const StatusPanel: React.FC = () => {
  return (
    <div className="status-panel">
      {/* Current Status */}
      <div className="panel-section">
        <div className="section-header">
          <TrendingUp size={14} />
          <span>Current Status</span>
          <div className="status-dot online"></div>
        </div>

        <div className="status-content">
          <div className="status-item">
            <MapPin size={14} color="#00ff88" />
            <div className="status-info">
              <span className="status-label">Location</span>
              <span className="status-value">Remote 🌍</span>
            </div>
          </div>

          <div className="status-item">
            <Clock size={14} color="#f7931e" />
            <div className="status-info">
              <span className="status-label">Availability</span>
              <span className="status-value">Always Exploring 🌌</span>
            </div>
          </div>

          <div className="status-item">
            <Award size={14} color="#00a8cc" />
            <div className="status-info">
              <span className="status-label">Focus</span>
              <span className="status-value">Healthcare Tech & Leadership</span>
            </div>
          </div>
        </div>

        <div className="status-alert">
          <div className="alert-dot success"></div>
          <span>Always exploring 🌌</span>
        </div>
      </div>

      {/* Career Highlights */}
      <div className="panel-section">
        <div className="section-header">
          <Award size={14} />
          <span>Career Highlights</span>
        </div>

        <div className="highlights-list">
          <div className="highlight-item">
            <div className="highlight-number">8+</div>
            <div className="highlight-text">Years in Healthcare Tech</div>
            <div className="highlight-bar" style={{ backgroundColor: '#ff6b35', width: '85%' }}></div>
          </div>

          <div className="highlight-item">
            <div className="highlight-number">2+</div>
            <div className="highlight-text">Years Leading Teams</div>
            <div className="highlight-bar" style={{ backgroundColor: '#00ff88', width: '75%' }}></div>
          </div>

          <div className="highlight-item">
            <div className="highlight-number">10+</div>
            <div className="highlight-text">Engineers Mentored</div>
            <div className="highlight-bar" style={{ backgroundColor: '#00a8cc', width: '80%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};