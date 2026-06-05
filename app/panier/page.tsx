"use client";

import Image from "next/image";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

export default function PanierPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping =
    subtotal > 50 ? 0 : 4.9;

  const total = subtotal + shipping;

  return (
    <main className="bg-black min-h-screen text-white">
      <TopBar />
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <h1 className="text-5xl md:text-6xl font-black mb-12">
          Mon panier
        </h1>

        {cart.length === 0 ? (
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-12 text-center">

            <h2 className="text-3xl font-bold">
              Votre panier est vide
            </h2>

            <p className="text-zinc-400 mt-4">
              Ajoutez des produits pour commencer.
            </p>

          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_380px] gap-8">

            <div className="space-y-6">

              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.flavor}`}
                  className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6"
                >

                  <div className="flex flex-col md:flex-row gap-6">

                    <div className="flex justify-center">

                      <Image
                        src={item.image}
                        alt={item.name}
                        width={180}
                        height={180}
                        className="object-contain"
                      />

                    </div>

                    <div className="flex-1">

                      <h2 className="text-2xl font-bold">
                        {item.name}
                      </h2>

                      <p className="text-zinc-400 mt-2">
                        Saveur : {item.flavor}
                      </p>

                      <div className="mt-6 flex items-center gap-4">

                        <button
                          onClick={() =>
                            decreaseQuantity(
                              item.id,
                              item.flavor
                            )
                          }
                          className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700"
                        >
                          -
                        </button>

                        <span className="font-bold text-lg">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              item.id,
                              item.flavor
                            )
                          }
                          className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700"
                        >
                          +
                        </button>

                      </div>

                    </div>

                    <div className="flex flex-col justify-between">

                      <span className="text-3xl font-black text-purple-400">
                        {(
                          item.price *
                          item.quantity
                        ).toFixed(2)} €
                      </span>

                      <button
                        onClick={() =>
                          removeFromCart(
                            item.id,
                            item.flavor
                          )
                        }
                        className="text-red-400 hover:text-red-300 transition"
                      >
                        Supprimer
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>

            <div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sticky top-6">

                <h2 className="text-2xl font-bold mb-8">
                  Résumé commande
                </h2>

                <div className="space-y-5">

                  <div className="flex justify-between">

                    <span className="text-zinc-400">
                      Sous-total
                    </span>

                    <span>
                      {subtotal.toFixed(2)} €
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-zinc-400">
                      Livraison
                    </span>

                    <span>
                      {shipping === 0
                        ? "Offerte"
                        : `${shipping.toFixed(
                            2
                          )} €`}
                    </span>

                  </div>

                  <div className="border-t border-zinc-800 pt-5 flex justify-between">

                    <span className="text-xl font-bold">
                      Total
                    </span>

                    <span className="text-3xl font-black text-purple-400">
                      {total.toFixed(2)} €
                    </span>

                  </div>

                </div>

                <button
                  onClick={() => {
                    window.location.href =
                      "/livraison";
                  }}
                  className="w-full mt-8 bg-gradient-to-r from-purple-600 to-fuchsia-500 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition"
                >
                  Commander
                </button>

                <p className="text-zinc-500 text-sm mt-4 text-center">
                  Livraison puis paiement sécurisé Stripe
                </p>

              </div>

            </div>

          </div>
        )}

      </section>

      <Footer />
    </main>
  );
}