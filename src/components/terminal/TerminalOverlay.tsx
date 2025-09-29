import React, { useEffect, useRef } from 'react';
import { X, Terminal, Minimize2 } from 'lucide-react';
import { useTerminal } from '../../hooks/useTerminal';
import './TerminalOverlay.css';

interface TerminalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  initialCommand?: string;
}

export const TerminalOverlay: React.FC<TerminalOverlayProps> = ({ 
  isOpen, 
  onClose,
  initialCommand 
}) => {
  const { 
    history, 
    currentInput, 
    isTyping, 
    executeCommand, 
    setCurrentInput,
    initializeTerminal 
  } = useTerminal();
  
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const executeCommandRef = useRef(executeCommand);
  const initializeTerminalRef = useRef(initializeTerminal);
  
  // Update refs when functions change
  executeCommandRef.current = executeCommand;
  initializeTerminalRef.current = initializeTerminal;

  useEffect(() => {
    if (isOpen) {
      // Always clear and initialize when terminal opens
      initializeTerminalRef.current();
      setTimeout(() => {
        if (initialCommand) {
          executeCommandRef.current(initialCommand);
        } else {
          executeCommandRef.current('help');
        }
      }, 200); // Slightly longer delay to ensure initialization completes
      
      if (inputRef.current) {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 400); // Longer focus delay
      }
    }
  }, [isOpen, initialCommand]); // Removed history.length dependency

  useEffect(() => {
    if (outputRef.current) {
      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        if (outputRef.current) {
          const { scrollHeight, clientHeight } = outputRef.current;
          if (scrollHeight > clientHeight) {
            outputRef.current.scrollTo({
              top: scrollHeight,
              behavior: 'smooth'
            });
          }
        }
      });
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim()) {
      executeCommand(currentInput);
      setCurrentInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="terminal-backdrop" onClick={onClose}>
      <div 
        className="terminal-overlay animate-terminal-in"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-title">
            <Terminal size={16} />
            <span>Terminal v2.1.0</span>
          </div>
          <div className="terminal-controls">
            <button className="control-button minimize">
              <Minimize2 size={10} />
            </button>
            <button 
              className="control-button close" 
              onClick={onClose}
              aria-label="Close terminal"
              title="Close terminal"
            >
              <X size={10} />
            </button>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="terminal-content">
          <div className="terminal-output" ref={outputRef}>
            {history.map((entry, index) => (
              <div key={index} className="output-line">
                {entry.type === 'command' && (
                  <div className="prompt">
                    <span style={{ color: '#ff6b35' }}>samip.dev</span>
                    <span style={{ color: '#00ff88' }}>:</span>
                    <span style={{ color: '#00aaff' }}>~</span>
                    <span style={{ color: '#00ff00' }}>$ {entry.content}</span>
                  </div>
                )}
                {entry.type === 'output' && (
                  <div 
                    className="output-text" 
                    dangerouslySetInnerHTML={{ __html: entry.content }}
                  />
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="typing-indicator">
                <span className="typing-cursor">█</span>
                <span style={{ color: '#555' }}>Processing...</span>
              </div>
            )}
          </div>

          {/* Terminal Input */}
          <form onSubmit={handleSubmit} className="terminal-input-form">
            <div className="input-line">
              <span className="prompt">
                <span style={{ color: '#ff6b35' }}>samip.dev</span>
                <span style={{ color: '#00ff88' }}>:</span>
                <span style={{ color: '#00aaff' }}>~</span>
                <span style={{ color: '#00ff00' }}>$</span>
              </span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                className="terminal-input"
                placeholder="Type a command... (try 'help')"
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};