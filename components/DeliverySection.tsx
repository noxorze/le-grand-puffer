export default function DeliverySection() {
  return (
    <section className="bg-zinc-950 text-white py-20">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-12">

          <span className="text-purple-500 font-semibold">
            LIVRAISON
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Recevez votre commande rapidement
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Livraison partout en France avec suivi complet.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-black border border-zinc-800 rounded-3xl p-8">

            <h3 className="text-2xl font-bold">
              Mondial Relay
            </h3>

            <p className="text-zinc-400 mt-4">
              Livraison en point relais partout en France.
            </p>

          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-8">

            <h3 className="text-2xl font-bold">
              Colissimo
            </h3>

            <p className="text-zinc-400 mt-4">
              Livraison à domicile avec suivi.
            </p>

          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-8">

            <h3 className="text-2xl font-bold">
              Expédition Rapide
            </h3>

            <p className="text-zinc-400 mt-4">
              Préparation et expédition rapide des commandes.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}