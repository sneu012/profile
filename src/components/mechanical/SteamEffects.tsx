import React from 'react';
import { DASHBOARD_CONFIG } from '../../utils/constants';
import './SteamEffects.css';

export const SteamEffects: React.FC = () => {
  return (
    <div className="steam-effects-container">
      {Array.from({ length: DASHBOARD_CONFIG.STEAM_PARTICLE_COUNT }, (_, i) => (
        <div
          key={`steam-particle-${i}`}
          className="steam-particle animate-steam-main"
          style={{
            left: `${20 + i * 15}%`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
      
      {/* Additional steam vents */}
      <div className="steam-vents">
        <div className="steam-vent vent-1">
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={`vent1-${i}`}
              className="vent-particle animate-vent-1"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
        
        <div className="steam-vent vent-2">
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={`vent2-${i}`}
              className="vent-particle animate-vent-2"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
