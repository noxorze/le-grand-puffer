"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

const products = {
  jnr16k: {
    id: "jnr16k",
    name: "JNR 16K",
    price: 14.99,
    image: "/images/jnr16k.png",
    description:
      "La JNR 16K offre jusqu'à 16 000 bouffées avec une restitution des saveurs exceptionnelle et une excellente autonomie.",
    flavors: [
      "Blue Razz Ice",
      "Strawberry Kiwi",
      "Watermelon Ice",
      "Cherry Cola",
    ],
  },

  jnr40k: {
    id: "jnr40k",
    name: "JNR 40K Léopard",
    price: 19.99,
    image: "/images/jnr40k.png",
    description:
      "La JNR 40K Léopard offre jusqu'à 40 000 bouffées, une autonomie exceptionnelle, une recharge USB-C et une vapeur intense.",
    flavors: [
      "Blue Razz Ice",
      "Strawberry Kiwi",
      "Watermelon Ice",
      "Cherry Cola",
    ],
  },
};

export default function ProductPage() {
  const { id } = useParams();

  const product =
    products[id as keyof typeof products];

  const { addToCart } = useCart();

  const [flavor, setFlavor] =
    useState(
      product?.flavors?.[0] || ""
    );

  if (!product) {
    return (
      <main className="bg-black min-h-screen text-white flex items-center justify-center">
        Produit introuvable
      </main>
    );
  }

  return (
    <main className="bg-black min-h-screen text-white">
      <TopBar />
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center">

            <Image
              src={product.image}
              alt={product.name}
              width={700}
              height={700}
              className="w-full max-w-[600px] h-auto object-contain"
            />

          </div>

          <div>

            <span className="text-purple-400 font-semibold">
              PRODUIT PREMIUM
            </span>

            <h1 className="text-5xl md:text-6xl font-black mt-4">
              {product.name}
            </h1>

            <p className="text-zinc-400 mt-8 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="mt-10">

              <p className="font-semibold mb-3">
                Saveur
              </p>

              <select
                value={flavor}
                onChange={(e) =>
                  setFlavor(
                    e.target.value
                  )
                }
                className="
                  w-full
                  bg-zinc-900
                  border
                  border-zinc-700
                  rounded-2xl
                  p-4
                "
              >
                {product.flavors.map(
                  (item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  )
                )}
              </select>

            </div>

            <div className="mt-10 flex items-center justify-between">

              <span className="text-5xl font-black text-purple-400">
                {product.price.toFixed(2)} €
              </span>

              <span className="text-green-400">
                En stock
              </span>

            </div>

            <button
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.name,
                  flavor,
                  price: product.price,
                  image: product.image,
                })
              }
              className="
                w-full
                mt-10
                bg-gradient-to-r
                from-purple-600
                to-fuchsia-500
                py-5
                rounded-2xl
                font-bold
                text-lg
              "
            >
              Ajouter au panier
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}