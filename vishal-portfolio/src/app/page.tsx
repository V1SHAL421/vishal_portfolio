'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import vishal from "@/../public/vishal.png"
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full flex-col max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <TypewriterEffect words={words} className="mb-20"/>
        <div className="flex flex-row items-center">
          <Image
            src={vishal}
            alt="Vishal"
            width={200}
            height={400}
            quality={100}
            placeholder="blur"
            className="w-auto max-w-xs rounded-full mx-auto"
          />
          <div className="flex flex-col items-center px-4 py-4">
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
            onClick={() => router.push('/contacts')}
            className="rounded mt-4 mb-4 bg-blue-700 hover:bg-red-300 text-white py-2 px-4 font-bold"
          >
            Contacts
          </button>
          </div>
        </div>
      </div>
    </main>
  );
}