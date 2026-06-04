"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  User,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { supabase } from "@/lib/supabase";

export default function Navbar() {
  const { cart } = useCart();

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setIsLoggedIn(true);
      }
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setIsLoggedIn(!!session?.user);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <header className="bg-black border-b border-zinc-900 text-white relative z-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="h-20 flex items-center justify-between">

          <Link
            href="/"
            className="text-2xl md:text-3xl font-black tracking-tight"
          >
            LE GRAND{" "}
            <span className="text-purple-500">
              PUFFER
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">

            <Link
              href="/"
              className="hover:text-purple-400 transition"
            >
              Accueil
            </Link>

            <Link
              href="/boutique"
              className="hover:text-purple-400 transition"
            >
              Boutique
            </Link>

            <Link
              href="/livraison"
              className="hover:text-purple-400 transition"
            >
              Livraison
            </Link>

            <Link
              href="/faq"
              className="hover:text-purple-400 transition"
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className="hover:text-purple-400 transition"
            >
              Contact
            </Link>

          </nav>

          <div className="flex items-center gap-3">

            {isLoggedIn ? (
              <Link
                href="/compte"
                className="
                  hidden
                  md:flex
                  items-center
                  gap-2
                  border
                  border-zinc-700
                  px-4
                  py-2
                  rounded-xl
                  hover:border-purple-500
                  hover:text-purple-400
                  transition
                "
              >
                <User size={18} />
                <span>Mon compte</span>
              </Link>
            ) : (
              <Link
                href="/connexion"
                className="
                  hidden
                  md:flex
                  items-center
                  gap-2
                  border
                  border-zinc-700
                  px-4
                  py-2
                  rounded-xl
                  hover:border-purple-500
                  hover:text-purple-400
                  transition
                "
              >
                <User size={18} />
                <span>Connexion</span>
              </Link>
            )}

            <Link
              href="/panier"
              className="
                flex
                items-center
                gap-2
                bg-gradient-to-r
                from-purple-600
                to-fuchsia-500
                px-4
                py-2
                rounded-xl
                font-semibold
              "
            >
              <ShoppingCart size={18} />

              <span>
                Panier ({totalItems})
              </span>
            </Link>

            <button
              onClick={() =>
                setMobileMenuOpen(
                  !mobileMenuOpen
                )
              }
              className="lg:hidden"
            >
              {mobileMenuOpen ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </button>

          </div>

        </div>

      </div>

      {mobileMenuOpen && (
        <div
          className="
            fixed
            inset-0
            bg-black
            z-50
            lg:hidden
            flex
            flex-col
          "
        >

          <div className="flex items-center justify-between p-6 border-b border-zinc-800">

            <h2 className="text-3xl font-black">
              MENU
            </h2>

            <button
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              <X size={36} />
            </button>

          </div>

          <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-3xl font-bold">

            <Link
              href="/"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Accueil
            </Link>

            <Link
              href="/boutique"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Boutique
            </Link>

            <Link
              href="/livraison"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Livraison
            </Link>

            <Link
              href="/faq"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Contact
            </Link>

            {isLoggedIn ? (
              <Link
                href="/compte"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="text-purple-400"
              >
                Mon compte
              </Link>
            ) : (
              <Link
                href="/connexion"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="text-purple-400"
              >
                Connexion
              </Link>
            )}

          </nav>

        </div>
      )}

    </header>
  );
}