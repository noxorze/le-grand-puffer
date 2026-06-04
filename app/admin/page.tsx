"use client";

import { useState } from "react";

export default function AdminPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleAccess = () => {
    if (code === "LGP2026ADMIN") {
      localStorage.setItem(
        "admin_access",
        "true"
      );

      window.location.href =
        "/admin-dashboard";

      return;
    }

    setError("Code incorrect.");
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

        <span className="text-purple-400 font-semibold">
          ADMINISTRATION
        </span>

        <h1 className="text-4xl font-black mt-3">
          Accès sécurisé
        </h1>

        <p className="text-zinc-400 mt-4">
          Entrez votre code administrateur.
        </p>

        {error && (
          <div className="mt-6 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-4">
            {error}
          </div>
        )}

        <input
          type="password"
          value={code}
          onChange={(e) =>
            setCode(e.target.value)
          }
          placeholder="Code administrateur"
          className="
            w-full
            mt-8
            bg-zinc-900
            border
            border-zinc-700
            rounded-xl
            p-4
          "
        />

        <button
          onClick={handleAccess}
          className="
            w-full
            mt-5
            bg-gradient-to-r
            from-purple-600
            to-fuchsia-500
            py-4
            rounded-xl
            font-bold
          "
        >
          Accéder au dashboard
        </button>

      </div>

    </main>
  );
}