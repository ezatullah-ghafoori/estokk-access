'use client'
import Image from "next/image";
import bgImg from '@/assets/img/bg-img.png'
import { useState } from "react";

export default function Home() {
  const [error, setError] = useState<boolean>(false);
  return (
    <main
      className="min-h-screen relative overflow-hidden bg-cover bg-center pt-20"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <section className="relative mx-auto max-w-[1200px] px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <div>
            <h1 className="text-white font-extrabold leading-[0.95] text-4xl md:text-4xl lg:text-7xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
              Exclusive Real Estate
              <br />
              Investment<span className="text-[#7ef6ff]">.</span>
            </h1>

            <div className="mt-6 space-y-3 text-xl md:text-2xl text-white/80 font-medium">
              <p>
                Revolutionizing <span className="text-white/90">property ownership</span>
              </p>
              <p>
                Powered by <span className="text-[#7ef6ff]">Blockchain</span>
              </p>
              <p>
                Rental Income Up to <span className="text-[#7ef6ff]">12% Yield</span>
              </p>
            </div>

            <div className="mt-8 h-[3px] w-24 bg-white/70 rounded-full" />

            <div className="mt-6 flex flex-wrap gap-4">
              <input className="px-6 py-3 rounded-lg bg-[#00fdff]/90 hover:bg-[#00fdff] text-white font-semibold shadow-lg transition focus:outline-none placeholder:text-white" placeholder="Invitation Code" />
              <button className="px-6 py-3 rounded-lg bg-white hover:bg-white/90 text-[#00fdff] font-semibold shadow-lg transition border border-white/20" onClick={() => {
                setError(true);
                const timeoutId = setTimeout(() => {
                  setError(false);

                  clearTimeout(timeoutId);
                }, 3000)
              }}>
                Get me access
              </button>
            </div>
            {
              error && <h1 className="text-red-400 font-bold">Invalid Invitation code please try again!</h1>
            }
          </div>
        </div>
      </section>
    </main>
  );;
}
