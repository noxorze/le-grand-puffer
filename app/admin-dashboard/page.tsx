"use client";

import Link from "next/link";

export default function AdminDashboard() {
  const handleLogout = () => {
    localStorage.removeItem("admin_access");
    window.location.href = "/admin";
  };

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="flex items-center justify-between">

          <div>
            <span className="text-purple-400 font-semibold">
              ADMINISTRATION
            </span>

            <h1 className="text-5xl font-black mt-4">
              Dashboard
            </h1>

            <p className="text-zinc-400 mt-4">
              Gérez votre boutique.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="
              border
              border-red-500
              text-red-400
              px-5
              py-3
              rounded-xl
              font-bold
            "
          >
            Déconnexion
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-3xl font-black">
              Produits
            </h2>

            <p className="text-zinc-400 mt-4">
              Modifier les produits,
              prix et saveurs.
            </p>

            <Link
              href="/admin-produits"
              className="
                inline-block
                mt-8
                bg-gradient-to-r
                from-purple-600
                to-fuchsia-500
                px-6
                py-3
                rounded-xl
                font-bold
              "
            >
              Gérer les produits
            </Link>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-3xl font-black">
              Messages
            </h2>

            <p className="text-zinc-400 mt-4">
              Consulter les messages
              reçus depuis le formulaire.
            </p>

            <Link
              href="/admin-messages"
              className="
                inline-block
                mt-8
                bg-gradient-to-r
                from-purple-600
                to-fuchsia-500
                px-6
                py-3
                rounded-xl
                font-bold
              "
            >
              Voir les messages
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}