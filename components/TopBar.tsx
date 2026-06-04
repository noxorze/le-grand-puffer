export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-purple-950 via-black to-purple-950 border-b border-purple-900">

      <div className="max-w-7xl mx-auto">

        <div className="hidden md:flex justify-center items-center gap-6 py-2 text-sm font-semibold text-white">

          <span>PRODUITS AUTHENTIQUES</span>

          <span className="text-purple-500">•</span>

          <span>LIVRAISON PARTOUT EN FRANCE</span>

          <span className="text-purple-500">•</span>

          <span>PAIEMENT 100% SÉCURISÉ</span>

          <span className="text-purple-500">•</span>

          <span>SERVICE CLIENT 7J/7</span>

        </div>

        <div className="md:hidden text-center py-2 text-xs font-semibold text-white">
          LIVRAISON PARTOUT EN FRANCE
        </div>

      </div>

    </div>
  );
}