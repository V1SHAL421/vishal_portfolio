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
    title: "NASA Tech Info Agentic System",
    description: "An agentic workflow to provide real-time information on NASA technology projects, including RAG from NASA APIs.",
    header: <div className="flex flex-col items-center justify-center w-full mt-16"><Icons.nasaLogoPng className="justify-center"/></div>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "x86 Bootloader",
    description: "An x86 bootloader written in Assembly configured for MacOS",
    header: <div className="flex flex-col items-center justify-center w-full mt-16"><Icons.x86BootloaderPng className="justify-center"/></div>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "MarketFlow ETL",
    description: "An ETL pipeline constructed to ingest tick data from Yahoo! Finance's API (stock market data) into a data lake and then transform the data before loading it into a data warehouse for querying.",
    header: <div className="flex flex-col items-center justify-center w-full mt-16"><Icons.stockMarketLogoPng className="justify-center"/></div>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Merton Moves",
    description: "A gamification hub designed to encourage a young target demographic in Merton borough to be more active through multiple components involved, including a step tracker, an events page, an AI search tool and a rewards page.",
    header: <div className="flex flex-col items-center justify-center w-full mt-16"><Icons.mertonMovesLogoPng className="justify-center"/></div>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "IBM Project: Byte Battles",
    description: "Focused on online gamification as a means of evolution of the online platform through implementing a gamification feature - a web application. Use LLMs model to evaluate the performance of online gamification for the platform",
    header: <div className="flex flex-col items-center justify-center w-full mt-16"><Icons.ibmLogoPng className="justify-center"/></div>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  
  // {
  //   title: "Daily Delve",
  //   description: "Immersed in a personal project where I built a website featuring both a public blog and a private diary.",
  //   header: <div className="flex flex-col items-center justify-center w-full mt-4"><Icons.diaryPng className="justify-center"/></div>,
  //   icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "Handwritten-digits-classification",
  //   description:
  //     "This simple MNIST classification model is built using PyTorch and visualized with Matplotlib. It is designed to recognize handwritten digits from the MNIST dataset.",
  //     header: <div className="flex flex-col items-center justify-center w-full mt-4"><Icons.mnistClassificationPng className="justify-center"/></div>,
  //   icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  // },
  {
    title: "Internal Admin Dashboard",
    description: "A web application developed to monitor and provide metrics on users on a lending application.",
    header: <div className="flex flex-col items-center justify-center w-full mt-16"><Icons.loanPng className="justify-center"/></div>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Health Hub",
    description: "As a core team member, I contributed to building an all-in-one health app using PERN stack. My focus was on the backend for the mental health section, handling user data collection and storage efficiently. I ensured code quality with comprehensive unit and integration tests and compiled a detailed project report.",
    header: <div className="flex flex-col items-center justify-center w-full mt-16"><Icons.kclPng className="justify-center"/></div>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  
  // {
  //   title: "Student Behaviour Analysis",
  //   description: "A project where students’ attention profiles are monitored. Done through Deep Learning model to track the eyes of the student.",
  //   header: <div className="flex flex-col items-center justify-center w-full mt-10"><Icons.nxtuitionsJpg className="justify-center"/></div>,
  //   icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "HFT",
  //   description: "Created ML algorithms for A high performance, low latency high frequency trading system written in C++.",
  //   header: <div className="flex flex-col items-center justify-center w-full mt-8"><Icons.hftPng className="justify-center"/></div>,
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "AirBNB Project",
  //   description: "Constructed an AirBNB project in a team of four through leveraging Java frameworks.",
  //   header: <div className="flex flex-col items-center justify-center w-full mt-16"><Icons.kclPng className="justify-center"/></div>,
  //   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  // },
  
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