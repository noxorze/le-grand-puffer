"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  flavors: string;
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error(error);
    } else if (data) {
      setProducts(data as Product[]);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleUpdate = async (product: Product) => {
    const { error } = await supabase
      .from("products")
      .update({
        name: product.name,
        price: product.price,
        description: product.description,
        flavors: product.flavors,
      })
      .eq("id", product.id);

    if (error) {
      alert("Erreur lors de la mise à jour : " + error.message);
    } else {
      alert("Produit mis à jour !");
      fetchProducts(); // rafraîchir la liste
    }
  };

  if (loading) return <p className="text-white p-10">Chargement...</p>;

  return (
    <main className="bg-black min-h-screen text-white p-10">
      <h1 className="text-5xl font-black text-purple-400 mb-10">
        Administration Produits
      </h1>

      <div className="space-y-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl space-y-4"
          >
            <label className="block font-bold">Nom</label>
            <input
              type="text"
              value={product.name}
              onChange={(e) =>
                setProducts((prev) =>
                  prev.map((p) =>
                    p.id === product.id
                      ? { ...p, name: e.target.value }
                      : p
                  )
                )
              }
              className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-700"
            />

            <label className="block font-bold">Prix (€)</label>
            <input
              type="number"
              value={product.price}
              onChange={(e) =>
                setProducts((prev) =>
                  prev.map((p) =>
                    p.id === product.id
                      ? { ...p, price: parseFloat(e.target.value) }
                      : p
                  )
                )
              }
              className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-700"
            />

            <label className="block font-bold">Description</label>
            <textarea
              value={product.description}
              onChange={(e) =>
                setProducts((prev) =>
                  prev.map((p) =>
                    p.id === product.id
                      ? { ...p, description: e.target.value }
                      : p
                  )
                )
              }
              className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-700 resize-none"
              rows={3}
            />

            <label className="block font-bold">Saveurs (séparées par des virgules)</label>
            <input
              type="text"
              value={product.flavors}
              onChange={(e) =>
                setProducts((prev) =>
                  prev.map((p) =>
                    p.id === product.id
                      ? { ...p, flavors: e.target.value }
                      : p
                  )
                )
              }
              className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-700"
            />

            <button
              onClick={() => handleUpdate(product)}
              className="bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-3 rounded-xl font-bold mt-4"
            >
              Mettre à jour
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}