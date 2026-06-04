import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center min-h-[85vh] py-10 lg:py-20">

          <div className="order-2 lg:order-1">

            <span className="inline-block border border-purple-500 text-purple-400 rounded-full px-4 py-2 text-xs md:text-sm font-medium mb-6">
              PUFFS NOUVELLE GÉNÉRATION
            </span>

            <h1 className="font-black leading-none">

              <span className="block text-5xl sm:text-6xl lg:text-8xl">
                LE GRAND
              </span>

              <span className="block text-5xl sm:text-6xl lg:text-8xl text-purple-500 mt-2">
                PUFFER
              </span>

            </h1>

            <p className="mt-6 text-zinc-400 text-base md:text-lg max-w-xl">
              Découvrez les JNR 16K et 40K Léopard.
              Plus d'autonomie, plus de saveurs,
              une expérience premium.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              <span className="border border-zinc-700 rounded-full px-4 py-2 text-sm">
                40 000 bouffées
              </span>

              <span className="border border-zinc-700 rounded-full px-4 py-2 text-sm">
                Saveurs intenses
              </span>

              <span className="border border-zinc-700 rounded-full px-4 py-2 text-sm">
                Premium
              </span>

            </div>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                href="/boutique"
                className="
                  bg-gradient-to-r
                  from-purple-600
                  to-fuchsia-500
                  px-8
                  py-4
                  rounded-xl
                  font-bold
                  text-sm
                  md:text-base
                  hover:opacity-90
                  transition
                "
              >
                DÉCOUVRIR LA BOUTIQUE
              </Link>

              <Link
                href="/contact"
                className="
                  border
                  border-zinc-700
                  px-8
                  py-4
                  rounded-xl
                  font-bold
                  text-sm
                  md:text-base
                  hover:border-purple-500
                  hover:text-purple-400
                  transition
                "
              >
                NOUS CONTACTER
              </Link>

            </div>

          </div>

          <div className="order-1 lg:order-2 flex justify-center">

            <Image
              src="/images/hero.png"
              alt="JNR Léopard"
              width={800}
              height={800}
              priority
              className="
                w-[260px]
                sm:w-[340px]
                md:w-[420px]
                lg:w-full
                max-w-[650px]
                h-auto
                object-contain
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
} 