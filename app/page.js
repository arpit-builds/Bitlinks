"use client"
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local"
import { useRef, useEffect } from "react";
import Typed from 'typed.js'

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
})

export default function Home() {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Try BitLinks for free', '&amp; check out the github repository.'],
      typeSpeed: 40,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main className="bg-[#f2e8f2]">
      <section className="md:grid md:grid-cols-2 flex flex-col min-h-[calc(100vh-64px)]">
        <div className="flex flex-col items-center md:items-start gap-8 md:ml-40 md:m-0 m-4 mt-10 mt justify-center">
          <p className={`font-bold w-[80%] md:w-full text-4xl ${poppins.className}`}>
            URL shortner at your fingertips
          </p>
          <p className="text-justify w-[80%] md:w-full font-light text-xl">
            We provide a straightforward URL shortner that does not require any kind of authentication. Since we do not ask for login details therefore you are free to use this shortener for a lifetime.
          </p>
          <div className="text-2xl w-[80%] md:w-full">
            <span ref={el} />
          </div>
          <div className="md:hidden flex justify-center relative">
            <Image className="mix-blend-darken object-contain" width={300} height={300} alt="an image of a vector" src={"/url_shorten.png"} />
          </div>
          <div className="flex gap-3">
            <Link href={"/shorten"}><button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Try Bitlinks</button></Link>
            <Link href={`/${process.env.NEXT_PUBLIC_REPO_TEXT}`} target="_blank"><button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
              <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
              </svg>
              Github Repo
            </button></Link>
          </div>
        </div>
        <div className="hidden md:flex justify-center relative">
          <Image className="mix-blend-darken object-contain" width={500} height={500} alt="an image of a vector" src={"/url_shorten.png"} />
        </div>
      </section>
    </main>
  );
}
