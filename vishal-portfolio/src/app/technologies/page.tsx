import { Icons } from "@/components/icons";
import Link from "next/link";
import { LampContainer } from "@/components/ui/lamp";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { CardStack } from "@/components/ui/card-stack";


const words = [
    {
        text: "Here",
        className: "text-white"
    },
    {
        text: "are",
        className: "text-white"
    },
    {
        text: "my",
        className: "text-white"
    },
    {
        text: "favourite",
        className: "text-white"
    },
    {
        text: "technologies",
        className: "text-purple-700"
    },
]

const languages = [
    {
      id: 0,
      name: "Golang",
      designation: "Chi, Echo",
      content: (
        <Icons.golangPng />
      ),
    },
    {
      id: 1,
      name: "Python",
      designation: "Django, Pytorch, Numpy, Matplotlib, Tensorflow, Pandas, Keras",
      content: (
        <Icons.pythonPng />
      ),
    },
    {
      id: 2,
      name: "Java",
      designation: "Springboot",
      content: (
        <Icons.javaPng />
      ),
    },
    {
        id: 3,
        name: "TypeScript",
        designation: "Express.js, Next.js, React Native, React.js",
        content: (
          <Icons.typescriptPng />
        ),
    },
    {
        id: 4,
        name: "Rust",
        designation: "Actix Web",
        content: (
          <Icons.rustPng />
        ),
    },
    {
        id: 5,
        name: "C++",
        designation: "Google Test",
        content: (
          <Icons.cPlusPlusPng />
        ),
    },
    {
        id: 6,
        name: "JavaScript",
        designation: "Express.js, Next.js, React Native, React.js, Node.js",
        content: (
          <Icons.javascriptPng />
        ),
    },
  ];

const cloudtech = [
    {
      id: 0,
      name: "AWS",
      designation: "EC2, DynamoDB, Amplify, S3, Cognito, IAM",
      content: (
        <Icons.awsPng />
      ),
    },
    {
      id: 1,
      name: "Microsoft Azure",
      designation: "Azure Web PubSub, Azure Service Bus, Azure Functions, Azure Active Directory, Azure Key Vault, Azure Monitor",
      content: (
        <Icons.azureJpg />
      ),
    },
    {
      id: 2,
      name: "Vercel",
      designation: "Software Deployment Platform as a Service",
      content: (
        <Icons.vercelPng />
      ),
    },
];

const devops = [
    {
      id: 0,
      name: "Git",
      designation: "VCS used for tracking source code changes during the development process",
      content: (
        <Icons.gitPng />
      ),
    },
    {
        id: 1,
        name: "Github Actions",
        designation: "CI/CD platform to automate your build, test and deployment pipeline.",
        content: (
          <Icons.githubActionsPng />
        ),
    },
    {
        id: 2,
        name: "Terraform",
        designation: "IaC (Infrastructure as Code) that provisions and manages cloud infrastructure through tf files.",
        content: (
          <Icons.terraformPng />
        ),
    },
    {
        id: 3,
        name: "Slack",
        designation: "Collaboration tool that can integrate with other DevOps tools.",
        content: (
          <Icons.slackPng />
        ),
    },
    {
        id: 4,
        name: "Jira",
        designation: "Project management tool for tracking issues and bugs",
        content: (
          <Icons.jiraPng />
        ),
    },
    {
        id: 5,
        name: "Prometheus",
        designation: "Provides metrics through monitoring functionality.",
        content: (
          <Icons.prometheusPng />
        ),
    },
    {
        id: 6,
        name: "Redis",
        designation: "To be used as a database and/or a cache.",
        content: (
          <Icons.redisPng />
        ),
      },
      {
          id: 7,
          name: "Docker",
          designation: "PaaS that packages software into containers to be run on any machine with Docker.",
          content: (
            <Icons.dockerPng />
          ),
      },
      {
          id: 8,
          name: "Kubernetes",
          designation: "Container Orchestration - automates the management and deployment",
          content: (
            <Icons.kubernetesPng />
          ),
      },
]

const ai = [
    {
        id: 0,
        name: "Prompt Engineering",
        designation: "Providing prompts for the model as a means of demonstration.",
        content: (
            <Icons.promptEngineeringPng />
        ),
    },
    {
        id: 1,
        name: "HyperOpt",
        designation: "Tool that provides optimized hyperparameters.",
        content: (
        <Icons.hyperoptPng />
        ),
    },
    {
        id: 2,
        name: "LLMs",
        designation: "Large Language Models (T5, BERT, Electra, Babbage, Ada)",
        content: (
            <Icons.openaiPng />
        ),
    },
    {
    id: 3,
    name: "Reinforcement Learning",
    designation: "Q-Learning, Temporal Difference Learning, SARSA",
    content: (
        <Icons.reinforcementLearningPng />
    ),
    },
    {
    id: 4,
    name: "Number Classifaction",
    designation: "Can be done with the MNIST dataset.",
    content: (
        <Icons.mnistPng />
    ),
    },
    {
    id: 5,
    name: "Image Classification",
    designation: "OpenCV, DLib, Numpy, Haarcascades",
    content: (
        <Icons.imageClassificationPng />
    ),
    },
    {
    id: 6,
    name: "Data Visualization",
    designation: "Matplotlib, Seaborn",
    content: (
        <Icons.dataVisualizationPng />
    ),
    },
    {
    id: 7,
    name: "Neural Networks",
    designation: "Recurrent Neural Networks, Convolutional Neural Networks",
    content: (
    <Icons.neuralNetworkPng />
    ),
    },

];

export default function Page() {
    return (
    <>
    <TypewriterEffect words={words} className="mt-20 mb-20"/>
    <h1 className="flex flex-col items-center font-sans text-2xl font-extrabold">Programming languages</h1>
    <LampContainer>
        <div className="h-[40rem] flex items-center justify-center w-full">
            <CardStack items={languages} />
        </div>

    </LampContainer>
    <h1 className="flex flex-col items-center font-sans text-2xl font-extrabold">Cloud technologies</h1>
    <LampContainer>
        <div className="h-[40rem] flex items-center justify-center w-full">
            <CardStack items={cloudtech} />
        </div>
    </LampContainer>
    <h1 className="flex flex-col items-center font-sans text-2xl font-extrabold">DevOps</h1>
    <LampContainer>
        <div className="h-[40rem] flex items-center justify-center w-full">
            <CardStack items={devops} />
        </div>
    </LampContainer>
    <h1 className="flex flex-col items-center font-sans text-2xl font-extrabold">Artificial Intelligence</h1>
    <LampContainer>
        <div className="h-[40rem] flex items-center justify-center w-full">
            <CardStack items={ai} />
        </div>
    </LampContainer>
    </>
    )
  }
  