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
    title: "AI Automation Team at Amazon",
    description: "Implementing a Text-to-SQL agentic workflow for 100+ million rows of financial data to support reporting and analytics.",
    header: <div className="flex flex-col items-center justify-center w-full mt-16"><Icons.amazonLogoPng className="justify-center"/></div>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Co-Founder at CoolEat",
    description: "Managed a team of 6 to construct the MVP of a web application.",
    header: <div className="flex flex-col items-center justify-center w-full mt-16"><Icons.cooleatLogoPng className="justify-center"/></div>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Co-Founder at Denr",
    description: "Managed a team of 7 to construct the MVP of a mobile application.",
    header: <div className="flex flex-col items-center justify-center w-full mt-16"><Icons.denrJpg className="justify-center"/></div>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Software Engineer Intern at Amadeus",
    description: "Creating a passenger-facing screen to connect to an agent-facing screen through Microsoft Azure infrastructure.",
    header: <div className="flex flex-col items-center justify-center w-full mt-16"><Icons.amadeusLogoPng className="justify-center"/></div>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "App Developer Intern at 10zyme",
    description:
      "Constructed an app to help HPV patients through access to diagnostics and professional consultants.",
    header: <div className="flex flex-col items-center justify-center w-full mt-10"><Icons.tenZymePng className="justify-center"/></div>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Backend Developer Intern at FoodClub",
    description: "Constructed endpoints for the backend of a mobile app.",
    header: <div className="flex flex-col items-center justify-center w-full mt-10"><Icons.foodClubPng className="justify-center"/></div>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Project Intern",
    description: <p>Involved in an artificial intelligence project that plans to improve educational services where the attention profiles of students are monitored and shared with parents through their progress reports. </p>,
    header: <div className="flex flex-col items-center justify-center w-full mt-10"><Icons.nxtuitionsJpg className="justify-center"/></div>,
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
    text: "past",
    className: "text-white"
  },
  {
    text: "experiences",
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
  