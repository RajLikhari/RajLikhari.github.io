import { BriefcaseBusiness, GraduationCap, Hammer, Heart } from "lucide-react";

export const PROFFESSIONAL_EXPERIENCE_CARDS = {
  title: "Professional Experience",
  description:
    "Expert with developing and deploying Java-based APIs and React-based applications across multiple regions. Skilled with architecting event-driven services and dynamic user-interfaces.",
  cards: [
    {
      title: "American Express",
      subtitle: "Software Engineer II",
      footer: "August 2022 - Present",
      description:
        "Building an internal platform that centralizes resource management throughout American Express, such as provisioning managed cloud resources, that currently handles over 2,000 orders per month.",
      href: "https://www.linkedin.com/in/rajlikhari/",
    },
    {
      title: "American Express",
      subtitle: "Software Engineer Intern",
      footer: "June 2021 - August 2021",
      description:
        "Deployed a Java-based application, which utilized Kafka and Couchbase, for creating and managing approvals. Developed UI components to search, sort, and action upon approvals in an Angular-based web application.",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:6805512512914669568/",
    },
  ],
};

export const PROJECTS_AND_EXPERIEMENTS_CARDS = {
  title: "Projects and Experiments",
  description: "Love to create elegant solutions for genuine problems with a focus on providing an exceptional user experience with eye-catching designs.",
  cards: [
    {
      title: "Walley",
      subtitle: "Web Application",
      footer: "Engineered using React, Chakra UI, Spring Boot, Java, and MongoDB.",
      description:
        "Financial planning and insights tool that enables users to create and manage monthly budgets, associate income and transactions with active budgets, and gain deep and valuable insights into the flow of their monetary resources.",
    },
    {
      title: "Commentator",
      subtitle: "Discord Bot",
      footer: "Developed using Javascript, Discord SDK, Docker, and Shell.",
      description:
        "Commentator utilizes Google's text-to-speech (TTS) APIs to announce the arrival and departure of members from a specific voice channel in Discord and has been deployed to an active Discord channel using Docker.",
      href: "https://github.com/RajLikhari/Commentator",
    },
    {
      title: "Coordinates Estimator",
      subtitle: "ROS Node",
      footer: "Developed using Python, BeagleBone Black, Reach M2, and ROS",
      description:
        "Contributed to the AutoDrive Challenge at Texas A&M University by collaborating with a small team to develop a extended Kalman filter capable of estimating a vehicle's coordinates by combining live-data acquired from GPS and IMU units",
    },
  ],
};

export const HIGH_LEVEL_CARDS = [
  {
    icon: <BriefcaseBusiness color="white" width={22} height={22}></BriefcaseBusiness>,
    title: "Career",
    description: "Developing Java APIs and React UIs in a multi-region environment at American Express since 2022.",
  },
  {
    icon: <GraduationCap color="white" width={22} height={22}></GraduationCap>,
    title: "Education",
    description: "Graduated Cum Laude from Texas A&M University in 2022 with a B.S. in Computer Engineering.",
  },
  {
    icon: <Heart color="white" width={22} height={22}></Heart>,
    title: "Interests",
    description: "Passionate about building and being around beautifully crafted designs. Love Music, Biking, Excercising, Cooking, Nature, and Cars.",
  },
  {
    icon: <Hammer color="white" width={22} height={22}></Hammer>,
    title: "Skills",
    description: "Expert with React, Java, and Java/Typescript. Proficent with industry-grade tools such as Kafka and Kubernetes. Certified with AWS, GCP, and Azure.",
  },
];
