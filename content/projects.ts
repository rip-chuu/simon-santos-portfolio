export type Metric = {
  value: string;
  label: string;
  note: string;
};

export type Project = {
  slug: string;
  order: number;
  visible: boolean;
  featured: boolean;
  title: string;
  type: string;
  platform?: string;
  summary: string;
  focus: string[];
  challenge: string;
  role: string;
  sourceMaterials: string[];
  process: string[];
  decisions: { title: string; detail: string }[];
  finalOutput: string;
  metrics: Metric[];
  reflection: string;
  tools: string[];
  externalUrl?: string;
  accent: "coral" | "blue" | "lime" | "yellow";
};

export const projects: Project[] = [
  {
    slug: "understanding-the-self",
    order: 1,
    visible: true,
    featured: true,
    title: "Understanding the Self",
    type: "Asynchronous Course Design",
    platform: "OpenLearning",
    summary:
      "A reflective online course designed to turn abstract theories of identity into personal, social, and practical learning moments.",
    focus: [
      "Course architecture",
      "Learner interaction",
      "Assessments",
      "Visual learning design",
    ],
    challenge:
      "Create an asynchronous experience that keeps concept-heavy material personal and participatory without relying on live facilitation.",
    role:
      "Course architect, instructional designer, activity designer, and visual learning designer.",
    sourceMaterials: [
      "Course syllabus and learning outcomes",
      "Subject-matter references",
      "Existing assessment requirements",
      "OpenLearning platform constraints",
    ],
    process: [
      "Mapped outcomes to a clear module sequence",
      "Chunked theories into learner-sized concepts",
      "Designed reflection and social interaction prompts",
      "Aligned assessments to authentic application",
      "Built and reviewed the course in OpenLearning",
    ],
    decisions: [
      {
        title: "Make theory personal",
        detail:
          "Each concept is paired with a question, scenario, or reflection that connects it to the learner's own experience.",
      },
      {
        title: "Design for visible thinking",
        detail:
          "Discussion and short-form activities give learners a reason to articulate, compare, and revise their thinking.",
      },
      {
        title: "Use assessment as learning",
        detail:
          "Checks and outputs are positioned as opportunities to apply ideas—not as interruptions at the end of a lesson.",
      },
    ],
    finalOutput:
      "A complete OpenLearning course experience with sequenced modules, interactive prompts, assessments, and a coherent visual system. Screenshots and a guided walkthrough will be added here.",
    metrics: [
      { value: "—", label: "Learners reached", note: "Metric to be added" },
      { value: "—", label: "Completion rate", note: "Metric to be added" },
      { value: "—", label: "Learner feedback", note: "Evidence to be added" },
    ],
    reflection:
      "This project reinforced the value of designing for personal relevance. The next case-study update will document learner evidence and specific design iterations.",
    tools: ["OpenLearning", "Canva", "PowerPoint", "Google Workspace"],
    accent: "coral",
  },
  {
    slug: "mathematics-in-the-modern-world",
    order: 2,
    visible: true,
    featured: true,
    title: "Mathematics in the Modern World",
    type: "Digital Learning Design",
    platform: "OpenLearning",
    summary:
      "A guided digital learning experience that makes technical ideas easier to enter, practice, and use in everyday contexts.",
    focus: [
      "Technical content simplification",
      "Guided practice",
      "Interactive learning",
    ],
    challenge:
      "Reduce intimidation around technical content while maintaining accuracy, rigor, and enough guided practice for learners to build confidence.",
    role:
      "Instructional designer, content translator, practice designer, and course builder.",
    sourceMaterials: [
      "Course learning outcomes",
      "Technical references and worked examples",
      "Existing exercises",
      "Platform requirements",
    ],
    process: [
      "Identified prerequisite knowledge and likely friction points",
      "Reframed explanations around concrete examples",
      "Sequenced worked examples before independent practice",
      "Added frequent, low-stakes knowledge checks",
      "Reviewed language and visual density for clarity",
    ],
    decisions: [
      {
        title: "Lower the entry barrier",
        detail:
          "Lessons open with relatable contexts before moving toward symbols, procedures, and formal language.",
      },
      {
        title: "Model, guide, release",
        detail:
          "Practice moves from demonstrated reasoning to scaffolded attempts and, finally, independent application.",
      },
      {
        title: "Keep feedback close",
        detail:
          "Short checks help learners correct misconceptions before those misconceptions become part of later work.",
      },
    ],
    finalOutput:
      "A modular OpenLearning experience combining concise explanations, worked examples, guided practice, and interactive checks. Detailed media will be added here.",
    metrics: [
      { value: "—", label: "Modules completed", note: "Metric to be added" },
      { value: "—", label: "Practice attempts", note: "Metric to be added" },
      { value: "—", label: "Confidence change", note: "Evidence to be added" },
    ],
    reflection:
      "The work highlighted how structure and tone can change a learner's relationship with difficult material. Future documentation will show specific before-and-after examples.",
    tools: ["OpenLearning", "Canva", "PowerPoint", "Google Workspace"],
    accent: "blue",
  },
  {
    slug: "building-blocks",
    order: 3,
    visible: true,
    featured: true,
    title: "Building Blocks",
    type: "Leadership Development Program",
    summary:
      "A project-based officer development program that connects leadership concepts to the real work of running an organization.",
    focus: [
      "Organizational learning",
      "Facilitation",
      "Officer development",
      "Project-based learning",
    ],
    challenge:
      "Create a practical learning journey for officers with different roles, experience levels, and immediate organizational responsibilities.",
    role:
      "Program designer, facilitator, activity designer, and organizational learning partner.",
    sourceMaterials: [
      "Officer role expectations",
      "Organizational goals and pain points",
      "Participant context and prior experience",
      "Existing processes and project timelines",
    ],
    process: [
      "Clarified performance needs with stakeholders",
      "Mapped competencies to real officer responsibilities",
      "Designed workshops around active problem-solving",
      "Connected sessions through a shared project",
      "Planned reflection and feedback checkpoints",
    ],
    decisions: [
      {
        title: "Learn through real work",
        detail:
          "Activities use current organizational challenges so new knowledge can transfer directly into practice.",
      },
      {
        title: "Build across roles",
        detail:
          "The program creates shared language while allowing each officer to interpret concepts through their own responsibilities.",
      },
      {
        title: "Reflection closes the loop",
        detail:
          "Structured debriefs help participants name what worked, what changed, and what they will do differently next.",
      },
    ],
    finalOutput:
      "A facilitated leadership development journey with practical workshops, shared project work, and reflection activities. Session artifacts will be added here.",
    metrics: [
      { value: "—", label: "Officers engaged", note: "Metric to be added" },
      { value: "—", label: "Projects delivered", note: "Metric to be added" },
      { value: "—", label: "Behavior change", note: "Evidence to be added" },
    ],
    reflection:
      "This project deepened my interest in learning that sits close to performance. The next iteration will document stakeholder feedback and participant outcomes.",
    tools: ["PowerPoint", "Canva", "Google Workspace", "Audacity"],
    accent: "lime",
  },
  {
    slug: "project-proposal-learning-website",
    order: 4,
    visible: true,
    featured: true,
    title: "Project Proposal Learning Website",
    type: "Performance Support Tool",
    summary:
      "A self-directed learning website that translates organizational guidelines into a clearer path from idea to viable proposal.",
    focus: [
      "Guideline translation",
      "Accessible self-directed learning",
      "Performance support",
    ],
    challenge:
      "Turn dense organizational guidance into an accessible resource people can use at the exact moment they are planning and writing proposals.",
    role:
      "Content strategist, instructional designer, information architect, and website designer.",
    sourceMaterials: [
      "Project proposal guidelines",
      "Templates and approval criteria",
      "Common stakeholder questions",
      "Examples of prior proposals",
    ],
    process: [
      "Audited the source material for decisions and actions",
      "Organized content around the proposal workflow",
      "Rewrote policy language into direct guidance",
      "Added examples, checks, and reusable prompts",
      "Built a scannable, self-directed web experience",
    ],
    decisions: [
      {
        title: "Organize around the task",
        detail:
          "Navigation follows what a user needs to decide and produce, rather than mirroring the original policy document.",
      },
      {
        title: "Translate without diluting",
        detail:
          "Plain-language explanations preserve essential requirements while making the next action obvious.",
      },
      {
        title: "Support the moment of need",
        detail:
          "Examples and checks sit beside the relevant step so users do not have to remember guidance from a separate course.",
      },
    ],
    finalOutput:
      "A responsive performance-support website with task-based navigation, guided proposal development, and reusable resources. Screenshots will be added here.",
    metrics: [
      { value: "—", label: "Proposals supported", note: "Metric to be added" },
      { value: "—", label: "Time saved", note: "Metric to be added" },
      { value: "—", label: "Revision reduction", note: "Evidence to be added" },
    ],
    reflection:
      "The project strengthened my practice of designing the smallest useful learning intervention. Additional evidence will be added after stakeholder review.",
    tools: ["ChatGPT", "Canva", "Google Workspace", "PowerPoint"],
    accent: "yellow",
  },
];

export function getVisibleProjects() {
  return projects.filter((project) => project.visible).sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects() {
  return getVisibleProjects().filter((project) => project.featured);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug && project.visible);
}
