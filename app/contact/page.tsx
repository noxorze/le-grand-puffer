"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    const { error } =
      await supabase
        .from("messages")
        .insert([
          {
            name,
            email,
            message,
          },
        ]);

    if (error) {
      setError(
        "Erreur lors de l'envoi."
      );

      setLoading(false);
      return;
    }

    setName("");
    setEmail("");
    setMessage("");

    setSuccess(
      "Votre message a été envoyé."
    );

    setLoading(false);
  };

  return (
    <main className="bg-black min-h-screen text-white">
      <TopBar />
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-20">

        <span className="text-purple-400 font-semibold">
          CONTACT
        </span>

        <h1 className="text-5xl md:text-6xl font-black mt-4">
          Nous contacter
        </h1>

        <p className="text-zinc-400 mt-6 text-lg">
          Une question concernant une commande,
          un produit ou une livraison ?
          Notre équipe vous répond rapidement.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-14">

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold">
              Informations
            </h2>

            <div className="space-y-6 mt-8">

              <div>
                <p className="text-zinc-500 text-sm">
                  Email
                </p>

                <p className="font-semibold">
                  contact@legrandpuffer.fr
                </p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm">
                  Instagram
                </p>

                <p className="font-semibold">
                  @legrandpuffer
                </p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm">
                  Horaires
                </p>

                <p className="font-semibold">
                  Lun - Sam : 9h00 - 18h00
                </p>
              </div>

            </div>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold">
              Envoyer un message
            </h2>

            {success && (
              <div className="mt-6 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl p-4">
                {success}
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
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-4"
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-4"
                required
              />

              <textarea
                placeholder="Votre message"
                rows={5}
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-4 resize-none"
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
                "
              >
                {loading
                  ? "Envoi..."
                  : "Envoyer"}
              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}