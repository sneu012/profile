import React from 'react';
import { X, TrendingUp, Target, Award } from 'lucide-react';
import * as Icons from 'lucide-react';
import type { Metric } from '../../types';
import './MetricModal.css';

interface MetricModalProps {
  metric: Metric | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MetricModal: React.FC<MetricModalProps> = ({ 
  metric, 
  isOpen, 
  onClose 
}) => {
  if (!isOpen || !metric) return null;

  const Icon = Icons[metric.icon as keyof typeof Icons] as React.ComponentType<{ size?: number; color?: string }>;

  return (
    <div className={`metric-detail-panel ${isOpen ? 'open' : ''}`}>
      <div className="panel-header">
        <div className="panel-title">
          {Icon && <Icon size={28} color={metric.color} />}
          <div className="title-content">
            <h3>{metric.title}</h3>
            <span className="metric-category">{metric.category}</span>
          </div>
        </div>
        <button className="close-panel-btn" onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      <div className="panel-content">
        {/* Description */}
        <div className="metric-description">
          <p>{metric.description}</p>
        </div>

        {/* Category-specific content */}
        <div className="category-details">
          <h4>🎯 Details</h4>
          {metric.category === 'leadership' && (
            <div className="detail-list">
              <div className="detail-item">
                <Award size={14} />
                <span>Team collaboration and mentoring</span>
              </div>
              <div className="detail-item">
                <TrendingUp size={14} />
                <span>Continuous improvement focus</span>
              </div>
            </div>
          )}
          {metric.category === 'technical' && (
            <div className="detail-list">
              <div className="detail-item">
                <Target size={14} />
                <span>Code quality and architecture</span>
              </div>
              <div className="detail-item">
                <TrendingUp size={14} />
                <span>Performance optimization</span>
              </div>
            </div>
          )}
          {metric.category === 'performance' && (
            <div className="detail-list">
              <div className="detail-item">
                <TrendingUp size={14} />
                <span>System efficiency metrics</span>
              </div>
              <div className="detail-item">
                <Target size={14} />
                <span>Optimization targets</span>
              </div>
            </div>
          )}
          {metric.category === 'innovation' && (
            <div className="detail-list">
              <div className="detail-item">
                <Award size={14} />
                <span>Creative problem solving</span>
              </div>
              <div className="detail-item">
                <TrendingUp size={14} />
                <span>Process improvements</span>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};