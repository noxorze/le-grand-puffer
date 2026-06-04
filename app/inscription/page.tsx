"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { signUp } from "@/lib/auth";

export default function InscriptionPage() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage(
        "Les mots de passe ne correspondent pas."
      );
      return;
    }

    setLoading(true);

    const { error } = await signUp(
      email,
      password
    );

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    setSuccess(true);

    setNom("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setTimeout(() => {
      window.location.href = "/connexion";
    }, 2500);
  };

  return (
    <main className="bg-black min-h-screen text-white">
      <TopBar />
      <Navbar />

      <section className="max-w-md mx-auto px-6 py-20">

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

          <span className="text-purple-400 font-semibold">
            CRÉER UN COMPTE
          </span>

          <h1 className="text-4xl font-black mt-3">
            Inscription
          </h1>

          <p className="text-zinc-400 mt-4">
            Créez votre compte pour suivre vos commandes,
            cumuler des points fidélité et gérer vos informations.
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
              ✅ Compte créé avec succès.
              Vérifiez votre boîte mail.
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
              ❌ {errorMessage}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-5 mt-8"
          >

            <input
              type="text"
              placeholder="Nom complet"
              value={nom}
              onChange={(e) =>
                setNom(e.target.value)
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

            <input
              type="password"
              placeholder="Confirmer le mot de passe"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
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
                ? "Création..."
                : "Créer mon compte"}
            </button>

          </form>

          <div className="mt-8 text-center">

            <p className="text-zinc-400">
              Déjà inscrit ?
            </p>

            <Link
              href="/connexion"
              className="
                inline-block
                mt-3
                text-purple-400
                hover:text-purple-300
              "
            >
              Se connecter
            </Link>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}