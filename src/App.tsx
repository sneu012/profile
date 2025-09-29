import { useState } from 'react';
import { MechanicalDashboard } from './components/mechanical/MechanicalDashboard';
import { TerminalOverlay } from './components/terminal/TerminalOverlay';
import { CareerTimeline } from './components/mechanical/CareerTimeline';
import { AnimatedBackground } from './components/mechanical/AnimatedBackground';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [initialCommand, setInitialCommand] = useState<string | undefined>(undefined);
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);

  const handleTerminalToggle = (command?: string) => {
    setInitialCommand(command);
    setIsTerminalOpen(!isTerminalOpen);
  };

  const handleTerminalClose = () => {
    setIsTerminalOpen(false);
    setInitialCommand(undefined);
  };

  const handleTimelineToggle = () => {
    setIsTimelineOpen(!isTimelineOpen);
  };

  const handleTimelineClose = () => {
    setIsTimelineOpen(false);
  };

  return (
    <div className="app">
      <AnimatedBackground />
      <MechanicalDashboard 
        onOpenTerminal={handleTerminalToggle}
        onOpenTimeline={handleTimelineToggle}
      />
      <TerminalOverlay 
        isOpen={isTerminalOpen} 
        onClose={handleTerminalClose}
        initialCommand={initialCommand}
      />
      <CareerTimeline
        isOpen={isTimelineOpen}
        onClose={handleTimelineClose}
      />
    </div>
  );
}

export default App;