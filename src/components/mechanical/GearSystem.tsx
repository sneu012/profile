import React from 'react';
import type { GearSystemProps } from '../../types';
import './GearSystem.css';

export const GearSystem: React.FC<GearSystemProps> = ({ 
  size, 
  position, 
  speed, 
  direction,
  gearCount = 12,
  satelliteCount = 2,
  className = ''
}) => {
  const getAnimationClass = (speed: string, direction: string) => {
    const speedClass = `rotate-${speed}`;
    const directionClass = direction === 'clockwise' ? 'clockwise' : 'counterclockwise';
    return `${speedClass} ${directionClass}`;
  };

  const mainAnimationClass = getAnimationClass(speed, direction);
  const satelliteAnimationClass = getAnimationClass(speed, direction === 'clockwise' ? 'counterclockwise' : 'clockwise');

  const getGearTeeth = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <div 
        key={i} 
        className="tooth" 
        style={{ 
          transform: `rotate(${i * (360 / count)}deg)` 
        }} 
      />
    ));
  };

  return (
    <div 
      className={`gear-system gear-system-${size} ${className}`}
      style={position}
    >
      {/* Main Central Gear */}
      <div
        className={`gear main-gear ${mainAnimationClass}`}
      >
        <div className="gear-teeth">
          {getGearTeeth(gearCount)}
        </div>
        <div className="gear-center" />
        <div className="gear-inner-ring" />
      </div>

      {/* Satellite Gears */}
      {Array.from({ length: satelliteCount }, (_, i) => (
        <div
          key={`satellite-${i}`}
          className={`gear satellite-gear satellite-${i + 1} ${satelliteAnimationClass}`}
        >
          <div className="gear-teeth">
            {getGearTeeth(Math.floor(gearCount * 0.6))}
          </div>
          <div className="gear-center" />
        </div>
      ))}

      {/* Mechanical Elements */}
      <div className="mechanical-elements">
        <div
          className={`piston animate-piston-${speed}`}
        />
        
        {size !== 'small' && (
          <div
            className={`connecting-rod animate-rod-${speed}`}
          />
        )}

        {size === 'large' && (
          <div
            className={`flywheel ${mainAnimationClass}`}
          />
        )}
      </div>

      {/* Steam/Smoke Effects */}
      <div className="steam-effects">
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={`steam-${i}`}
            className="steam-puff animate-steam"
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        ))}
      </div>

      {/* Pressure Gauges for larger systems */}
      {size === 'large' && (
        <div className="pressure-gauges">
          <div className="mini-gauge gauge-1">
            <div className="gauge-needle animate-needle-1" />
          </div>
          <div className="mini-gauge gauge-2">
            <div className="gauge-needle animate-needle-2" />
          </div>
        </div>
      )}
    </div>
  );
};
