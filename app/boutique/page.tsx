import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

const products = [
  {
    id: "jnr16k",
    name: "JNR 16K",
    description: "Jusqu'à 16 000 bouffées.",
    price: "14,90€",
    image: "/images/jnr16k.png",
  },
  {
    id: "jnr40k",
    name: "JNR 40K Léopard",
    description: "Jusqu'à 40 000 bouffées.",
    price: "19,90€",
    image: "/images/jnr40k.png",
  },
];

export default function BoutiquePage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <TopBar />
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="mb-12">

          <h1 className="text-5xl md:text-6xl font-black">
            Boutique
          </h1>

          <p className="text-zinc-400 mt-4">
            Retrouvez toutes nos puffs JNR.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {products.map((product) => (
            <div
              key={product.id}
              className="
                bg-zinc-950
                border
                border-zinc-800
                rounded-3xl
                p-6
                hover:border-purple-500
                transition
              "
            >

              <div className="flex justify-center">

                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="h-72 w-auto object-contain"
                />

              </div>

              <h2 className="text-3xl font-bold mt-6">
                {product.name}
              </h2>

              <p className="text-zinc-400 mt-3">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-6">

                <span className="text-3xl font-black text-purple-400">
                  {product.price}
                </span>

                <span className="text-green-400">
                  En stock
                </span>

              </div>

              <Link
                href={`/produit/${product.id}`}
                className="
                  block
                  text-center
                  w-full
                  mt-6
                  bg-gradient-to-r
                  from-purple-600
                  to-fuchsia-500
                  py-4
                  rounded-xl
                  font-bold
                "
              >
                Voir le produit
              </Link>

            </div>
          ))}

        </div>

      </section>

      <Footer />
    </main>
  );
}