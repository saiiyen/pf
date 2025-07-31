import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "TTEC DIGITAL",
    companyName: "TTEC DIGITAL",
    companyLogo: "https://pub-b9f1ea6eba4648bc86b786e948113865.r2.dev/Assets/TTECDIGITAL.jpeg",
    //"https://pub-b9f1ea6eba4648bc86b786e948113865.r2.dev/Assets/TTEC-Digital.png",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Associate Consultant",
        employmentPeriod: {
          start: "01.2024",
          end:"09.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: ` -Developed cloud health monitoring dashboards using Datadog APIs to integrate and visualize performance metrics across multi-cloud environments,using React,Typescript,Angular,Node & Express,to enhance system visibility and operational insights for Surround CX Platform.
- Implemented proactive monitoring strategies in Datadog to detect and address system anomalies in real-time, contributing to improved system reliability and performance.
-Created automation scripts to streamline configuration tasks for Genesys Cloud CX, reducing manual effort and enhancing operational efficiency.
- Enhanced the performance of internal asset tools for Genesys Cloud agent UI by Unit testing,focusing on improving user experience and interface usability.
- Collaborated closely with product managers to define requirements and UX flows,translating them into functional UI components.
- Architected CX flows in Genesys Cloud CX with Visio,ensuring effectiveness through rigorously testing`,
        skills: [
          
          "Agile Methodologies",
          "Product Engineering",
          "Teamwork",
          "Research",
          "Problem-solving",
          "TypeScript",
          "Next.js",
          "React",
          "Angular",
          "Node",
          "Express",
          "Firebase",
          "Datadog",
          "UI",
          "Test Driven Devlopment",
          "Cloud Monitoring",
          "Datadog",
          "Genesys Cloud CX"
        ],
        isExpanded: true,
      },
      {
        id: "cedd7adb-4118-4085-9983-ae00530b49e2",
        title: "System Software Associate Programmar",
        employmentPeriod: {
          start: "6.2023",
          //end:"01.2024",
        },
        employmentType: "Full-time",
        icon: "business",
        description: `- Designed and implemented scalable customer interaction flows in Genesys Cloud CX using Visio, focusing on omnichannel customer engagements and intelligent call routing.
- Configured and managed critical Genesys Cloud CX components, including schedules, queues, and user groups, to optimize resource allocation and contact center efficiency.

- Engineered advanced call routing strategies utilizing Advanced Notification Queue (ANQ) and Custom Routing Template (CRT), aimed at improving call handling efficiency and customer satisfaction.
- Conducted thorough testing of customer interaction flows to ensure they met operational standards and requirements.`,
        skills: ["Genesys Cloud CX", "Unit Testing", "Flow Design","Call Routing Strategies","Configuration management","Cloud Sec"],
        isExpanded: false,
      },
    ],
    
    //isCurrentEmployer: true,
  },
      
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faau",
        title: "Full-stack Developer",
        employmentPeriod: {
          start: "05.2025",
          end: "08.2025",
        },
        employmentType: "Part-time",
        description: `- Built a fully responsive web application for a home and commercial cleaning startup.
- Engineered a complete booking platform for a cleaning services startup, enabling seamless service scheduling and services.
- Built a structured user flow from onboarding to booking confirmation, with real-time transaction tracking and admin control.
- Implemented a lightweight internal ops dashboard for service providers to monitor booking metrics.
- Designed a customizable high-conversion landing page experience with service clarity, animated transitions, and intuitive CTAs.`,
        icon: "code",
        // skills: [
        //   "Express",
        //   "React",
        //   "Express.js",
        //   "Socket.IO",
        //   "MongoDB",
        //   "Firebase",
        //   "Deployment"
        // ],
      },
    ],
  },

  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "BVRIT — UG Orchard Campus ",
        employmentPeriod: {
          start: "08.2019",
          end: "2023",
        },
        icon: "education",
        description: `- Undergad from BVRIT (B V Raju Institute of Technology) Bachelor's degree in Information Technology.
- Focused on practical learning, real-world application development, and continuous upskilling through self-initiated projects.`
,
        skills: [
          "C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Distributed Systems",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "Sri Chaitanya junior college",
        employmentPeriod: {
          start: "06.2017",
          end: "01.2019",
        },
        icon: "education",
        description: `- Higher Secondary Education, Student of the Specialized MPC Program.

 
- Achieved the title of Outstanding Student for academic excellence.
- Consistently ranked top of the class for two consecutive years during higher secondary education.


`,
        skills: [
          "Algo",
          "C",
          "Mathematics",
          "Physics",
          "Chemsitry",
          "Self-learning",
          "Problem Solving",
          "Analytical Thinking",
        ],
      },
      {
        id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
        title: "Bhashyam High School",
        employmentPeriod: {
          start: "08.2015",
          end: "06.2017",
        },
        icon: "education",
        description: `- Graduated with distinction and consistently performed well in Science and Mathematics.
- Won school-level volleyball tournaments.
  `,
        skills: [
          "Teamwork",
          "Competitive Spirit",
          "Discipline",
          "Self-learning",
        ],
      },
    ],
  },
];
