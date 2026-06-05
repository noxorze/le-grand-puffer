import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LivraisonPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <TopBar />
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <span className="text-purple-400 font-semibold tracking-wider">
          LIVRAISON
        </span>

        <h1 className="text-5xl md:text-6xl font-black mt-4">
          Livraison & Expédition
        </h1>

        <p className="text-zinc-400 mt-6 text-lg max-w-3xl">
          Nous préparons chaque commande avec soin afin de garantir
          une expédition rapide et sécurisée partout en France,
          Belgique et Luxembourg.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold">
              🇫🇷 France
            </h2>

            <p className="text-zinc-400 mt-4">
              Livraison estimée entre 2 et 5 jours ouvrés.
            </p>

            <p className="text-purple-400 font-semibold mt-4">
              4,90 €
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold">
              🇧🇪 Belgique
            </h2>

            <p className="text-zinc-400 mt-4">
              Livraison estimée entre 3 et 6 jours ouvrés.
            </p>

            <p className="text-purple-400 font-semibold mt-4">
              4,90 €
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold">
              🇱🇺 Luxembourg
            </h2>

            <p className="text-zinc-400 mt-4">
              Livraison estimée entre 3 et 6 jours ouvrés.
            </p>

            <p className="text-purple-400 font-semibold mt-4">
              4,90 €
            </p>
          </div>

        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 mt-12">

          <h2 className="text-3xl font-black">
            Livraison offerte
          </h2>

          <p className="text-zinc-400 mt-4 text-lg">
            Pour toute commande supérieure à 50€,
            les frais de livraison sont offerts.
          </p>

          <div className="mt-8 bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">
            <p className="text-purple-300 font-semibold">
              Livraison gratuite dès 50€ d'achat.
            </p>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-12">

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10">

            <h2 className="text-3xl font-black">
              Paiement sécurisé
            </h2>

            <p className="text-zinc-400 mt-6">
              Toutes les transactions sont protégées
              grâce à Stripe et aux protocoles de sécurité
              les plus récents.
            </p>

            <ul className="mt-6 space-y-3 text-zinc-300">
              <li>✓ Paiement sécurisé SSL</li>
              <li>✓ Carte bancaire</li>
              <li>✓ Protection des données</li>
            </ul>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10">

            <h2 className="text-3xl font-black">
              Suivi de commande
            </h2>

            <p className="text-zinc-400 mt-6">
              Dès l'expédition de votre commande,
              vous recevez un email de confirmation
              contenant toutes les informations utiles.
            </p>

            <ul className="mt-6 space-y-3 text-zinc-300">
              <li>✓ Confirmation de commande</li>
              <li>✓ Préparation rapide</li>
              <li>✓ Notification d'expédition</li>
            </ul>

          </div>

        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 mt-12">

          <h2 className="text-3xl font-black">
            Questions fréquentes
          </h2>

          <div className="mt-8 space-y-8">

            <div>
              <h3 className="font-bold text-xl">
                Quand ma commande est-elle expédiée ?
              </h3>

              <p className="text-zinc-400 mt-2">
                Les commandes sont généralement préparées
                sous 24 à 48 heures ouvrées.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">
                Puis-je modifier mon adresse ?
              </h3>

              <p className="text-zinc-400 mt-2">
                Contactez-nous rapidement après votre achat
                afin que nous puissions vérifier la faisabilité.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">
                Que faire si ma commande est retardée ?
              </h3>

              <p className="text-zinc-400 mt-2">
                Notre équipe reste disponible via la page contact
                pour toute question concernant votre commande.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}