import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import React from "react";
import { Vortex } from "@/components/ui/vortex";

const words = [
    {
      text: "About",
      className: "text-white"
    },
    {
      text: "Me",
      className: "text-purple-700"
    },
  ]
            
            export default function Page() {
                return (
            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={120}
                className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
            >
            <div className="flex flex-col flex-wrap items-center justify-center">
            
            <TypewriterEffect words={words} className="mt-20 mb-10"/>
            <p>I am an accomplished and innovative software engineer driven by
            a deep passion for driving positive change through crafting efficient, scalable
            and sustainable solutions that address real-world problems.
            With experience across a range of companies from fintech startups
            to an internship with Amadeus and a collaboration on a project with the client IBM, equipping
            me with a diverse skill set and exposure to agile, dynamic, cross-functional and highly regulated environments.</p>
            <p>My profiency spans from web and app development, image recognition, LLMs and neural networks
            to data analysis, network security, software architecture, cloud technologies
            (AWS and Microsoft Azure) and project management. My favourite programming languages are
            Golang, Python and Java and I have thoroughly enjoyed working with tools such as Kubernetes and Terraform.</p>
            <p>I have a relentless desire to learn and grow within the realm of software engineering,
            constantly honing my skills in established areas while expanding my versatility to tackle new challenges.</p>
            
          </div>
          </Vortex>
                )
            }
            
            