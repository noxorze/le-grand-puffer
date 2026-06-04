"use client";

import { useState } from "react";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resetPassword } from "@/lib/auth";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] =
    useState(false);
  const [error, setError] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError("");

    const { error } =
      await resetPassword(email);

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess(true);
  };

  return (
    <main className="bg-black min-h-screen text-white">
      <TopBar />
      <Navbar />

      <section className="max-w-md mx-auto px-6 py-20">

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

          <span className="text-purple-400 font-semibold">
            RÉINITIALISATION
          </span>

          <h1 className="text-4xl font-black mt-3">
            Mot de passe oublié
          </h1>

          <p className="text-zinc-400 mt-4">
            Entrez votre adresse email pour
            recevoir un lien de réinitialisation.
          </p>

          {success && (
            <div className="mt-6 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl p-4">
              Email envoyé avec succès.
            </div>
          )}

          {error && (
            <div className="mt-6 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-4">
              {error}
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

            <button
              type="submit"
              className="
                w-full
                bg-gradient-to-r
                from-purple-600
                to-fuchsia-500
                py-4
                rounded-xl
                font-bold
              "
            >
              Envoyer le lien
            </button>

          </form>

          <div className="text-center mt-8">

            <Link
              href="/connexion"
              className="text-purple-400 hover:text-purple-300"
            >
              Retour à la connexion
            </Link>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}