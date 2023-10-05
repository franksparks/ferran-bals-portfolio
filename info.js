let info = {
  name: "Ferran Bals",
  logo_name: "Ferran Bals",
  flat_picture: require("./src/assets/Ferran.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false,
    },
  },
  description:
    "My name is Ferran Bals. I have experience as Project Manager & Business Analyst | Quality Assurance Expert | Scrum Master.",
  links: {
    linkedin: "https://www.linkedin.com/in/fbals/",
    github: "https://github.com/franksparks",
    resume: "",
  },
  education: [
    {
      name: "Universitat Oberta de Catalunya",
      place: "Spain",
      date: "Sep, 2016 - July, 2023",
      degree: "Computer Engineering",
      gpa: "7.6/10.0",
      description: "Description.",
      skills: ["Software Engineering"],
    },
  ],
  certification: [
    {
      name: "Complete Vue Developer 2023: From Zero to Mastery (Pinia, Vitest)",
      date: "Issued Feb 2023",
      description: "Desc.",
      skills: ["Vue.js", "JavaScript", "Tailwind CSS"],
    },
    {
      name: "Professional Scrum Master™ I (PSM I)",
      date: "Issued Nov 2020",
      description: "Description.",
      skills: ["Agile", "Scrum"],
    },
    {
      name: "ISTQB - International Software Testing Qualification Board - Foundation Level",
      date: "Issued Dec 2014",
      description: "Description.",
      skills: ["A/B testing", "Automation tests", "Test technologies"],
    },
  ],
  experience: [
    {
      name: "Forte",
      place: "USA",
      date: "Jul, 2022 - Present",
      position: "Project Manager",
      description:
        "Project Manager overseeing two development teams. Proficient in translating business requirements into Jira tasks. Ensure code quality through rigorous code review and validation. Expert in managing Scrum ceremonies. Collaborate with stakeholders to define team objectives. Regularly meet with stakeholders to strategize team goals.",
      skills: [
        "Jira",
        "Confluence",
        "Reporting",
        "Requirements elicitation",
        "Agile",
      ],
    },
    {
      name: "Aizon",
      place: "Barcelona, Spain",
      date: "Mar, 2021 - Jul, 2012",
      position: "Software Business Analyst",
      description:
        "Define configuration specifications and software business analysis requirements, formalizing them into documented specifications for stakeholders. Create UML diagrams to illustrate how the product aligns with business scenarios.",
      skills: [
        "UML",
        "BPMN",
        "API definition",
        "Technical Documentation",
        "Agile",
      ],
    },
    {
      name: "Tembeza Labs",
      place: "Barcelona, Spain",
      date: "Jan, 2020 - Mar, 2021",
      position: "Business Analyst/Product Owner",
      description:
        "Jira/Confluence Guidelines and Project Coordination  Define Jira/Confluence guidelines, procedures, and best practices. Establish a structured documentation framework. Coordinate different teams to collaborate effectively in achieving project goals. Requirements Expertise and Meetings: Serve as a subject matter expert in requirements elicitation. Facilitate daily standup, Retro, and Review meetings. Atlassian Suite Management: Manage users, groups, permissions, and projects within the Atlassian suite.",
      skills: [
        "Jira",
        "Confluence",
        "Requirements elicitation",
        "Documentation",
        "Agile",
      ],
    },
    {
      name: "Cegedim",
      place: "Barcelona, Spain",
      date: "Feb, 2018 - Jan, 2020",
      position: "Functional Analyst",
      description:
        "Analyze existing systems and identify areas for improvement. Identify opportunities for new software/services development. Decompose complex requirements. Perform gap analysis and recommend solutions. Act as a subject matter expert in requirement elicitation. Document requirements, create functional specifications, and prepare wireframes/flowcharts. Set acceptance criteria for requests.",
      skills: [
        "Jira",
        "Confluence",
        "Requirements elicitation",
        "Documentation",
        "Agile",
      ],
    },
    {
      name: "Cegedim",
      place: "Barcelona, Spain",
      date: "Jul, 2016 - Feb, 2018",
      position: "QA Tester",
      description:
        "Plan, prepare, and execute manual test cases for system and integration testing using Jira. Skilled in writing bug reports and tracking them to closure using Jira. Experienced in test automation using Selenium, Java, and Git..",
      skills: ["Jira", "Confluence", "Automation tests", "Bug reporting"],
    },
    {
      name: "UTC Fire and Security",
      place: "Barcelona, Spain",
      date: "Apr, 2013 - Jul, 2016",
      position: "Test Technician Lead",
      description:
        "Proficient in using HP Quality Center for quality assurance. Experienced in defining test plans and creating, tracking, and executing test cases in HP Quality Center. Skilled in testing prototypes to identify and advise Engineering on bug resolution. Strong understanding of Testing and Quality Assurance methodologies and processes. Capable of reviewing requirements and defining test cases based on them.",
      skills: ["HP Quality Center", "Bug reporting", "Test plan definition"],
    },
    {
      name: "UTC Fire and Security",
      place: "Barcelona, Spain",
      date: "Jan, 2009 - Apr, 2013",
      position: "Test Technician",
      description:
        "Executed test cases for Fire Security products. Tracked and documented bugs using HP Quality Center. Actively participated in cross-team meetings.",
      skills: ["HP Quality Center", "Bug reporting"],
    },
  ],
  skills: [
    {
      title: "languages",
      info: [
        "Python",
        "Javascript",
        "TypeScript",
        "Java",
        "C",
        "C++",
        "SQL",
        "NoSQL",
        "Ruby",
      ],
      icon: "fa fa-code",
    },
    {
      title: "data frameworks",
      info: [
        "Keras",
        "Numpy",
        "Pandas",
        "OpenCV",
        "SciPy",
        "Sklearn",
        "LibROSA",
        "Pillow",
      ],
      icon: "fa fa-cubes",
    },
    {
      title: "web technologies",
      info: ["Vue", "Angular", "React", "Node", "Flask", "HTML", "CSS"],
      icon: "fas fa-laptop-code",
    },
    {
      title: "databases",
      info: ["MongoDB", "MySQL", "OracleSQL", "Neo4j"],
      icon: "fa fa-database",
    },
    {
      title: "operating systems & tools",
      info: [
        "MacOS",
        "Ubuntu",
        "Windows",
        "Android",
        "Agile",
        "Scrum",
        "JIRA",
        "Heroku",
        "Firebase",
        "AWS S3",
      ],
      icon: "fas fa-tools",
    },
    {
      title: "design",
      info: ["Illustrator", "XD", "Photoshop", "Final Cut Pro"],
      icon: "fa fa-pencil-square-o",
    },
  ],
  recommendations: [
    {
      title:
        "As a very senior and business-oriented person, I saw him progressing very fast and organizing the work inside the team. He is able to remember all JIRA tickets numbers and feel a big enthusiasm when detects complex errors or when find inconsistencies in the requirements. When it happens, is able to take it always in a proper way and gets the ownership of the feature until is fixed or the grey area of the requirement has been well defined and understood. Is very easy to work with Ferran. It is one of the most respectful people I know.",
      author: "Daniel Jiménez Sánchez",
      position: "Team Lead",
      company: "Ericsson",
    },
    {
      title:
        "Ferrán is a very positive, constant and planning person. It was always a pleasure to share any project with him. His persistence and courage in the face of difficulties make him a person to be reckoned with in dynamic work environments. I would love to work with him again soon.",
      author: "Fernando Roldán Ibáñez",
      position:
        "Sr Corporate Sales Development | Sales, Human Resources & Finance Solutions",
      company: "Workday",
    },
  ],
};

export default info;
