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
      className: "text-purple-700"
    }
  ]

  return (
    <WavyBackground className="max-w-4xl mx-auto">
      <main className="flex flex-col items-center justify-between px-4 py-8 lg:p-24 w-full h-screen">
      <TypewriterEffect words={words} className="mt-4 sm:mt-40 md:mt-10 lg:mt-10 mb-10" />
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between max-w-5xl w-full">
          <Image
            src={vishal}
            alt="Vishal"
            width={200}
            height={400}
            quality={100}
            placeholder="blur"
            className="rounded-full mx-auto my-4 lg:my-0 lg:mx-0"
          />
          <div className="flex flex-col items-center px-4 py-4 mt-4 lg:ml-32">
            <button
              type="button"
              onClick={() => router.push('/experience')}
              className="w-full lg:w-[200px] h-[50px] rounded bg-blue-700 hover:bg-red-300 text-white py-2 px-4 font-bold mb-4" // Responsive width
            >
              Experience
            </button>
            <button
              type="button"
              onClick={() => router.push('/myprojects')}
              className="w-full lg:w-[200px] h-[50px] rounded bg-blue-700 hover:bg-red-300 text-white py-2 px-4 font-bold mb-4" // Responsive width
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => router.push('/technologies')}
              className="w-full lg:w-[200px] h-[50px] rounded bg-blue-700 hover:bg-red-300 text-white py-2 px-4 font-bold mb-4" // Responsive width
            >
              Technologies
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center w-full mt-4"> 
            <a href="https://www.linkedin.com/in/vishal-kumar-6b5694269/" className="flex flex-col items-center w-full lg:w-[500px] h-[200px] p-6 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4">
              <Image
                src={linkedIn}
                alt="Linked In Logo"
                width="100"
                height="100"
                className="justify-center"
              />
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white text-center">LinkedIn</h5>
            </a>
            <a href="https://mail.google.com/" className="flex flex-col items-center w-full lg:w-[500px] h-[200px] pt-12 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4">
              <Image
                src={gmail}
                alt="Gmail Logo"
                width="140"
                height="140"
                className="justify-center"
              />
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white text-center">vishalmkumar3@gmail.com</h5>
            </a>
            <a href="https://github.com/V1SHAL421" className="flex flex-col items-center w-full lg:w-[500px] h-[200px] pt-12 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <Image
                src={github}
                alt="Github Logo"
                width="110"
                height="110"
                className="justify-center"
              />
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white text-center">Github</h5>
            </a>
          </div>
        </div>
      </main>
    </WavyBackground>
  );
}