// Core Application Types

export interface Metric {
  id: string;
  title: string;
  icon: string; // Lucide icon name
  color: string;
  description: string;
  category: 'leadership' | 'technical' | 'performance' | 'innovation' | 'education' | 'career';
}

export interface GearSystemConfig {
  size: 'small' | 'medium' | 'large';
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  speed: 'slow' | 'medium' | 'fast';
  direction: 'clockwise' | 'counterclockwise';
  gearCount?: number;
  satelliteCount?: number;
}

export interface TerminalCommand {
  command: string;
  output: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  delay?: number;
  callback?: () => void;
}

export interface TerminalHistoryEntry {
  type: 'command' | 'output';
  content: string;
  className?: string;
  timestamp: Date;
}

export interface StatusIndicator {
  id: string;
  label: string;
  value: string | number;
  status: 'online' | 'warning' | 'error' | 'offline';
  icon?: string;
}

export interface SystemMetrics {
  load: number;
  memory: number;
  processes: number;
  uptime: string;
  temperature: number;
}

// Component Props Types
export interface MechanicalDashboardProps {
  onTerminalToggle: () => void;
}

export interface TerminalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface MetricRadarProps {
  metric: Metric;
  isSelected: boolean;
  onClick: () => void;
}

export interface GearSystemProps extends GearSystemConfig {
  className?: string;
}

export interface StatusPanelProps {
  currentTime: Date;
  systemMetrics: SystemMetrics;
  indicators: StatusIndicator[];
}

// Animation Types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
  repeat?: boolean | number;
}

export interface MotionVariants {
  initial: Record<string, unknown>;
  animate: Record<string, unknown>;
  exit?: Record<string, unknown>;
  transition?: AnimationConfig;
}

// Theme Types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  border: string;
}

export interface MechanicalTheme {
  colors: ThemeColors;
  spacing: Record<string, string>;
  typography: Record<string, string>;
  shadows: Record<string, string>;
  animations: Record<string, AnimationConfig>;
}

// Utility Types
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Variant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
export type Status = 'idle' | 'loading' | 'success' | 'error';

// Event Handler Types
export type ClickHandler = (event: React.MouseEvent) => void;
export type KeyboardHandler = (event: React.KeyboardEvent) => void;
export type ChangeHandler<T = string> = (value: T) => void;

// API Types (for future backend integration)
export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
  error?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  experience: ExperienceItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  contact: ContactInfo;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
  years: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  duration: string;
  team: number;
  impact: string[];
  status: 'completed' | 'ongoing' | 'planned';
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  website?: string;
  phone?: string;
  location?: string;
}

// Hook Types
export interface UseTerminalReturn {
  history: TerminalHistoryEntry[];
  currentInput: string;
  isTyping: boolean;
  executeCommand: (command: string) => void;
  clearHistory: () => void;
  setCurrentInput: (input: string) => void;
}

export interface UseSystemMetricsReturn {
  metrics: SystemMetrics;
  indicators: StatusIndicator[];
  isLoading: boolean;
  error: string | null;
  refresh: () => void;
}

// Configuration Types
export interface AppConfig {
  theme: MechanicalTheme;
  animations: {
    enabled: boolean;
    reducedMotion: boolean;
  };
  terminal: {
    prompt: string;
    welcomeMessage: string;
    commands: Record<string, TerminalCommand>;
  };
  dashboard: {
    metrics: Metric[];
    gearSystems: GearSystemConfig[];
    updateInterval: number;
  };
}
