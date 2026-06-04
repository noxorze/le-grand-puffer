"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ComptePage() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/connexion";
        return;
      }

      setEmail(user.email || "");
    };

    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <main className="bg-black min-h-screen text-white">
      <TopBar />
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <span className="text-purple-400 font-semibold tracking-wider">
          ESPACE CLIENT
        </span>

        <h1 className="text-5xl md:text-6xl font-black mt-4">
          Mon compte
        </h1>

        <p className="text-zinc-400 mt-6">
          Retrouvez vos informations, commandes et avantages.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mt-14">

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold">
              Informations personnelles
            </h2>

            <div className="mt-8">

              <p className="text-zinc-500 text-sm">
                Adresse email
              </p>

              <p className="text-xl font-semibold mt-2">
                {email}
              </p>

            </div>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold">
              Programme fidélité
            </h2>

            <div className="mt-8">

              <p className="text-zinc-500 text-sm">
                Points disponibles
              </p>

              <p className="text-4xl font-black text-purple-400 mt-2">
                0
              </p>

            </div>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold">
              Commandes récentes
            </h2>

            <div className="mt-8">

              <p className="text-zinc-400">
                Aucune commande disponible.
              </p>

            </div>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold">
              Adresse de livraison
            </h2>

            <div className="mt-8">

              <p className="text-zinc-400">
                Aucune adresse enregistrée.
              </p>

            </div>

          </div>

        </div>

        <div className="mt-10">

          <button
            onClick={handleLogout}
            className="
              bg-red-600
              hover:bg-red-700
              px-8
              py-4
              rounded-2xl
              font-bold
              transition
            "
          >
            Déconnexion
          </button>

        </div>

      </section>

      <Footer />
    </main>
  );
}