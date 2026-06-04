export default function CGVPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-black">
          Conditions Générales de Vente
        </h1>

        <div className="mt-10 space-y-6 text-zinc-300">

          <p>
            Les commandes sont traitées
            après validation du paiement.
          </p>

          <p>
            Les prix sont affichés en euros
            toutes taxes comprises.
          </p>

          <p>
            La livraison est effectuée
            à l'adresse renseignée
            lors de la commande.
          </p>

          <p>
            En cas de problème,
            contactez notre service client.
          </p>

          <p>
            Toute commande validée
            implique l'acceptation
            des présentes conditions.
          </p>

        </div>

      </div>
    </main>
  );
}