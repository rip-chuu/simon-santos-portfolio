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
  primaryRole?: string;
  status?: string;
  summary: string;
  overview?: string[];
  focus: string[];
  challenge: string;
  challengeDetails?: string[];
  challengeConsiderations?: string[];
  role: string;
  facultyInputs?: string[];
  responsibilities?: string[];
  roleBoundary?: string;
  sourceMaterials: string[];
  representativeInput?: string;
  beforeAfter?: {
    before: string;
    beforeExample: string;
    after: string;
    afterFeatures: string[];
  };
  process: string[];
  decisions: { title: string; detail: string }[];
  finalOutput: string;
  finalOutputs?: string[];
  metrics: Metric[];
  impactNote?: string;
  reflection: string;
  reflectionDetails?: string[];
  tools: string[];
  mediaAssets?: {
    filename: string;
    description: string;
    sections: string[];
  }[];
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
    type: "Asynchronous University Course",
    platform: "OpenLearning",
    primaryRole: "Instructional Design / Course Content Development",
    status: "Complete",
    summary:
      "Transformed faculty-provided teaching plans, module structures, and academic source materials into a learner-ready asynchronous course with structured lessons, assessments, interactive elements, and visual learning support.",
    overview: [
      "Understanding the Self was a university-level general education course delivered asynchronously through OpenLearning.",
      "The course covered philosophical, psychological, sociological, anthropological, and developmental perspectives on identity and the self.",
      "Faculty provided the overall teaching plan, module structure, intended learning outcomes, and much of the raw academic content. My role was to turn those materials into a coherent digital learning experience by revising and restructuring the content, designing learner-facing pages, selecting appropriate interactions, creating assessments and activities, and developing visual learning supports.",
      "I contributed to all 14 lessons in the course.",
    ],
    focus: [
      "Content transformation",
      "Asynchronous lesson design",
      "Assessments and interaction",
      "Visual learning support",
    ],
    challenge:
      "The content and sequence were already substantially defined by the teaching plan. The challenge was converting dense, academically structured material into an asynchronous experience that learners could navigate independently.",
    challengeDetails: [
      "This was not a matter of creating the subject from scratch. It required making careful decisions about how the established curriculum would become a usable learner-facing experience.",
      "Because learners would not have a lecturer continuously guiding them through the material, each lesson page needed enough structure, context, and interaction to support self-directed learning.",
    ],
    challengeConsiderations: [
      "How much information to present at once",
      "Where concepts needed additional explanation",
      "How to break long sections into manageable chunks",
      "Where learners should stop and interact",
      "Which concepts benefited from visual representation",
      "How assessment could reinforce understanding rather than only test recall",
    ],
    role:
      "I was responsible for the learner-facing instructional design and OpenLearning implementation of the course.",
    facultyInputs: [
      "Teaching plans",
      "Intended learning outcomes",
      "Prescribed module and lesson sequence",
      "Raw lesson content",
      "Suggested activities and assessments",
      "Academic references and source materials",
    ],
    responsibilities: [
      "Revising and restructuring raw content",
      "Designing lesson flow, chunking, and pacing",
      "Developing visual learning aids",
      "Selecting and configuring OpenLearning widgets",
      "Creating formative and summative assessments",
      "Designing reflection and application activities",
      "Incorporating supplementary media",
      "Building the learner-facing OpenLearning pages",
    ],
    roleBoundary:
      "I did not own the original academic curriculum or final publishing authority. My substantial ownership was in the learner-experience layer: content transformation, interaction, assessment, visuals, pacing, and LMS execution.",
    sourceMaterials: [
      "Official teaching plan",
      "Module and lesson outline",
      "Intended learning outcomes",
      "Faculty-provided raw text",
      "Academic source materials and textbook references",
      "Suggested teaching-learning activities",
      "Suggested assessment strategies",
    ],
    representativeInput:
      "A teaching plan might specify a topic such as philosophical perspectives of the self, identify the philosophers to be covered, provide raw explanatory material, and suggest an assessment. The instructional work began from there.",
    beforeAfter: {
      before:
        "Dense faculty-provided academic text structured primarily around subject content and course requirements.",
      beforeExample:
        "Raw material explaining Socrates, Plato, and Aristotle through relatively long conceptual descriptions.",
      after:
        "A learner-facing asynchronous lesson that preserved academic intent while creating a clearer path through the material.",
      afterFeatures: [
        "Clear lesson introduction and learning objectives",
        "Content divided into sections by philosopher",
        "Simplified but academically faithful explanations",
        "Visual learning support and supplementary media",
        "Formative knowledge checks",
        "Reflection and application prompts",
      ],
    },
    process: [
      "Reviewed the teaching plan and intended learning outcomes to determine the required lesson scope.",
      "Reviewed faculty-provided content and sources to identify essential concepts and areas needing clarification or restructuring.",
      "Reorganized the content into a learner-friendly sequence appropriate for asynchronous delivery.",
      "Used ChatGPT selectively to support content structuring, drafting, activity ideation, and assessment development.",
      "Applied instructional judgment to revise AI-assisted and source-derived material for accuracy, clarity, pacing, and alignment.",
      "Added visual aids, interactions, checks, reflections, and activities where they supported a learning objective.",
      "Built and reviewed the final learner-facing pages in OpenLearning.",
    ],
    decisions: [
      {
        title: "Break dense content into conceptual sections",
        detail:
          "Long explanations worked as academic source material but were less effective for independent online learning. Shorter sections made concepts easier to process and created clearer points of progression.",
      },
      {
        title: "Use interaction selectively",
        detail:
          "Widgets were used for a learning purpose—progressive reveal, recall, reflection, discussion, or application—not as decoration.",
      },
      {
        title: "Connect concepts to lived experience",
        detail:
          "Reflection and application prompts helped learners connect abstract philosophical and psychological ideas to their own identities, experiences, and decisions.",
      },
      {
        title: "Use visuals for conceptual understanding",
        detail:
          "Diagrams, infographics, and visual comparisons reduced content density and clarified relationships that would have required additional paragraphs to explain.",
      },
    ],
    finalOutput:
      "A complete learner-facing OpenLearning experience spanning all 14 Understanding the Self lessons.",
    finalOutputs: [
      "14 asynchronous lessons",
      "Learner-facing OpenLearning pages",
      "Learning objectives and revised explanatory content",
      "Formative assessments",
      "Reflection and discussion activities",
      "Submission-based activities",
      "Interactive OpenLearning elements",
      "Supplementary media",
      "Visual learning aids and diagrams",
    ],
    metrics: [
      { value: "14", label: "Lessons completed", note: "Understanding the Self" },
      { value: "35", label: "Lessons completed", note: "Across two university courses" },
      { value: "40+", label: "Assessments and activities", note: "Across both courses" },
      { value: "50+", label: "Visual aids and diagrams", note: "Approximate total across both courses" },
      { value: "8", label: "Working days", note: "Two courses produced" },
    ],
    impactNote:
      "These are verified production results, not learner-performance claims. Completion rates, assessment-performance data, and satisfaction scores were not available to me at the time of development.",
    reflection:
      "This project taught me that converting academic material into e-learning is not simply a matter of shortening text or adding interactions.",
    reflectionDetails: [
      "The most important decisions involved determining what learners needed at each point: when they needed more explanation, when they needed an example, when they should interact with the material, and when they should apply what they had learned.",
      "It also strengthened my ability to balance instructional ambition with production constraints. The delivery timeline required me to prioritize the elements with the greatest learning value.",
      "If I were to iterate on the course, I would want stronger access to learner analytics and facilitator feedback so future revisions could be informed by actual learner behavior and performance.",
    ],
    tools: [
      "OpenLearning",
      "ChatGPT",
      "Canva",
      "Google Workspace",
      "HTML embeds / custom interactive elements",
    ],
    mediaAssets: [
      {
        filename: "01_teaching-plan.png",
        description: "Original teaching plan, outcomes, requirements, suggested activities, and assessment strategy.",
        sections: ["Inputs", "Learning Challenge"],
      },
      {
        filename: "02_raw-content.png",
        description: "Representative faculty-provided academic content before instructional restructuring.",
        sections: ["Before / After"],
      },
      {
        filename: "03_philosophy-lesson-opening.png",
        description: "Lesson title, introduction, and learning objectives.",
        sections: ["Final Output"],
      },
      {
        filename: "04_philosophy-content.png",
        description: "Learner-facing Socrates, Plato, and Aristotle explanation.",
        sections: ["Before / After", "Learning Decisions"],
      },
      {
        filename: "05_visual-learning-aid.png",
        description: "Diagram or infographic used to clarify course content.",
        sections: ["Learning Decisions", "Final Output"],
      },
      {
        filename: "06_knowledge-check.png",
        description: "Formative multiple-choice or interactive assessment.",
        sections: ["Final Output"],
      },
      {
        filename: "07_reflection-activity.png",
        description: "Learner reflection, discussion, or application task.",
        sections: ["Final Output"],
      },
      {
        filename: "08_interactive-widget.png",
        description: "OpenLearning interactive element.",
        sections: ["Design Process", "Final Output"],
      },
      {
        filename: "09_supplementary-media.png",
        description: "Embedded video or supplementary learning resource.",
        sections: ["Final Output"],
      },
      {
        filename: "10_course-structure.png",
        description: "Overall module and lesson organization.",
        sections: ["Project Overview"],
      },
    ],
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
