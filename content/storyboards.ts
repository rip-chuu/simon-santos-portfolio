export type StoryboardProject = {
  slug: string;
  title: string;
  subtitle: string;
  audience: string;
  learningType: string;
  role: string;
  format: string;
  status: string;
  summary: string;
  skills: string[];
  thumbnail: string;
};

export const storyboardProjects: StoryboardProject[] = [
  {
    slug: "manager-conflict-coaching",
    title: "Manager Conflict Coaching Simulation",
    subtitle: "Scenario-Based eLearning Prototype",
    audience: "First-Time Managers / Team Leaders",
    learningType: "Scenario-Based Learning",
    role: "Instructional Designer",
    format: "Articulate Storyline-Ready Storyboard Prototype",
    status: "Concept / Prototype",
    summary:
      "A branching workplace simulation designed to help managers explore the consequences of coaching-oriented, blame-oriented, and avoidance-based responses to employee mistakes.",
    skills: [
      "Scenario-Based Learning",
      "Branching Design",
      "Behavioral Learning",
      "Feedback Design",
      "Workplace Learning",
    ],
    thumbnail: "/images/storyboards/manager-conflict-coaching/screen1.png",
  },
];

export function getStoryboard(slug: string) {
  return storyboardProjects.find((storyboard) => storyboard.slug === slug);
}
