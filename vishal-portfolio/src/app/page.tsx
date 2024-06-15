'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import vishal from "@/../public/vishal.png"
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";
import linkedIn from "../../public/linkedin_icon.png"
import gmail from "../../public/gmail.png"

export default function Home() {
  const router = useRouter()
  const words = [
    {
      text: "Welcome",
      className: "text-white"
    },
    {
      text: "to",
      className: "text-white"
    },
    {
      text: "my",
      className: "text-white"
    },
    {
      text: "Portfolio",
      className: "text-purple-700"
    }
  ]
  const name = [
    {
      text: "Vishal",
      className: "text-white"
    },
    {
      text: "Kumar",
      className: "text-white"
    }
  ]

  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <TypewriterEffect words={words} className="mb-20 mt-10"/>
      <div className="z-10 w-full flex-col max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <TypewriterEffect words={words} className="mb-20"/>
        <div className="flex flex-row items-center mt-20">
          <Image
            src={vishal}
            alt="Vishal"
            width={200}
            height={400}
            quality={100}
            placeholder="blur"
            className="w-auto max-w-xs rounded-full mx-auto"
          />
          <div className="flex flex-col items-center px-4 py-4 ml-32">
          <button
            type="button"
            onClick={() => router.push('/experience')}
            className="rounded mt-4 mb-4 bg-blue-700 hover:bg-red-300 text-white py-2 px-4 font-bold"
          >
            Experience
          </button>
        
        
          <button
            type="button"
            onClick={() => router.push('/myprojects')}
            className="rounded mt-4 mb-4 bg-blue-700 hover:bg-red-300 text-white py-2 px-4 font-bold"
          >
            Projects
          </button>

          <button
            type="button"
            onClick={() => router.push('/technologies')}
            className="rounded mt-4 mb-4 bg-blue-700 hover:bg-red-300 text-white py-2 px-4 font-bold"
          >
            Technologies
          </button>
          </div>
        </div>
        <TypewriterEffect words={name} className="mt-20"/>

        <div className="flex flex-row justify-between items-center mt-20">
        <a href="https://www.linkedin.com/in/vishal-kumar-6b5694269/" className="block w-[200px] p-6 mt-20 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <Image
              src={linkedIn}
              alt="Linked In Logo"
              width="100"
              height="100"
              className="flex flex-col justify-center ml-4 pl-4"
              />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white text-center">LinkedIn</h5>
        </a>
        <a href="https://mail.google.com/" className="block w-[500px] p-6 mt-20 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <Image
              src={gmail}
              alt="Gmail Logo"
              width="160"
              height="160"
              className="flex flex-col justify-center ml-32 pl-4"
              />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white text-center">vishalmkumar3@gmail.com</h5>
            
        </a>

        </div>

      </div>
    </main>
    </WavyBackground>
  );
}