import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">Daniel Pellatt</h1>
      <p className="text-2xl md:text-3xl lg:text-4xl">Developer</p>
    </section>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Hero />

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      <Link href="/projects" passHref>
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">
              Projects{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Take a peek at what I've been working on. Some of it's been pretty cool.
            </p>
          </div>
        </Link>

        <a
          // href="will link to about me page"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            About Me{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            I mean... you're here on my site. Come get to know me a little better. 
          </p>
        </a>

        <a
          // href="will link to cert page"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Certifications{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Would you look at all these lovely credentials! <small>(wow so impressive...)</small>
          </p>
        </a>

        <a
          // href="will link to contact page"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Contact{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
              I love a chat! Favorite topics include music, dogs, and hiring me for work.
          </p>
        </a>
      </div>
    </main>
  );
}
