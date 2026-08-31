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
  cardSubtitle?: string;
  domain?: "Higher Education" | "Organizational Learning & Performance" | "Digital Learning Prototypes";
  capability?: string;
  context?: string;
  targetUsers?: string;
  heroImage?: string;
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
  accent: "coral" | "blue" | "lime" | "yellow" | "olive" | "forest";
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
    cardSubtitle: "Asynchronous Higher Education Course Development",
    domain: "Higher Education",
    capability: "Course Development",
    context: "Higher Education / Online Learning",
    targetUsers: "University students completing a self-directed general education course.",
    heroImage: "/images/projects/understanding-the-self/hero-course-wide.png",
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
    type: "Interactive Practice Lab",
    platform: "HTML Embed / OpenLearning",
    primaryRole: "Instructional Designer / Interactive Learning Developer",
    status: "Complete prototype",
    cardSubtitle: "Arithmetic Sequence Practice Lab",
    domain: "Higher Education",
    capability: "Interactive Practice",
    context: "Higher Education / Formative Practice",
    targetUsers: "University learners building fluency with arithmetic-sequence procedures.",
    heroImage: "/images/projects/mathematics-in-the-modern-world/arithmetic-sequence-practice-lab.png",
    summary:
      "A self-initiated interactive practice lab that decomposes arithmetic sequences into four guided skills with immediate, low-stakes feedback.",
    focus: [
      "Skill decomposition",
      "Guided practice",
      "Immediate feedback",
      "HTML learning interaction",
    ],
    challenge:
      "A concise visual explained the arithmetic-sequence concept, but learners also needed a place to practise each procedure actively instead of only reading an example.",
    challengeDetails: [
      "The opportunity emerged during the wider course build rather than from a formal research study or analytics review.",
      "The design goal was to turn one multi-step procedure into a visible sequence of manageable practice decisions.",
    ],
    role:
      "I identified the practice opportunity, decomposed the procedure into four skills, designed the feedback flow, and developed the HTML-embedded prototype.",
    sourceMaterials: [
      "Arithmetic Sequences at a Glance learning visual",
      "Course content and worked examples",
      "OpenLearning embed constraints",
    ],
    process: [
      "Identified the procedural actions hidden inside the worked example",
      "Separated the task into four progressive skills",
      "Designed guided and self-selected practice modes",
      "Placed feedback directly beside each attempt",
      "Built the interaction as an embeddable HTML prototype",
    ],
    decisions: [
      {
        title: "Decompose the procedure",
        detail:
          "Checking differences, identifying the first term, writing the explicit rule, and finding a specified term became four distinct practice targets.",
      },
      {
        title: "Offer guided and self-selected paths",
        detail:
          "Learners can follow the intended progression or revisit the particular skill they need to strengthen.",
      },
      {
        title: "Keep feedback immediate",
        detail:
          "The response area sits beside the task so learners can correct a calculation before continuing to a dependent skill.",
      },
    ],
    finalOutput:
      "An HTML-embedded formative practice lab with four skill modes, guided progression, progress states, answer checking, and immediate feedback.",
    finalOutputs: [
      "Four-skill practice sequence",
      "Guided and self-selected practice modes",
      "Immediate answer feedback",
      "Embeddable HTML prototype",
    ],
    metrics: [
      { value: "4", label: "Practice skills", note: "One progressive learning sequence" },
      { value: "1", label: "Interactive prototype", note: "Designed for LMS embedding" },
    ],
    impactNote: "The prototype demonstrates the interaction and feedback design. Learner testing and performance analytics were not available.",
    reflection:
      "This artifact reinforced that a small, focused interaction can add meaningful practice when it is built around the decisions learners actually need to make.",
    reflectionDetails: [
      "The strongest design move was not adding more explanation; it was exposing the component skills and giving each one a clear feedback loop.",
      "A future iteration would test item difficulty, error patterns, and the usefulness of the guided-versus-independent choice with learners.",
    ],
    tools: ["HTML", "CSS", "JavaScript", "OpenLearning"],
    accent: "blue",
  },
  {
    slug: "building-blocks",
    order: 3,
    visible: true,
    featured: true,
    title: "Building Blocks",
    type: "Leadership Development Workshop Series",
    platform: "Hybrid Workshop Series",
    primaryRole: "Project Proponent / Primary Workshop Facilitator / SME Coordinator",
    status: "Complete",
    cardSubtitle: "Organizational Leadership Development",
    domain: "Organizational Learning & Performance",
    capability: "Workshop & Program Design",
    context: "Student Organization / Organizational Development",
    targetUsers: "HFHGC student officers and members responsible for organizational projects, partnerships, and continuity.",
    heroImage: "/images/projects/building-blocks/building-blocks-poster.png",
    summary:
      "A three-part workshop pathway that connected Habitat advocacy, organizational operations, and community-centered leadership to the real work of student officers.",
    focus: [
      "Organizational learning",
      "Facilitation",
      "Officer development",
      "Project-based learning",
    ],
    challenge:
      "Student organizations experienced gaps in leadership development, knowledge transfer, project execution, and continuity as responsibilities moved between officers.",
    challengeDetails: [
      "The response needed to support immediate organizational work while strengthening the shared knowledge that future officers could build on.",
      "A single information session would not address the range of advocacy, operational, and community-leadership responsibilities involved.",
    ],
    role:
      "As project proponent, primary workshop facilitator, and SME coordinator, I shaped the pathway, translated organizational needs into sessions and activities, and connected specialist input to participant practice.",
    sourceMaterials: [
      "Officer role expectations",
      "Organizational goals and pain points",
      "Participant context and prior experience",
      "Existing processes and project timelines",
    ],
    process: [
      "Defined the organizational performance and continuity needs",
      "Mapped three workshop themes to real officer responsibilities",
      "Coordinated subject-matter expertise and session inputs",
      "Designed facilitated activities around authentic organizational decisions",
      "Delivered the series and gathered participant feedback",
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
      "A connected three-session pathway: Habitat101, Operations, and Community & Leadership Development with a Partnered Community.",
    finalOutputs: [
      "Three-part leadership development pathway",
      "Facilitated workshops and active exercises",
      "Operational and proposal-development learning materials",
      "Coordinated SME contributions",
    ],
    metrics: [
      { value: "50+", label: "Total attendees", note: "Across the workshop series" },
      { value: "9.7/10", label: "Audience feedback", note: "Engagement, novelty, and perceived impact" },
      { value: "3", label: "Connected sessions", note: "One organizational learning pathway" },
    ],
    impactNote: "Only aggregate attendance and survey results are shown to protect participant privacy. No individual responses or identities are included.",
    reflection:
      "Building Blocks strengthened my interest in learning that sits close to performance: participants were not learning leadership in the abstract, but using it to make better organizational decisions.",
    reflectionDetails: [
      "Coordinating SMEs required me to preserve specialist knowledge while shaping it into a coherent experience for participants with different roles and experience levels.",
      "A future iteration would add delayed follow-up measures to understand which practices transferred into subsequent organizational projects.",
    ],
    tools: ["Canva", "PowerPoint", "Zoom", "Google Workspace"],
    accent: "olive",
  },
  {
    slug: "project-proposal-coach",
    order: 4,
    visible: true,
    featured: true,
    title: "Project Proposal Coach",
    type: "Digital Learning Experience",
    platform: "Web Prototype",
    primaryRole: "Instructional Designer",
    status: "Functional prototype",
    cardSubtitle: "Guided Digital Learning Resource",
    domain: "Organizational Learning & Performance",
    capability: "Performance Support",
    context: "Student Leadership / Performance Support",
    targetUsers: "Student leaders preparing institutional activity proposals.",
    heroImage: "/images/projects/project-proposal-coach/platform-entry-point.png",
    summary:
      "A self-paced digital tutorial and performance-support resource that turns complex institutional procedures into a clear path from project idea to post-activity requirements.",
    focus: [
      "Performance support",
      "Self-paced learning",
      "Information architecture",
      "Procedural guidance",
    ],
    challenge:
      "Student leaders needed to navigate complex activity approval requirements, documentation procedures, and compliance guidelines. The challenge was not simply accessing information, but translating procedural knowledge into action when preparing real project proposals.",
    challengeDetails: [
      "The learning barrier was caused by information complexity and the difficulty of applying procedural guidance during authentic proposal work.",
      "Learners needed both a clear way to understand the process and immediate support while using that process to develop a proposal.",
    ],
    role:
      "Instructional designer responsible for translating procedural documentation into a self-paced learning and performance-support experience.",
    sourceMaterials: [
      "Institutional activity-approval procedures",
      "Documentation and compliance guidelines",
      "Project lifecycle requirements",
      "Original Project Proposal Coach HTML prototype",
    ],
    process: [
      "Identified the actions student leaders needed to complete across the project lifecycle",
      "Reorganized procedural information into learner-facing modules",
      "Separated process learning from proposal application",
      "Designed guided questioning for structured proposal development",
      "Connected self-paced instruction with performance support at the moment of need",
    ],
    decisions: [
      {
        title: "Transform dense documentation into learner pathways",
        detail:
          "Procedural requirements were reframed as a navigable sequence so learners could understand where they were, what mattered, and what came next.",
      },
      {
        title: "Organize content around learner actions",
        detail:
          "The experience follows the project lifecycle and the decisions learners need to make instead of reproducing the structure of the original manual.",
      },
      {
        title: "Prototype guided performance support",
        detail:
          "A local proposal-coach prototype explores how guided prompts could support application after learners encounter the process; it is not presented as the finished learning solution.",
      },
      {
        title: "Combine instruction with immediate application",
        detail:
          "Self-paced modules and guided proposal development create a shorter path between understanding a requirement and applying it to authentic work.",
      },
    ],
    finalOutput:
      "A six-module digital tutorial organized around the project lifecycle, supported by a local guided-proposal prototype as an optional technical exploration.",
    finalOutputs: [
      "Project-lifecycle learning architecture",
      "Learner-facing procedural modules",
      "Guided proposal-support prototype",
      "Standalone functional HTML prototype",
    ],
    metrics: [
      { value: "—", label: "Learner outcomes", note: "Project outcomes to be measured" },
    ],
    reflection:
      "Project Proposal Coach strengthened my understanding of learning design beyond traditional courses: the experience needed to reduce the distance between knowing a procedure and using it during an authentic task.",
    reflectionDetails: [
      "The work showed how self-paced instruction and performance support can operate as one connected experience rather than separate resources.",
      "A future iteration would test the module sequence and coaching prompts with student leaders, then refine the support around the points where they still hesitate or need clarification.",
    ],
    tools: ["HTML", "CSS", "JavaScript", "Instructional Content Design"],
    accent: "forest",
  },
  {
    slug: "picking-the-knife-for-the-job",
    order: 5,
    visible: true,
    featured: true,
    title: "Picking the Knife for the Job",
    type: "Microlearning",
    platform: "Articulate Rise 360",
    primaryRole: "Instructional Designer / Rise Developer",
    status: "Self-directed portfolio prototype",
    cardSubtitle: "Microlearning | Articulate Rise 360",
    domain: "Digital Learning Prototypes",
    capability: "Microlearning Design",
    context: "Home Cooking / Self-Directed Learning",
    targetUsers: "Beginner or inexperienced home cooks choosing a knife for common food-preparation tasks.",
    heroImage: "/images/projects/picking-the-knife-for-the-job/knife-identification.jpg",
    summary:
      "A short scenario-based microlearning experience designed to help beginner home cooks select the appropriate kitchen knife for common food-preparation tasks.",
    focus: [
      "Microlearning design",
      "Rise 360 development",
      "Objective–assessment alignment",
      "Immediate feedback",
    ],
    challenge:
      "Beginners may recognize that kitchen knives look different but still struggle to decide which tool fits the food and cutting task in front of them.",
    role:
      "I designed and developed the self-directed prototype in Articulate Rise 360, including the content sequence, visual identification activity, decision rules, applied matching task, and learner feedback.",
    sourceMaterials: [
      "Final Articulate Rise 360 export",
      "Course images and audio",
      "Embedded audio transcripts",
      "Learner-facing interaction and feedback copy",
    ],
    process: [
      "Defined the performance problem and novice audience",
      "Wrote a behavioral knife-selection objective",
      "Limited the scope to four versatile kitchen knives",
      "Sequenced identification, decision rules, and realistic examples",
      "Designed an applied matching knowledge check",
      "Added immediate explanatory feedback and reviewed the exported course",
    ],
    decisions: [
      {
        title: "Keep the experience deliberately short",
        detail:
          "A focused microlearning format supports a narrow, immediate decision without surrounding it with knife history, maintenance, or advanced technique that the objective does not require.",
      },
      {
        title: "Teach through tasks, not definitions",
        detail:
          "Learners encounter knives through the foods and cuts they need to handle, keeping instruction close to the intended performance rather than emphasizing terminology alone.",
      },
      {
        title: "Reveal complexity progressively",
        detail:
          "Chef’s, serrated, utility, and paring knives are introduced before concise rules of thumb and an applied multi-task decision, reducing the amount novices must process at once.",
      },
      {
        title: "Correct decisions immediately",
        detail:
          "The knowledge check provides explanatory feedback while the learner’s choice is still active, reinforcing the relationship between food characteristics, cutting task, and knife selection.",
      },
    ],
    finalOutput:
      "A responsive Articulate Rise 360 microlearning prototype with labeled visual exploration, audio-supported explanations, decision rules, and an applied matching knowledge check.",
    finalOutputs: [
      "Responsive Rise 360 course",
      "Four-knife visual identification interaction",
      "Applied matching knowledge check",
      "Audio transcripts and explanatory feedback",
    ],
    metrics: [
      { value: "4", label: "Knife types", note: "One focused decision framework" },
      { value: "1", label: "Applied knowledge check", note: "Aligned practice, not validated transfer" },
    ],
    impactNote:
      "This is a self-directed portfolio prototype. Learner testing and real-world performance transfer were not measured, so no validated outcome claim is made.",
    reflection:
      "The final artifact demonstrates how a narrow performance decision can be taught through a concise sequence of identification, decision rules, realistic examples, and immediate practice.",
    reflectionDetails: [
      "The exported package does not include version history or a separate storyboard, so specific development revisions cannot be verified responsibly.",
      "A future iteration would add learner testing, item-level feedback, a formal alternative-text audit, and more varied preparation tasks before expanding the scope.",
    ],
    tools: ["Articulate Rise 360", "Visual content design", "Audio narration"],
    externalUrl: "/courses/picking-the-knife-for-the-job/index.html",
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
