import React from 'react';
import './AnimatedBackground.css';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="animated-background">
      {/* Spinning Gears */}
      <div className="spinning-gears">
        <div className="gear large gear-1"></div>
        <div className="gear medium gear-2"></div>
        <div className="gear small gear-3"></div>
        <div className="gear medium gear-4"></div>
        <div className="gear large gear-5"></div>
        <div className="gear small gear-6"></div>
        <div className="gear medium gear-7"></div>
        <div className="gear small gear-8"></div>
      </div>

      {/* Mechanical Connectors */}
      <div className="mechanical-connectors">
        <div className="connector connector-1"></div>
        <div className="connector connector-2"></div>
        <div className="connector connector-3"></div>
        <div className="connector connector-4"></div>
        <div className="connector connector-5"></div>
      </div>

      {/* Floating Particles */}
      <div className="floating-particles">
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>

      {/* Technical Grid */}
      <div className="technical-grid"></div>

      {/* Pulse Rings */}
      <div className="pulse-rings">
        <div className="pulse-ring ring-1"></div>
        <div className="pulse-ring ring-2"></div>
        <div className="pulse-ring ring-3"></div>
      </div>

      {/* Circuit Patterns */}
      <div className="circuit-patterns">
        <div className="circuit-line circuit-1"></div>
        <div className="circuit-line circuit-2"></div>
        <div className="circuit-line circuit-3"></div>
        <div className="circuit-line circuit-4"></div>
        <div className="circuit-node node-1"></div>
        <div className="circuit-node node-2"></div>
        <div className="circuit-node node-3"></div>
        <div className="circuit-node node-4"></div>
      </div>

      {/* Code Rain Effect */}
      <div className="code-rain">
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className={`code-column code-column-${i + 1}`}>
            <div className="code-text">
              {i % 4 === 0 && 'React.js\nNode.js\nTypeScript\nC#\n.NET'}
              {i % 4 === 1 && 'async/await\nPromise\nresolve\nreject'}
              {i % 4 === 2 && 'git push\ngit pull\ngit merge\ncommit'}
              {i % 4 === 3 && 'SELECT *\nFROM users\nWHERE id\nUPDATE'}
            </div>
          </div>
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="geometric-shapes">
        <div className="shape triangle shape-1"></div>
        <div className="shape square shape-2"></div>
        <div className="shape circle shape-3"></div>
        <div className="shape hexagon shape-4"></div>
        <div className="shape triangle shape-5"></div>
        <div className="shape square shape-6"></div>
      </div>

      {/* Energy Flows */}
      <div className="energy-flows">
        <div className="energy-beam beam-1"></div>
        <div className="energy-beam beam-2"></div>
        <div className="energy-beam beam-3"></div>
      </div>
    </div>
  );
};
