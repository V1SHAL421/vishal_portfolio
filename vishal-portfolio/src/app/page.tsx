'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import vishal from "@/../public/vishal.png"
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { WavyBackground } from "@/components/ui/wavy-background";
import linkedIn from "../../public/linkedin_icon.png"
import gmail from "../../public/gmail.png"
import github from "../../public/github.jpg"

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
    <TypewriterEffect words={words} className="mt-40"/>
      <div className="z-10 w-full flex-col max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
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
            className="block w-[200px] h-[50px] rounded mt-4 mb-4 bg-blue-700 hover:bg-red-300 text-white py-2 px-4 font-bold"
          >
            Experience
          </button>
        
        
          <button
            type="button"
            onClick={() => router.push('/myprojects')}
            className="block w-[200px] h-[50px] rounded mt-4 mb-4 bg-blue-700 hover:bg-red-300 text-white py-2 px-4 font-bold"
          >
            Projects
          </button>

          <button
            type="button"
            onClick={() => router.push('/technologies')}
            className="block w-[200px] h-[50px] rounded mt-4 mb-4 bg-blue-700 hover:bg-red-300 text-white py-2 px-4 font-bold"
          >
            Technologies
          </button>
          </div>
        </div>
        <TypewriterEffect words={name} className="mt-20"/>

        <div className="flex flex-row justify-between items-center mt-4">
        <a href="https://www.linkedin.com/in/vishal-kumar-6b5694269/" className="flex flex-col items-center block w-[500px] h-[200px] p-6 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <Image
              src={linkedIn}
              alt="Linked In Logo"
              width="100"
              height="100"
              className="flex flex-col justify-center"
              />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white text-center">LinkedIn</h5>
        </a>
        <a href="https://mail.google.com/" className="flex flex-col items-center block w-[500px] h-[200px] pt-12 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <Image
              src={gmail}
              alt="Gmail Logo"
              width="140"
              height="140"
              className="flex flex-col justify-center"
              />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white text-center">vishalmkumar3@gmail.com</h5>
            
        </a>
        <a href="https://github.com/V1SHAL421" className="flex flex-col items-center block w-[500px] h-[200px] pt-12 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <Image
              src={github}
              alt="Github Logo"
              width="110"
              height="110"
              className="flex flex-col justify-center"
              />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white text-center">Github</h5>
            
        </a>
        </div>

      </div>
    </main>
    </WavyBackground>
  );
}