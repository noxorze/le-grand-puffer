"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-zinc-950 border border-zinc-800 rounded-3xl p-10 text-center">

        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center mb-8">
          <svg
            width="42"
            height="42"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <span className="text-purple-400 font-semibold tracking-wider">
          COMMANDE VALIDÉE
        </span>

        <h1 className="text-5xl font-black mt-4">
          Paiement confirmé
        </h1>

        <p className="text-zinc-400 mt-6 text-lg">
          Merci pour votre commande.
          Votre paiement a été accepté et votre commande est en préparation.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-fuchsia-500 px-8 py-4 rounded-2xl font-bold"
          >
            Retour à la boutique
          </Link>
        </div>

        <p className="text-zinc-600 text-sm mt-8">
          Paiement sécurisé via Stripe
        </p>

      </div>
    </main>
  );
}