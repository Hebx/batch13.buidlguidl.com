"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import type { NextPage } from "next";

const BuilderPage: NextPage = () => {
  const pathname = usePathname();

  return (
    <div className="max-w-lg mx-auto pt-10 px-5">
      <h1 className="text-center mb-4">
        <div className="text-2xl mb-2">👋🏻 Hi, everyone!</div>
        <div className="text-4xl">
          <span className="pr-2">My name is</span>
          <span className="font-bold">Teddy Leno</span>
        </div>
      </h1>
      <Image
        src={`/pfp-${pathname?.replace("/builders/", "")}.jpg`}
        alt="profile picture"
        width={256}
        height={256}
        className="object-cover mx-auto rounded-xl shadow-xl"
      />
      <br />
      <p className="-mb-4 text-lg">ℹ️ Here is some information about me:</p>
      <p className="text-md text-justify">
        I am a Software Developer with 3 years of experience in blockchain development and 8 years of expertise in both
        frontend and backend development. At the core of my blockchain expertise is Solidity, which I leverage to build
        secure and efficient smart contracts. My technical proficiency also includes SQL, PHP, HTML, CSS, JavaScript,
        and Typescript, as well as deep experience with ReactJS, React Native, NodeJS, and NextJS for creating
        intuitive, responsive applications. Furthermore, I utilize Ethers.js, Web3.js, and Hardhat to develop
        cutting-edge decentralized applications (dApps) that are scalable and innovative.
      </p>
      <br />
      <p className="mb-0 text-lg">🔗 Follow me on:</p>
      <ul className="flex items-center gap-x-4">
        <li>
          <a
            href="https://github.com/lenoteddy"
            className="underline text-gray-500 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://t.me/teddyleno"
            className="underline text-sky-500 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </li>
        <li>
          <a
            href="https://x.com/lenoteddy"
            className="underline text-gray-900 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </li>
        <li>
          <a
            href="https://discordapp.com/users/874985086565613598"
            className="underline text-purple-500 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BuilderPage;
