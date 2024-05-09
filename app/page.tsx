"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="">
      <nav
        className={`flex items-center justify-between p-4 pl-80 pr-80 top-0 z-50 transition-colors fixed left-0 right-0 ${
          isScrolled ? "bg-white text-black p-2" : "bg-transparent text-white"
        }`}
        style={{
          transition: "background-color 0.5s, padding 0.5s",
        }}
      >
        <Image src="/Saloon.png" alt="Saloon RôlePlay" width={50} height={50} />
        <ul className="flex items-center space-x-4 gap-10">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollTop();
              }}
            >
              Accueil
            </a>
          </li>
          <li>
            <a href="https://wiki.saloonrp.fr/" target="_blank">
              Wiki
            </a>
          </li>
          <li>
            <a href="https://saloon-role-play.tebex.io/" target="_blank">
              Boutique
            </a>
          </li>
          <li>
            <a href="https://discord.gg/saloonrp" target="_blank">
              Discord
            </a>
          </li>
          <li>
            <a
              className="bg-red-500 text-white px-4 py-2 rounded-3xl"
              href="https://cfx.re/join/gpgkgz"
              target="_blank"
            >
              Se connecter
            </a>
          </li>
        </ul>
      </nav>
      <header
        className="bg-cover bg-center relative h-screen bg-fixed bg-repeat overflow-hidden"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div
          className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-8xl font-bold flex-col"
          style={{
            background: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <h2 className="text-2xl text-white font-light">
            Serveur RedM FreeAccess
          </h2>
          <h1>Saloon RôlePlay</h1>
        </div>
        <div>
          <svg
            viewBox="0 0 1500 200"
            className="w-full absolute bottom-[-35px]"
          >
            <path
              className="fill-white"
              d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z"
            ></path>
          </svg>
        </div>
      </header>
      <section className="p-6 pl-[30rem] pr-[30rem]">
        <h2 className="text-4xl font-bold text-black text-center">
          Notre serveur
        </h2>
        <div className="flex justify-center space-x-4 mt-8">
          <div className="w-1/3 border-solid border-2 border-gray-200 p-4">
            <h3 className="text-l font-bold text-red-500">01</h3>
            <h4 className="text-2xl font-bold text-black">Lorem ipsum</h4>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt, nunc nec consectetur. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc tincidunt, nunc nec consectetur.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt, nunc nec consectetur. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc tincidunt, nunc nec consectetur.
            </p>
          </div>
          <div className="w-1/3 border-solid border-2 border-gray-200 p-4">
            <h3 className="text-l font-bold text-red-500">02</h3>
            <h4 className="text-2xl font-bold text-black">Lorem ipsum</h4>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt, nunc nec consectetur. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc tincidunt, nunc nec consectetur.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt, nunc nec consectetur. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc tincidunt, nunc nec consectetur.
            </p>
          </div>
          <div className="w-1/3 border-solid border-2 border-gray-200 p-4">
            <h3 className="text-l font-bold text-red-500">03</h3>
            <h4 className="text-2xl font-bold text-black">Lorem ipsum</h4>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt, nunc nec consectetur. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc tincidunt, nunc nec consectetur.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt, nunc nec consectetur. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc tincidunt, nunc nec consectetur.
            </p>
          </div>
        </div>
      </section>
      <section className="p-6 pl-[30rem] pr-[30rem] bg-slate-100">
        <h2 className="text-4xl font-bold text-black text-left">
          A propos de nous
        </h2>
        <div className="flex justify-center space-x-4 mt-8">
          <p className="text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tincidunt, nunc nec consectetur. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc tincidunt, nunc nec consectetur.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tincidunt, nunc nec consectetur. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc tincidunt, nunc nec consectetur.
          </p>
        </div>
        <Image
          className="pt-10"
          src="/background.jpg"
          alt="Saloon RôlePlay"
          width={500}
          height={500}
        />
      </section>
      <footer className="p-4 pl-40 pr-40 text-center text-white bg-black">
        <div>
          <p>Saloon RôlePlay - Tous droits réservés</p>
        </div>
      </footer>
    </main>
  );
}
