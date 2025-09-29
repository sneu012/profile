// Terminal Hook
import { useState, useCallback, useRef } from 'react';
import type { TerminalHistoryEntry } from '../types';
import { TERMINAL_COMMANDS, TERMINAL_CONFIG } from '../utils/constants';

export const useTerminal = () => {
  const [history, setHistory] = useState<TerminalHistoryEntry[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Removed addToHistory and typeText - functionality inlined where needed

  const executeCommand = useCallback((command: string) => {
    const trimmedCommand = command.toLowerCase().trim();
    
    if (!trimmedCommand) return;

    // Add command to history
    setCommandHistory(prev => [...prev, trimmedCommand]);
    
    // Add command to terminal display
    setHistory(prev => [
      ...prev,
      { 
        type: 'command', 
        content: `${TERMINAL_CONFIG.PROMPT}${trimmedCommand}`,
        timestamp: new Date()
      }
    ]);

    // Handle special commands
    if (trimmedCommand === 'clear') {
      setTimeout(() => {
        setHistory([]);
      }, 100);
      return;
    }

    // Find and execute command
    const commandConfig = TERMINAL_COMMANDS[trimmedCommand];
    if (commandConfig) {
      if (commandConfig.output) {
        // Clear any existing typing timeout
        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
        }
        
        setIsTyping(true);
        const lines = commandConfig.output.split('\n');
        let currentLineIndex = 0;
        let currentCharIndex = 0;
        let currentLine = '';

        const typeNextChar = () => {
          if (currentLineIndex < lines.length) {
            if (currentCharIndex < lines[currentLineIndex].length) {
              currentLine += lines[currentLineIndex][currentCharIndex];
              currentCharIndex++;
              
              // Update the current line being typed
              setHistory(prev => {
                const newHistory = [...prev];
                if (newHistory.length > 0 && newHistory[newHistory.length - 1].type === 'output') {
                  newHistory[newHistory.length - 1] = {
                    ...newHistory[newHistory.length - 1],
                    content: currentLine
                  };
                }
                return newHistory;
              });
            } else {
              // Finished current line, move to next
              currentLineIndex++;
              currentCharIndex = 0;
              currentLine = '';
              
              if (currentLineIndex < lines.length) {
                // Add new line for next content
                setHistory(prev => [
                  ...prev,
                  { type: 'output', content: '', timestamp: new Date() }
                ]);
              }
            }
            
            typingTimeoutRef.current = setTimeout(typeNextChar, commandConfig.delay || TERMINAL_CONFIG.TYPING_DELAY);
          } else {
            setIsTyping(false);
          }
        };

        // Start with empty output line
        setHistory(prev => [
          ...prev,
          { type: 'output', content: '', timestamp: new Date() }
        ]);
        typeNextChar();
      }
      
      // Execute callback if provided
      if (commandConfig.callback) {
        setTimeout(commandConfig.callback, 100);
      }
    } else {
      // Command not found
      setHistory(prev => [
        ...prev,
        { 
          type: 'output', 
          content: `Command not found: ${trimmedCommand}\nType 'help' for available commands.`,
          className: 'error',
          timestamp: new Date()
        }
      ]);
    }

    setCurrentInput('');
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    setCurrentInput('');
    setIsTyping(false);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
  }, []);

  const initializeTerminal = useCallback(() => {
    // Clear history and state for fresh start
    setHistory([]);
    setCurrentInput('');
    setIsTyping(false);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    
    // Initialize with welcome message
    setTimeout(() => {
      // Clear any existing typing timeout
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      
      setIsTyping(true);
      const lines = TERMINAL_CONFIG.WELCOME_MESSAGE.split('\n');
      let currentLineIndex = 0;
      let currentCharIndex = 0;
      let currentLine = '';

      const typeNextChar = () => {
        if (currentLineIndex < lines.length) {
          if (currentCharIndex < lines[currentLineIndex].length) {
            currentLine += lines[currentLineIndex][currentCharIndex];
            currentCharIndex++;
            
            // Update the current line being typed
            setHistory(prev => {
              const newHistory = [...prev];
              if (newHistory.length > 0 && newHistory[newHistory.length - 1].type === 'output') {
                newHistory[newHistory.length - 1] = {
                  ...newHistory[newHistory.length - 1],
                  content: currentLine
                };
              }
              return newHistory;
            });
          } else {
            // Finished current line, move to next
            currentLineIndex++;
            currentCharIndex = 0;
            currentLine = '';
            
            if (currentLineIndex < lines.length) {
              // Add new line for next content
              setHistory(prev => [
                ...prev,
                { type: 'output', content: '', timestamp: new Date() }
              ]);
            }
          }
          
          typingTimeoutRef.current = setTimeout(typeNextChar, TERMINAL_CONFIG.TYPING_DELAY);
        } else {
          setIsTyping(false);
        }
      };

      // Start with empty output line
      setHistory(prev => [
        ...prev,
        { type: 'output', content: '', timestamp: new Date() }
      ]);
      typeNextChar();
    }, 100);
  }, []);

  return {
    history,
    currentInput,
    isTyping,
    executeCommand,
    clearHistory,
    setCurrentInput,
    initializeTerminal,
    commandHistory,
  };
};

// Removed unused ExtendedUseTerminalReturn interface
