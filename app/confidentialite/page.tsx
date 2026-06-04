export default function ConfidentialitePage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-black">
          Politique de confidentialité
        </h1>

        <div className="mt-10 space-y-6 text-zinc-300">

          <p>
            Les informations fournies
            lors de la commande
            sont utilisées uniquement
            pour le traitement des achats.
          </p>

          <p>
            Aucune donnée personnelle
            n'est revendue à des tiers.
          </p>

          <p>
            Les paiements sont sécurisés
            via Stripe.
          </p>

          <p>
            Les utilisateurs peuvent
            demander la suppression
            de leurs données
            en contactant le support.
          </p>

        </div>

      </div>
    </main>
  );
}