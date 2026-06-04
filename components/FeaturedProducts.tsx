"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  flavors: string;
  image: string;
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error(error);
      } else {
        setProducts(data as Product[]);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center py-20">
        Chargement des produits...
      </div>
    );
  }

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12">
          <span className="text-purple-500 font-semibold">
            NOS PRODUITS
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Meilleures ventes
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl">
            Découvrez notre sélection de produits premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition"
            >
              <div className="flex justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="h-72 w-auto object-contain"
                />
              </div>

              <h3 className="text-3xl font-black mt-8">
                {product.name}
              </h3>

              <p className="text-zinc-400 mt-4 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-8">
                <span className="text-4xl font-black text-purple-400">
                  {product.price.toFixed(2)} €
                </span>
                <span className="text-green-400">En stock</span>
              </div>

              <Link
                href={`/produit/${product.id}`}
                className="block text-center w-full mt-8 bg-gradient-to-r from-purple-600 to-fuchsia-500 py-4 rounded-2xl font-bold hover:opacity-90 transition"
              >
                {product.name.includes("16K") ? "Voir les 16K" : "Voir les 40K"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}