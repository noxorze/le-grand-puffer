"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { signIn } from "@/lib/auth";

export default function ConnexionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [errorMessage, setErrorMessage] =
    useState("");

  const [success, setSuccess] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setErrorMessage("");

    setLoading(true);

    const { error } = await signIn(
      email,
      password
    );

    setLoading(false);

    if (error) {
      setErrorMessage(
        "Email ou mot de passe incorrect."
      );
      return;
    }

    setSuccess(true);

    setTimeout(() => {
      window.location.href = "/compte";
    }, 1500);
  };

  return (
    <main className="bg-black min-h-screen text-white">
      <TopBar />
      <Navbar />

      <section className="max-w-md mx-auto px-6 py-20">

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

          <span className="text-purple-400 font-semibold">
            MON COMPTE
          </span>

          <h1 className="text-4xl font-black mt-3">
            Connexion
          </h1>

          <p className="text-zinc-400 mt-4">
            Connectez-vous pour accéder à vos commandes,
            vos points fidélité et votre profil.
          </p>

          {success && (
            <div
              className="
                mt-6
                bg-green-500/10
                border
                border-green-500/30
                text-green-400
                rounded-xl
                p-4
              "
            >
              Connexion réussie. Redirection...
            </div>
          )}

          {errorMessage && (
            <div
              className="
                mt-6
                bg-red-500/10
                border
                border-red-500/30
                text-red-400
                rounded-xl
                p-4
              "
            >
              {errorMessage}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-5 mt-8"
          >

            <input
              type="email"
              placeholder="Adresse email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
                w-full
                bg-zinc-900
                border
                border-zinc-700
                rounded-xl
                p-4
              "
              required
            />

            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="
                w-full
                bg-zinc-900
                border
                border-zinc-700
                rounded-xl
                p-4
              "
              required
            />

            <Link
              href="/mot-de-passe-oublie"
              className="
                block
                text-sm
                text-purple-400
                hover:text-purple-300
              "
            >
              Mot de passe oublié ?
            </Link>

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-gradient-to-r
                from-purple-600
                to-fuchsia-500
                py-4
                rounded-xl
                font-bold
                disabled:opacity-50
              "
            >
              {loading
                ? "Connexion..."
                : "Se connecter"}
            </button>

          </form>

          <div className="mt-8 text-center">

            <p className="text-zinc-400">
              Pas encore de compte ?
            </p>

            <Link
              href="/inscription"
              className="
                inline-block
                mt-3
                text-purple-400
                hover:text-purple-300
              "
            >
              Créer un compte
            </Link>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}