import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-black">
              LE GRAND{" "}
              <span className="text-purple-500">
                PUFFER
              </span>
            </h3>

            <p className="text-zinc-400 mt-4">
              Boutique spécialisée dans les puffs JNR.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Boutique
            </h4>

            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link
                  href="/boutique"
                  className="hover:text-purple-400 transition"
                >
                  Boutique
                </Link>
              </li>

              <li>
                <Link
                  href="/boutique"
                  className="hover:text-purple-400 transition"
                >
                  Nouveautés
                </Link>
              </li>

              <li>
                <Link
                  href="/boutique"
                  className="hover:text-purple-400 transition"
                >
                  Meilleures ventes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Informations
            </h4>

            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link
                  href="/livraison"
                  className="hover:text-purple-400 transition"
                >
                  Livraison
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="hover:text-purple-400 transition"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-purple-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Légal
            </h4>

            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link
                  href="/mentions-legales"
                  className="hover:text-purple-400 transition"
                >
                  Mentions légales
                </Link>
              </li>

              <li>
                <Link
                  href="/cgv"
                  className="hover:text-purple-400 transition"
                >
                  CGV
                </Link>
              </li>

              <li>
                <Link
                  href="/confidentialite"
                  className="hover:text-purple-400 transition"
                >
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-500 text-sm">
          © 2026 Le Grand Puffer. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}