import {
  hackerrank_logo,
  highlight_accessibility,
  highlight_ai_e2e,
  highlight_api,
  highlight_model_evaluation,
  highlight_regression,
  highlight_visual,
  infosys_logo,
  krishna_logo,
  optisol_logo,
  project_accessibility,
  project_ai_e2e,
  project_api_release,
  project_dashboard_suite,
  project_feature_flags,
  project_regression,
  project_visual_testing,
} from "../assets";

import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { DiJava } from "react-icons/di";
import { FaAws, FaDocker } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";
import {
  SiAmazonwebservices,
  SiCircleci,
  SiGithubactions,
  SiJavascript,
  SiJenkins,
  SiKibana,
  SiKubernetes,
  SiLaunchpad,
  SiLooker,
  SiOpenai,
  SiPostman,
  SiPython,
  SiTerraform,
  SiTestinglibrary,
  SiTypescript,
  SiSelenium,
  SiClaude,
  SiOwncloud,
  SiCucumber,
  SiAmazonapigateway,
  SiAutomattic,
  SiDatadog,
  SiDgraph,
  SiWebcomponentsdotorg,
} from "react-icons/si";

export const resumeLink =
  "https://drive.google.com/file/d/10OFgSU-UBME9vrSwPcaDaT2uSu2qQ_cM/view?usp=drive_link";
export const callToAction = "https://www.linkedin.com/in/venkatraman-sundararajan-971870148/";

const plainSegment = (text) => ({ text });
const highlightSegment = (text) => ({ text, highlight: true });

export const navLinks = [
  { id: "skills", title: "Skills & Experience" },
  { id: "education", title: "Education" },
  { id: "achievements", title: "Impact Highlights" },
  { id: "projects", title: "Projects" },
  { id: "contactMe", title: "Contact Me" },
];

export const educationList = [
  {
    id: "education-1",
    icon: krishna_logo,
    title: "Sri Krishna Arts & Science College, Coimbatore",
    degree: "Masters in Software Systems",
    duration: "2013 - 2018",
    content1: "CGPA: 8.9 / 10",
    content2: "Strong foundation in software systems and engineering fundamentals.",
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: highlight_ai_e2e,
    event: "AI-driven E2E generation platform",
    position: "Scaled across multiple squads",
    content1: "Reduced manual test authoring by 65% while standardizing BDD workflows org-wide.",
    content2: "Shifted test creation from one-off scripting to repeatable platform capability.",
  },
  {
    id: "a-2",
    icon: highlight_visual,
    event: "AI-powered visual testing framework",
    position: "Coverage and review efficiency",
    content1: "Reduced manual visual inspection by 80% while increasing UI regression coverage.",
    content2: "Improved signal quality for catching front-end changes at scale.",
  },
  {
    id: "a-3",
    icon: highlight_model_evaluation,
    event: "AI model evaluation framework",
    position: "Code-free benchmarking at scale",
    content1: "Built a code-free AI model evaluation framework with multi-model benchmarking.",
    content2: "Tracked 15+ quality and safety metrics to enable faster, data-driven model selection across AI platforms.",
  },
  {
    id: "a-4",
    icon: highlight_accessibility,
    event: "Accessibility quality initiatives",
    position: "Leadership visibility enabled",
    content1: "Built dashboards tracking violations, fixes, axe-core findings, screen reader, and VoiceOver progress.",
    content2: "Turned accessibility from ad hoc QA effort into visible engineering governance.",
  },
  {
    id: "a-5",
    icon: highlight_api,
    event: "API validation in release pipelines",
    position: "CI/CD acceleration",
    content1: "Integrated Postman and Playwright API suites into release flows.",
    content2: "Reduced release validation time by 30% and improved confidence before shipping.",
  },
  {
    id: "a-6",
    icon: highlight_regression,
    event: "Regression stability improvements",
    position: "Reliability program owner",
    content1: "Improved regression stability by around 40% with flakiness alerts and automated rerun pipelines.",
    content2: "Created faster feedback loops at scrum level instead of reacting late in release cycles.",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      { id: "pl-1", icon: SiJavascript, name: "JavaScript" },
      { id: "pl-2", icon: SiTypescript, name: "TypeScript" },
      { id: "pl-3", icon: DiJava, name: "Java" },
      { id: "pl-4", icon: SiJenkins, name: "Groovy" },
      { id: "pl-5", icon: SiPython, name: "Python" },
    ],
  },
  {
    title: "Automation & Quality",
    items: [
      { id: "qa-1", icon: SiAutomattic, name: "Playwright" },
      { id: "qa-2", icon: SiSelenium, name: "Selenium" },
      { id: "qa-3", icon: SiCucumber, name: "Cucumber" },
      { id: "qa-4", icon: SiPostman, name: "Postman" },
      { id: "qa-5", icon: SiAmazonapigateway, name: "APIDog" },
      { id: "qa-6", icon: RiRobot2Fill, name: "Visual Testing" },
    ],
  },
  {
    title: "CI/CD & Infrastructure",
    items: [
      { id: "ci-1", icon: SiJenkins, name: "Jenkins" },
      { id: "ci-2", icon: SiGithubactions, name: "GitHub Actions" },
      { id: "ci-3", icon: SiCircleci, name: "CircleCI" },
      { id: "ci-4", icon: FaAws, name: "AWS" },
      { id: "ci-5", icon: FaDocker, name: "Docker" },
      { id: "ci-6", icon: SiKubernetes, name: "Kubernetes" },
      { id: "ci-7", icon: SiTerraform, name: "Terraform" },
      { id: "ci-8", icon: SiOwncloud, name: "LaunchDarkly" },
    ],
  },
  {
    title: "AI & Observability",
    items: [
      { id: "ai-1", icon: SiOpenai, name: "Codex" },
      { id: "ai-2", icon: SiClaude, name: "Claude Code" },
      { id: "ai-3", icon: RiRobot2Fill, name: "Agentic Workflows" },
      { id: "ai-4", icon: SiKibana, name: "Kibana" },
      { id: "ai-5", icon: FaAws, name: "CloudWatch" },
      { id: "ai-6", icon: SiDgraph, name: "Dashboards & Metrics" },
    ],
  },
];

