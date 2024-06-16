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

const cards = [
    {
      id: 0,
      name: "Golang",
      designation: "Chi, Echo",
      content: (
        <Icons.golangPng className="flex flex-col justify-center items-center"/>
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

export default function Page() {
    return (
    <>
    <TypewriterEffect words={words} className="mt-20 mb-20"/>
    <LampContainer>
        <>
        <h1>Programming languages</h1>
        <div className="h-[40rem] flex items-center justify-center w-full">
            <CardStack items={cards} />
        </div>
        </>
    </LampContainer>
    <LampContainer>
    <h1>Cloud Technologies</h1>
    </LampContainer>
    <LampContainer>
    <h1>DevOps</h1>
    </LampContainer>
    <LampContainer>
    <h1>Artificial Intelligence</h1>
    </LampContainer>
    </>
    )
  }
  