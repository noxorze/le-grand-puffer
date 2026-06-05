"use client";

import { useState } from "react";

export default function LivraisonPage() {
  const [country, setCountry] = useState("FR");
  const [deliveryType, setDeliveryType] =
    useState("relay");

  const [phone, setPhone] = useState("");
  const [relayName, setRelayName] =
    useState("");
  const [relayAddress, setRelayAddress] =
    useState("");
  const [relayCity, setRelayCity] =
    useState("");
  const [relayZip, setRelayZip] =
    useState("");
  const [instructions, setInstructions] =
    useState("");

  const handleContinue = async () => {
    localStorage.setItem(
      "shipping",
      JSON.stringify({
        country,
        deliveryType,
        phone,
        relayName,
        relayAddress,
        relayCity,
        relayZip,
        instructions,
      })
    );

    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    try {
      const response = await fetch(
        "/api/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            cart,
          }),
        }
      );

      const data =
        await response.json();

      if (data.url) {
        window.location.href =
          data.url;
      }
    } catch (error) {
      console.error(error);

      alert(
        "Erreur lors de la redirection Stripe."
      );
    }
  };

  return (
    <main className="bg-black min-h-screen text-white">

      <div className="max-w-5xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-black mb-4">
          Livraison
        </h1>

        <p className="text-zinc-400 mb-10">
          Renseignez vos informations avant
          le paiement sécurisé Stripe.
        </p>

        <div className="space-y-8">

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Pays
            </h2>

            <select
              value={country}
              onChange={(e) =>
                setCountry(e.target.value)
              }
              className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
            >
              <option value="FR">
                🇫🇷 France
              </option>

              <option value="BE">
                🇧🇪 Belgique
              </option>

              <option value="LU">
                🇱🇺 Luxembourg
              </option>
            </select>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Mode de livraison
            </h2>

            <div className="flex gap-4">

              <button
                onClick={() =>
                  setDeliveryType(
                    "relay"
                  )
                }
                className={`flex-1 p-4 rounded-xl border ${
                  deliveryType ===
                  "relay"
                    ? "border-purple-500 bg-purple-500/10"
                    : "border-zinc-700"
                }`}
              >
                Point relais
              </button>

              <button
                onClick={() =>
                  setDeliveryType(
                    "home"
                  )
                }
                className={`flex-1 p-4 rounded-xl border ${
                  deliveryType ===
                  "home"
                    ? "border-purple-500 bg-purple-500/10"
                    : "border-zinc-700"
                }`}
              >
                À domicile
              </button>

            </div>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Téléphone
            </h2>

            <input
              type="tel"
              value={phone}
              onChange={(e) =>
                setPhone(
                  e.target.value
                )
              }
              placeholder="06 12 34 56 78"
              className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
            />

          </div>

          {deliveryType === "relay" && (
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

              <h2 className="text-2xl font-bold mb-6">
                Point relais
              </h2>

              <div className="space-y-4">

                <input
                  type="text"
                  placeholder="Nom du relais"
                  value={relayName}
                  onChange={(e) =>
                    setRelayName(
                      e.target.value
                    )
                  }
                  className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
                />

                <input
                  type="text"
                  placeholder="Adresse"
                  value={relayAddress}
                  onChange={(e) =>
                    setRelayAddress(
                      e.target.value
                    )
                  }
                  className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
                />

                <input
                  type="text"
                  placeholder="Ville"
                  value={relayCity}
                  onChange={(e) =>
                    setRelayCity(
                      e.target.value
                    )
                  }
                  className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
                />

                <input
                  type="text"
                  placeholder="Code postal"
                  value={relayZip}
                  onChange={(e) =>
                    setRelayZip(
                      e.target.value
                    )
                  }
                  className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
                />

              </div>

            </div>
          )}

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Instructions de livraison
            </h2>

            <textarea
              rows={5}
              value={instructions}
              onChange={(e) =>
                setInstructions(
                  e.target.value
                )
              }
              placeholder="Informations complémentaires..."
              className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700 resize-none"
            />

          </div>

          <button
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-500 py-5 rounded-2xl font-bold text-lg"
          >
            Continuer vers le paiement
          </button>

        </div>

      </div>

    </main>
  );
}