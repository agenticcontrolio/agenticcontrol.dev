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
    slug: 'tutorial-01-agentic-vs-automation-technician',
    description: 'Understanding the fundamental difference between automation and agentic AI',
    published: true,
    track: 'technician'
  },
  {
    id: 'tutorial-02',
    number: 2,
    title: 'The ReAct Pattern for PLC Code Analysis',
    slug: 'tutorial-02-react-plc',
    description: 'Apply ReAct reasoning to PLC code analysis. Learn transparent, auditable AI reasoning for industrial automation.',
    published: true,
    track: 'technician'
  },
  {
    id: 'tutorial-03',
    number: 3,
    title: 'Autonomous Agents vs Rule-Based Systems',
    slug: 'tutorial-03-autonomous-vs-rule-based',
    description: 'Distinguish rule-based automation from autonomous agents through goals, state, and reasoning.',
    published: true,
    track: 'technician'
  },
  {
    id: 'tutorial-04',
    number: 4,
    title: 'Agent Perception-Action Cycles (PLC Scan Mapping)',
    slug: 'tutorial-04-perception-action-plc-scan',
    description: 'Map agent perception-action loops to PLC scan cycles. Understand advisory cognition without control.',
    published: true,
    track: 'technician'
  },
  {
    id: 'tutorial-05',
    number: 5,
    title: 'Prompt Engineering for IEC 61131-3 ST Code Generation',
    slug: 'tutorial-05-prompt-engineering-st',
    description: 'Control AI code generation with prompt engineering. Create reviewable, deterministic PLC code drafts.',
    published: true,
    track: 'technician'
  },
  {
    id: 'tutorial-06',
    number: 6,
    title: 'Few-Shot Learning for PLC Validation',
    slug: 'tutorial-06-few-shot-plc-validation',
    description: 'Learn how to guide AI toward consistent and reliable PLC code validation by supplying high-quality examples.',
    published: true,
    track: 'technician'
  },
  {
    id: 'tutorial-07',
    number: 7,
    title: 'Chain-of-Thought for Logic Review',
    slug: 'tutorial-07-chain-of-thought-logic-review',
    description: 'Learn how to get AI to explain its reasoning step-by-step when reviewing PLC logic, improving clarity, trust, and debuggability.',
    published: true,
    track: 'technician'
  },
  {
    id: 'tutorial-08',
    number: 8,
    title: 'Building Your First Tool-Using Agent',
    slug: 'tutorial-08-tool-using-agent-read-only',
    description: 'Learn how to safely connect an AI agent to a single, read-only tool to analyze PLC logic without any control authority.',
    published: true,
    track: 'technician'
  },
  {
    id: 'tutorial-09',
    number: 9,
    title: 'Structured Outputs for PLC Data Extraction',
    slug: 'tutorial-09-structured-outputs-plc-data',
    description: 'Learn how to force AI agents to return deterministic, structured outputs when analyzing PLC logic, enabling reliable downstream processing.',
    published: true,
    track: 'technician'
  },
  {
    id: 'tutorial-10',
    number: 10,
    title: 'Conveyor Jam Diagnosis from Alarm Logs',
    slug: 'tutorial-10-conveyor-jam-diagnosis',
    description: 'Build a professional, end-to-end advisory diagnostic agent that analyzes conveyor alarm logs and correlates them with known fault patterns.',
    published: true,
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
