import { Icons } from "@/components/icons";
import Link from "next/link";
import { LampContainer } from "@/components/ui/lamp";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

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

export default function Page() {
    return (
    <>
    <TypewriterEffect words={words} className="mt-20 mb-20"/>
    <LampContainer>
    <h1>Programming languages</h1>
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
    <LampContainer>
    <h1>Frameworks</h1>
    </LampContainer>
    </>
    )
  }
  