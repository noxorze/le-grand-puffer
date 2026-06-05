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
    } else {
      setProducts(data || []);
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
      alert("Erreur : " + error.message);
      return;
    }

    alert("Produit mis à jour !");
    fetchProducts();
  };

  if (loading) {
    return (
      <main className="bg-black min-h-screen text-white p-10">
        Chargement...
      </main>
    );
  }

  return (
    <main className="bg-black min-h-screen text-white p-10">
      <h1 className="text-5xl font-black text-purple-400 mb-10">
        Administration Produits
      </h1>

      <div className="space-y-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6"
          >
            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-bold">
                  Nom
                </label>

                <input
                  type="text"
                  value={product.name}
                  onChange={(e) =>
                    setProducts((prev) =>
                      prev.map((p) =>
                        p.id === product.id
                          ? {
                              ...p,
                              name: e.target.value,
                            }
                          : p
                      )
                    )
                  }
                  className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-700"
                />
              </div>

              <div>
                <label className="block mb-2 font-bold">
                  Prix (€)
                </label>

                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={product.price}
                  onChange={(e) =>
                    setProducts((prev) =>
                      prev.map((p) =>
                        p.id === product.id
                          ? {
                              ...p,
                              price: Number(e.target.value),
                            }
                          : p
                      )
                    )
                  }
                  className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-700"
                />
              </div>

              <div>
                <label className="block mb-2 font-bold">
                  Description
                </label>

                <textarea
                  value={product.description}
                  onChange={(e) =>
                    setProducts((prev) =>
                      prev.map((p) =>
                        p.id === product.id
                          ? {
                              ...p,
                              description: e.target.value,
                            }
                          : p
                      )
                    )
                  }
                  rows={4}
                  className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-700 resize-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-bold">
                  Saveurs (séparées par des virgules)
                </label>

                <input
                  type="text"
                  value={product.flavors}
                  onChange={(e) =>
                    setProducts((prev) =>
                      prev.map((p) =>
                        p.id === product.id
                          ? {
                              ...p,
                              flavors: e.target.value,
                            }
                          : p
                      )
                    )
                  }
                  className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-700"
                />
              </div>

              <button
                onClick={() => handleUpdate(product)}
                className="bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-3 rounded-xl font-bold"
              >
                Mettre à jour
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}