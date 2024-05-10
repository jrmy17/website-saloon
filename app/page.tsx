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

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 640) {
      setIsOpen(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="">
      <nav
        className={`flex items-center justify-between p-4 pl-6 pr-6 sm:pl-5 sm:pr-5 md:pl-20 md:pr-20
        lg:pl-40 lg:pr-40 xl:pl-60 xl:pr-60 xxl:pl-80 xxl:pr-80
        top-0 z-50 transition-colors fixed left-0 right-0 ${
          isScrolled ? "bg-white text-black p-2" : "bg-transparent text-white"
        }`}
        style={{
          transition: "background-color 0.5s, padding 0.5s",
        }}
      >
        <Image src="/Saloon.png" alt="Saloon RôlePlay" width={50} height={50} />
        {/* Hamburger Icon for Mobile */}
        <ul
          className={`sm:flex-row items-center gap-3 flex-col md:gap-10 font-bold ${
            isOpen ? "flex" : "hidden"
          }`}
        >
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
        <button className="block sm:hidden w-12" onClick={toggleMenu}>
          <svg viewBox="0 0 100 80" className="w-6 h-5 fill-current">
            <rect width="100" height="20" rx="10"></rect>
            <rect y="30" width="100" height="20" rx="10"></rect>
            <rect y="60" width="100" height="20" rx="10"></rect>
          </svg>
        </button>
      </nav>
      <header
        className="bg-cover bg-center relative h-screen bg-fixed bg-repeat overflow-hidden"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div
          className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-6xl xl:text-8xl font-bold flex-col"
          style={{
            background: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <h2 className="text-2xl text-white font-light">
            Serveur RedM FreeAccess
          </h2>
          <h1 className="text-center">Saloon RôlePlay</h1>
        </div>
        <div>
          <svg
            viewBox="0 0 1500 200"
            className="w-full absolute bottom-0 sm:bottom-[-5px] md:bottom-[-10px] lg:bottom-[-15px] xl:bottom-[-20px] xxl:bottom-[-30px]"
          >
            <path
              className="fill-white"
              d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z"
            ></path>
          </svg>
        </div>
      </header>
      <section className="p-6 pl-10 pr-10 sm:pl-15 sm:pr-15 lg:pl-20 lg:pr-20 xxl:pl-[20rem] xxl:pr-[20rem]">
        <h2 className="text-4xl font-bold text-black text-center">
          Bienvenue sur Saloon RP
        </h2>
        <div className="flex flex-col sm:flex-row justify-center mt-8 gap-5">
          <div className="w-full sm:w-1/3 border-solid border-2 border-gray-200 p-4">
            <h3 className="text-l font-bold text-red-500">01</h3>
            <h4 className="text-2xl font-bold text-black">
              Carrière de Hors-la-loi
            </h4>
            <p className="text-black">
              Embrassez une vie de danger et de liberté en devenant un
              hors-la-loi redouté. Participez à des braquages, des duels et des
              opérations clandestines, tout en échappant aux autorités pour
              gravir les échelons du monde criminel.
            </p>
          </div>
          <div className="w-full sm:w-1/3 border-solid border-2 border-gray-200 p-4">
            <h3 className="text-l font-bold text-red-500">02</h3>
            <h4 className="text-2xl font-bold text-black">
              Voie de la Justice
            </h4>
            <p className="text-black">
              Engagez-vous dans la loi et l&apos;ordre en tant que shérif,
              marshal ou membre des forces de l&apos;ordre. Protégez les
              citoyens, poursuivez les criminels et maintenez la paix dans un
              monde souvent chaotique, où chaque décision peut faire la
              différence.
            </p>
          </div>
          <div className="w-full sm:w-1/3 border-solid border-2 border-gray-200 p-4">
            <h3 className="text-l font-bold text-red-500">03</h3>
            <h4 className="text-2xl font-bold text-black">
              Entrepreneuriat et Commerce
            </h4>
            <p className="text-black">
              Lancez et développez votre propre entreprise dans une économie
              dynamique et compétitive. Que vous choisissiez de gérer un saloon,
              une ferme, un magasin général ou une autre entreprise, votre
              succès dépendra de votre stratégie et de votre capacité à vous
              adapter aux besoins du marché.
            </p>
          </div>
        </div>
      </section>
      <section className="p-6 pl-10 pr-10 sm:pl-15 sm:pr-15 lg:pl-20 lg:pr-20 xxl:pl-[20rem] xxl:pr-[20rem] bg-slate-100">
        <h2 className="text-4xl font-bold text-black text-left">
          A PROPOS DE NOUS
        </h2>
        <div className="flex justify-center space-x-4 mt-8">
          <p className="text-black">
            Bienvenue dans <span className="font-bold">Saloon RP</span>, votre
            serveur rôleplay sérieux et immersif sur Red Dead Redemption 2 !
            Plongez dans l&apos;Amérique des années 1890, une époque de défis et
            d&apos;opportunités. Saloon RP offre une expérience de jeu riche en
            détails, où chaque interaction et chaque décision influencent
            l&apos;univers vivant et authentique que nous avons créé. Ici, les
            joueurs peuvent incarner des personnages uniques, tisser des
            histoires profondes et participer à des aventures captivantes. Notre
            communauté engagée et passionnée veille à maintenir un environnement
            respectueux et réaliste, permettant à chacun de s&apos;immerger
            pleinement dans l&apos;esprit du Far West. Rejoignez-nous pour
            écrire votre propre légende dans ce monde sauvage et impitoyable.
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
      <footer className="p-4 pl-10 pr-10 sm:pl-40 sm:pr-40 text-center text-white bg-black">
        <div>
          <p>Saloon RôlePlay - Tous droits réservés</p>
        </div>
      </footer>
    </main>
  );
}