export const experiences = [
  {
    organisation: "HackerRank, Bangalore",
    logo: hackerrank_logo,
    link: "",
    positions: [
      {
        title: "Senior Software Development Engineer in Test",
        duration: "February 2022 - Present",
        content: [
          {
            segments: [
              plainSegment("Built and scaled "),
              highlightSegment("quality platforms"),
              plainSegment(" that combined "),
              highlightSegment("AI-assisted test generation"),
              plainSegment(", "),
              highlightSegment("accessibility validation"),
              plainSegment(", and "),
              highlightSegment("release observability"),
              plainSegment(" to improve engineering confidence across squads."),
            ],
          },
          {
            segments: [
              highlightSegment("Architected and rolled out"),
              plainSegment(" an "),
              highlightSegment("AI-driven E2E test generation platform"),
              plainSegment(" across multiple squads."),
            ],
          },
          {
            segments: [
              plainSegment("Improved "),
              highlightSegment("regression stability by around 40%"),
              plainSegment(" through "),
              highlightSegment("flakiness alerts"),
              plainSegment(" and "),
              highlightSegment("automated rerun pipelines"),
              plainSegment("."),
            ],
          },
          {
            segments: [
              plainSegment("Led "),
              highlightSegment("accessibility quality initiatives"),
              plainSegment(" with "),
              highlightSegment("dashboards"),
              plainSegment(", "),
              highlightSegment("axe-core coverage"),
              plainSegment(", "),
              highlightSegment("screen reader checks"),
              plainSegment(", and "),
              highlightSegment("VoiceOver validation"),
              plainSegment("."),
            ],
          },
          {
            segments: [
              plainSegment("Integrated "),
              highlightSegment("API testing"),
              plainSegment(" into "),
              highlightSegment("CI/CD release flows"),
              plainSegment(", reducing "),
              highlightSegment("validation time by 30%"),
              plainSegment("."),
            ],
          },
          {
            segments: [
              plainSegment("Built "),
              highlightSegment("feature-flag hygiene"),
              plainSegment(" and "),
              highlightSegment("governance tooling"),
              plainSegment(" with "),
              highlightSegment("LaunchDarkly"),
              plainSegment("."),
            ],
          },
          {
            segments: [
              plainSegment("Created "),
              highlightSegment("team initiatives"),
              plainSegment(", consolidated execution, "),
              highlightSegment("accessibility compliance"),
              plainSegment(", and "),
              highlightSegment("test coverage dashboards"),
              plainSegment(" that improved "),
              highlightSegment("quality visibility"),
              plainSegment(" for both squads and leadership."),
            ],
          },
          {
            segments: [
              plainSegment("Created "),
              highlightSegment("AI-powered visual testing"),
              plainSegment(" and multiple "),
              highlightSegment("observability dashboards"),
              plainSegment(" for coverage, execution, and initiatives."),
            ],
          },
          {
            segments: [
              plainSegment("Built a "),
              highlightSegment("config-driven AI model evaluation framework"),
              plainSegment(" with "),
              highlightSegment("multi-model benchmarking"),
              plainSegment(", "),
              highlightSegment("parallel execution"),
              plainSegment(", and "),
              highlightSegment("15+ quality and safety metrics"),
              plainSegment(" to enable "),
              highlightSegment("scalable, data-driven model selection"),
              plainSegment(" across AI platforms."),
            ],
          },
        ],
      },
    ],
  },
  {
    organisation: "Optisol Business Solutions, Chennai",
    logo: optisol_logo,
    link: "",
    positions: [
      {
        title: "Automation Analyst",
        duration: "June 2021 - February 2022",
        content: [
          {
            segments: [
              plainSegment("Established "),
              highlightSegment("reusable UI and API automation foundations"),
              plainSegment(" that helped product teams move from "),
              highlightSegment("manual validation"),
              plainSegment(" to "),
              highlightSegment("maintainable engineering-led test coverage"),
              plainSegment("."),
            ],
          },
          {
            segments: [
              plainSegment("Helped establish a "),
              highlightSegment("foundational Java automation framework"),
              plainSegment(" used across products for "),
              highlightSegment("UI and API testing"),
              plainSegment("."),
            ],
          },
          {
            segments: [
              highlightSegment("Mentored engineers"),
              plainSegment(" transitioning from "),
              highlightSegment("manual testing into automation roles"),
              plainSegment("."),
            ],
          },
          {
            segments: [
              plainSegment("Contributed to "),
              highlightSegment("recruitment"),
              plainSegment(" and "),
              highlightSegment("team capability building"),
              plainSegment(" for quality engineering."),
            ],
          },
        ],
      },
    ],
  },
  {
    organisation: "Infosys Private Limited, Chennai",
    logo: infosys_logo,
    link: "",
    positions: [
      {
        title: "Test Engineer",
        duration: "December 2018 - June 2021",
        content: [
          {
            segments: [
              plainSegment("Strengthened "),
              highlightSegment("enterprise QA delivery"),
              plainSegment(" by contributing to a "),
              highlightSegment("scalable Java Page Object Model framework"),
              plainSegment(" and improving the reliability of "),
              highlightSegment("structured test execution"),
              plainSegment("."),
            ],
          },
          {
            segments: [
              plainSegment("Reviewed "),
              highlightSegment("requirements and specifications"),
              plainSegment(" to support "),
              highlightSegment("quality-first test design"),
              plainSegment("."),
            ],
          },
          {
            segments: [
              plainSegment("Contributed to a "),
              highlightSegment("scalable Java UI automation framework"),
              plainSegment(" using "),
              highlightSegment("Page Object Model"),
              plainSegment(" and "),
              highlightSegment("Maven"),
              plainSegment("."),
            ],
          },
          {
            segments: [
              plainSegment("Built experience in "),
              highlightSegment("structured automation development"),
              plainSegment(", "),
              highlightSegment("maintenance"),
              plainSegment(", and "),
              highlightSegment("product quality validation"),
              plainSegment("."),
            ],
          },
        ],
      },
    ],
  },
];

