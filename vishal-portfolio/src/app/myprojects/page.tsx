import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import amadeus from "../../../public/amadeus_logo.png"
import { Icons } from "@/components/icons";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "IBM Project: Byte Battles",
    description: "Focus on online gamification as a means of evolution of the online platform through implementing a gamification feature - a web application. Use LLMs model to evaluate the performance of online gamification for the platform",
    header: <div className="flex flex-col items-center justify-center w-full mt-16"><Icons.ibmLogoPng className="justify-center"/></div>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  
  {
    title: "Daily Delve",
    description: "Immersed in a personal project where I built a website featuring both a public blog and a private diary.",
    header: <div className="flex flex-col items-center justify-center w-full mt-4"><Icons.diaryPng className="justify-center"/></div>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Handwritten-digits-classification",
    description:
      "The simple MNIST classification model is built using PyTorch and visualized with Matplotlib. It is designed to recognize handwritten digits from the MNIST dataset.",
      header: <div className="flex flex-col items-center justify-center w-full mt-4"><Icons.mnistClassificationPng className="justify-center"/></div>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Health Hub",
    description: "As a core team member, I contributed to building an all-in-one health app using PERN stack. My focus was on the backend for the mental health section, handling user data collection and storage efficiently. I ensured code quality with comprehensive unit and integration tests and compiled a detailed project report.",
    header: <div className="flex flex-col items-center justify-center w-full mt-16"><Icons.kclPng className="justify-center"/></div>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Student Behaiour Analysis",
    description: "A project where students’ attention profiles are monitored. Done through Deep Learning model to track the eyes of the student.",
    header: <div className="flex flex-col items-center justify-center w-full mt-10"><Icons.nxtuitionsJpg className="justify-center"/></div>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "HFT",
    description: "Created ML algorithms for A high performance, low latency high frequency trading system written in C++.",
    header: <div className="flex flex-col items-center justify-center w-full mt-8"><Icons.hftPng className="justify-center"/></div>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AirBNB Project",
    description: "Constructed an AirBNB project in a team of four through leveraging Java frameworks.",
    header: <div className="flex flex-col items-center justify-center w-full mt-16"><Icons.kclPng className="justify-center"/></div>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  
];

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
    text: "projects",
    className: "text-purple-700"
  },
]

export default function Page() {
  return (
    <>
    <TypewriterEffect words={words} className="mt-20 mb-20"/>
    <BentoGrid className="max-w-4xl mx-auto mb-10">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </>
  );
  }