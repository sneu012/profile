import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import type { MetricRadarProps } from '../../types';
import './MetricRadar.css';

export const MetricRadar: React.FC<MetricRadarProps> = ({ 
  metric, 
  isSelected, 
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get the icon component dynamically
  const IconComponent = Icons[metric.icon as keyof typeof Icons] as React.ComponentType<{ size?: number; style?: React.CSSProperties }>;


  return (
    <div
      className={`metric-radar ${isSelected ? 'selected' : ''} ${isHovered ? 'hovered' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        '--metric-color': metric.color
      } as React.CSSProperties}
    >
      {/* Radar Container */}
      <div className="radar-container">
        {/* Pulsing Rings */}
        <div className="radar-rings">
          <div className="radar-ring ring-1"></div>
          <div className="radar-ring ring-2"></div>
          <div className="radar-ring ring-3"></div>
        </div>

        {/* Radar Sweep */}
        <div 
          className="radar-sweep"
          style={{
            background: `conic-gradient(
              from 0deg,
              transparent 0deg,
              ${metric.color}99 270deg,
              transparent 300deg
            )`
          }}
        />

        {/* Center Content */}
        <div className="radar-center">
          <div
            className={`metric-icon ${isHovered ? 'hovered' : ''}`}
          >
            {IconComponent && (
              <IconComponent size={24} style={{ color: '#ffffff' }} />
            )}
          </div>
        </div>
      </div>

      {/* Radar Label */}
      <div className="radar-label">
        <h3>{metric.title}</h3>
        <p>{metric.description}</p>
      </div>

      {/* Mechanical Details */}
      <div className="mechanical-details">
        <div
          className="pressure-valve"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        />
        
        <div className="temperature-indicator animate-pulse" />

        {/* Bolts */}
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className={`bolt bolt-${i + 1}`}
          />
        ))}
      </div>

      {/* Steam Effects */}
      <div className="steam-container">
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={i}
            className="steam-particle animate-steam-gauge"
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        ))}
      </div>

      {/* Selection Indicator */}
      {isSelected && (
        <div
          className="selection-ring"
          style={{
            transform: 'scale(1)',
            opacity: 1,
            transition: 'all 0.3s ease'
          }}
        />
      )}
    </div>
  );
};
