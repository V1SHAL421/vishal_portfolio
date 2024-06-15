'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import vishal from "@/../public/vishal.png"

export default function Home() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div>
          <Image
          src={vishal}
          alt="Vishal"
          width={200}
          height={400}
          quality={100}
          placeholder="blur"
          className="w-auto max-w-xs"
          />
          <button type="button" onClick={() => router.push('/experience')}>
            Experience
          </button>
          </div>
          <div>
          <button type="button" onClick={() => router.push('/myprojects')}>
            Projects
          </button>
          </div>
          <div>
          <button type="button" onClick={() => router.push('/contacts')}>
            Contacts
          </button>
        </div>
      </div>
    </main>
  );
}