export const projects = [
  {
    id: "project-1",
    title: "AI-driven E2E Generation Platform",
    github: "",
    link: "",
    image: project_ai_e2e,
    content: "Built an AI-assisted E2E generation platform that standardized BDD workflows across squads and reduced manual test authoring by 65%.",
    stack: [
      { id: "proj1-icon-1", icon: SiTypescript, name: "TypeScript" },
      { id: "proj1-icon-2", icon: SiTestinglibrary, name: "Playwright" },
      { id: "proj1-icon-3", icon: SiCucumber, name: "BDD" },
      { id: "proj1-icon-4", icon: SiOpenai, name: "AI Workflows" },
    ],
  },
  {
    id: "project-2",
    title: "Config-driven AI Model Evaluation Framework",
    github: "",
    link: "",
    image: project_dashboard_suite,
    content: "Built a code-free AI model evaluation framework with multi-model benchmarking, parallel execution, and 15+ quality and safety metrics.",
    stack: [
      { id: "proj2-icon-1", icon: SiOpenai, name: "LLM Evaluation" },
      { id: "proj2-icon-2", icon: SiClaude, name: "Multi-model" },
      { id: "proj2-icon-3", icon: RiRobot2Fill, name: "LLM-as-Judge" },
      { id: "proj2-icon-4", icon: SiDgraph, name: "Quality Metrics" },
    ],
  },
  {
    id: "project-3",
    title: "Flakiness Alerting Pipeline for Test Stability",
    github: "",
    link: "",
    image: project_regression,
    content: "Built a rerun and alerting pipeline to detect flaky suites earlier, shorten failure triage, and improve regression stability across release pipelines.",
    stack: [
      { id: "proj3-icon-1", icon: SiJenkins, name: "Jenkins" },
      { id: "proj3-icon-2", icon: SiGithubactions, name: "GitHub Actions" },
      { id: "proj3-icon-3", icon: SiKibana, name: "Kibana" },
      { id: "proj3-icon-4", icon: SiJavascript, name: "JavaScript" },
    ],
  },
  {
    id: "project-4",
    title: "Accessibility Tracking Dashboard",
    github: "",
    link: "",
    image: project_accessibility,
    content: "Built an accessibility dashboard that unified violations, fix progress, and assistive-technology validation to make accessibility work visible and actionable.",
    stack: [
      { id: "proj4-icon-1", icon: SiJavascript, name: "JavaScript" },
      { id: "proj4-icon-2", icon: SiKibana, name: "Kibana" },
      { id: "proj4-icon-3", icon: SiWebcomponentsdotorg, name: "Accessibility" },
    ],
  },
  {
    id: "project-5",
    title: "Automated API Release Validation",
    github: "",
    link: "",
    image: project_api_release,
    content: "Built API validation into release pipelines using Postman and Playwright, reducing manual verification and cutting validation time by 30%.",
    stack: [
      { id: "proj5-icon-1", icon: SiPostman, name: "Postman" },
      { id: "proj5-icon-2", icon: SiTestinglibrary, name: "Playwright" },
      { id: "proj5-icon-3", icon: SiGithubactions, name: "CI/CD" },
    ],
  },
  {
    id: "project-6",
    title: "AI-powered Visual Testing Framework",
    github: "",
    link: "",
    image: project_visual_testing,
    content: "Built an AI-assisted visual regression framework that reduced manual inspection by 80% and scaled UI change detection across releases.",
    stack: [
      { id: "proj6-icon-1", icon: SiOpenai, name: "AI Review" },
      { id: "proj6-icon-2", icon: SiTestinglibrary, name: "Playwright" },
      { id: "proj6-icon-3", icon: SiTypescript, name: "TypeScript" },
    ],
  },
  {
    id: "project-7",
    title: "Feature Flag Governance Utilities and Dashboards",
    github: "",
    link: "",
    image: project_feature_flags,
    content: "Built LaunchDarkly hygiene tooling to strengthen feature-flag lifecycle management, improve governance, and support more reliable releases across teams.",
    stack: [
      { id: "proj7-icon-1", icon: SiLaunchpad, name: "Feature Flags" },
      { id: "proj7-icon-2", icon: SiJavascript, name: "JavaScript" },
      { id: "proj7-icon-3", icon: SiAmazonwebservices, name: "AWS" },
    ],
  },
  {
    id: "project-8",
    title: "Multiple Quality Dashboard Suites",
    github: "",
    link: "",
    image: project_dashboard_suite,
    content: "Built dashboard suites for execution, coverage, accessibility, and governance to turn quality trends into clear signals for squads and leadership.",
    stack: [
      { id: "proj8-icon-1", icon: SiKibana, name: "Kibana" },
      { id: "proj8-icon-2", icon: SiDatadog, name: "CloudWatch" },
      { id: "proj8-icon-3", icon: SiLooker, name: "Reporting" },
    ],
  },
];

export const blogPosts = [];

export const stats = [
  { id: "stats-1", title: "Manual Test Authoring Reduced", value: "65%" },
  { id: "stats-2", title: "Regression Stability Improved", value: "40%" },
  { id: "stats-3", title: "Visual Inspection Reduced", value: "80%" },
];

export const socialMedia = [
  { id: "social-media-1", icon: AiFillMail, link: "mailto:venkatramans054@gmail.com" },
  { id: "social-media-2", icon: AiFillLinkedin, link: "https://www.linkedin.com/in/venkatraman-sundararajan-971870148/" },
  { id: "social-media-3", icon: AiFillGithub, link: "https://github.com/Venkatramans54" },
];

export const aboutMe = {
  name: "Venkatraman Sundararajan",
  heroRole: "Senior Software Development Engineer in Test",
  tagLinePrimary: "Senior SDET @ HackerRank",
  tagLineSecondary:
    "AI-Driven Test Automation Platforms | Engineering Productivity | Scalable QA Architecture | Accessibility & Observability | Reliable Releases at Scale",
  intro:
    "I design and scale quality platforms that improve how teams test, release, and operate software through AI-assisted automation, accessibility programs, observability, release validation, and internal tooling that increases engineering productivity and confidence at scale.",
};
