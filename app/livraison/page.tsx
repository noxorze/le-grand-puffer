"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LivraisonPage() {
  const [relais, setRelais] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCommande = async () => {
    if (!relais) return alert("Choisis un relais");

    setLoading(true);

    // Récupère le panier depuis le localStorage
    const panier = JSON.parse(localStorage.getItem("panier") || "[]");

    if (!panier.length) {
      setLoading(false);
      return alert("Ton panier est vide !");
    }

    // Insert dans Supabase
    const { error } = await supabase.from("orders").insert([
      {
        products: panier,
        relais,
        created_at: new Date(),
      },
    ]);

    setLoading(false);

    if (error) return alert("Erreur lors de la commande : " + error.message);

    // Vider le panier
    localStorage.removeItem("panier");

    // Rediriger vers page de succès
    router.push("/succes");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Choisis ton relais</h1>

      <select
        className="w-full p-3 border rounded"
        value={relais}
        onChange={(e) => setRelais(e.target.value)}
      >
        <option value="">-- Sélectionne un relais --</option>
        <option value="Relais A">Relais A</option>
        <option value="Relais B">Relais B</option>
        <option value="Relais C">Relais C</option>
      </select>

      <button
        disabled={loading}
        onClick={handleCommande}
        className="mt-4 w-full bg-purple-600 text-white py-3 rounded font-bold hover:opacity-90 transition"
      >
        {loading ? "Validation..." : "Valider la commande"}
      </button>
    </div>
  );
}