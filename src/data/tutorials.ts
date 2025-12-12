// Tutorial data structure for navigation

export interface Tutorial {
  id: string;
  number: number;
  title: string;
  slug: string;
  description: string;
  published: boolean;
  track: string;
}

export interface Track {
  id: string;
  name: string;
  color: string;
  icon: string;
  totalTutorials: number;
}

export const tracks: Record<string, Track> = {
  technician: {
    id: 'technician',
    name: 'Technician Track',
    color: 'machineGreen',
    icon: '🟢',
    totalTutorials: 10
  },
  developer: {
    id: 'developer',
    name: 'Developer Track',
    color: 'amber',
    icon: '🟡',
    totalTutorials: 12
  },
  system: {
    id: 'system',
    name: 'System & Deployment Track',
    color: 'plcBlue',
    icon: '🔵',
    totalTutorials: 8
  },
  architect: {
    id: 'architect',
    name: 'Architect Track',
    color: 'neonPink',
    icon: '🔴',
    totalTutorials: 18
  }
};

export const technicianTutorials: Tutorial[] = [
  {
    id: 'tutorial-01',
    number: 1,
    title: 'Agentic vs Automation Technician',
    slug: 'tutorial-01-agentic-vs-automation-technician-v1',
    description: 'Understanding the fundamental difference between automation and agentic AI',
    published: true,
    track: 'technician'
  },
  {
    id: 'tutorial-02',
    number: 2,
    title: 'The ReAct Pattern for PLC Code Analysis',
    slug: 'tutorial-02-react-plc-v2',
    description: 'Apply ReAct reasoning to PLC code analysis. Learn transparent, auditable AI reasoning for industrial automation.',
    published: true,
    track: 'technician'
  },
  {
    id: 'tutorial-03',
    number: 3,
    title: 'Autonomous Agents vs Rule-Based Systems',
    slug: 'tutorial-03-autonomous-vs-rule-based-v1',
    description: 'Distinguish rule-based automation from autonomous agents through goals, state, and reasoning.',
    published: true,
    track: 'technician'
  },
  {
    id: 'tutorial-04',
    number: 4,
    title: 'Agent Perception-Action Cycles (PLC Scan Mapping)',
    slug: 'tutorial-04-perception-action-plc-scan-v1',
    description: 'Map agent perception-action loops to PLC scan cycles. Understand advisory cognition without control.',
    published: true,
    track: 'technician'
  },
  {
    id: 'tutorial-05',
    number: 5,
    title: 'Prompt Engineering for IEC 61131-3 ST Code Generation',
    slug: 'tutorial-05-prompt-engineering-st-v2',
    description: 'Control AI code generation with prompt engineering. Create reviewable, deterministic PLC code drafts.',
    published: true,
    track: 'technician'
  },
  {
    id: 'tutorial-06',
    number: 6,
    title: 'Safety Boundaries & Constraints',
    slug: 'tutorial-06-safety-boundaries',
    description: 'Implement safety guardrails for industrial AI agents',
    published: false,
    track: 'technician'
  },
  {
    id: 'tutorial-07',
    number: 7,
    title: 'Log-Based Fault Diagnosis',
    slug: 'tutorial-07-fault-diagnosis',
    description: 'Build agents that diagnose faults from system logs',
    published: false,
    track: 'technician'
  },
  {
    id: 'tutorial-08',
    number: 8,
    title: 'Code Generation Validation',
    slug: 'tutorial-08-code-validation',
    description: 'Validate AI-generated PLC code for safety and correctness',
    published: false,
    track: 'technician'
  },
  {
    id: 'tutorial-09',
    number: 9,
    title: 'Advisory Agent Design Patterns',
    slug: 'tutorial-09-advisory-patterns',
    description: 'Design patterns for safe advisory agents',
    published: false,
    track: 'technician'
  },
  {
    id: 'tutorial-10',
    number: 10,
    title: 'Building Your First Industrial Agent',
    slug: 'tutorial-10-first-agent',
    description: 'Complete project: Build a production-ready advisory agent',
    published: false,
    track: 'technician'
  }
];

// Helper functions
export function getTutorialBySlug(slug: string): Tutorial | undefined {
  return technicianTutorials.find(t => t.slug === slug);
}

export function getPreviousTutorial(currentNumber: number, track: string = 'technician'): Tutorial | undefined {
  if (track === 'technician') {
    return technicianTutorials.find(t => t.number === currentNumber - 1);
  }
  return undefined;
}

export function getNextTutorial(currentNumber: number, track: string = 'technician'): Tutorial | undefined {
  if (track === 'technician') {
    return technicianTutorials.find(t => t.number === currentNumber + 1);
  }
  return undefined;
}

export function getTrackTutorials(trackId: string): Tutorial[] {
  if (trackId === 'technician') {
    return technicianTutorials;
  }
  return [];
}
