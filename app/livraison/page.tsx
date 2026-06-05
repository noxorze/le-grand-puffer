"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LivraisonPage() {
  const { cart } = useCart();

  const [country, setCountry] = useState("FR");
  const [deliveryType, setDeliveryType] =
    useState("home");

  const [firstName, setFirstName] =
    useState("");
  const [lastName, setLastName] =
    useState("");
  const [email, setEmail] =
    useState("");
  const [phone, setPhone] =
    useState("");

  const [address, setAddress] =
    useState("");
  const [city, setCity] =
    useState("");
  const [zip, setZip] =
    useState("");

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

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping =
    subtotal >= 50 ? 0 : 4.9;

  const total = subtotal + shipping;

  const handleCheckout = async () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone
    ) {
      alert(
        "Veuillez remplir vos informations."
      );
      return;
    }

    if (
      deliveryType === "home" &&
      (!address || !city || !zip)
    ) {
      alert(
        "Veuillez remplir votre adresse."
      );
      return;
    }

    if (
      deliveryType === "relay" &&
      (!relayName ||
        !relayAddress ||
        !relayCity ||
        !relayZip)
    ) {
      alert(
        "Veuillez remplir les informations du relais."
      );
      return;
    }

    const shippingData = {
      country,
      deliveryType,
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      zip,
      relayName,
      relayAddress,
      relayCity,
      relayZip,
      instructions,
    };

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
            shipping:
              shippingData,
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
        "Erreur lors du paiement."
      );
    }
  };

  return (
    <main className="bg-black min-h-screen text-white">
      <TopBar />
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <h1 className="text-5xl font-black mb-12">
          Livraison
        </h1>

        <div className="grid lg:grid-cols-[1fr_420px] gap-10">

          <div className="space-y-8">

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

              <h2 className="text-2xl font-bold mb-6">
                Informations client
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  placeholder="Prénom"
                  value={firstName}
                  onChange={(e) =>
                    setFirstName(
                      e.target.value
                    )
                  }
                  className="p-4 rounded-xl bg-zinc-900 border border-zinc-700"
                />

                <input
                  placeholder="Nom"
                  value={lastName}
                  onChange={(e) =>
                    setLastName(
                      e.target.value
                    )
                  }
                  className="p-4 rounded-xl bg-zinc-900 border border-zinc-700"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  className="p-4 rounded-xl bg-zinc-900 border border-zinc-700"
                />

                <input
                  placeholder="Téléphone"
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value
                    )
                  }
                  className="p-4 rounded-xl bg-zinc-900 border border-zinc-700"
                />

              </div>

            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

              <h2 className="text-2xl font-bold mb-6">
                Pays
              </h2>

              <select
                value={country}
                onChange={(e) =>
                  setCountry(
                    e.target.value
                  )
                }
                className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
              >
                <option value="FR">
                  France
                </option>

                <option value="BE">
                  Belgique
                </option>

                <option value="LU">
                  Luxembourg
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
                  Domicile
                </button>

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

              </div>

            </div>

            {deliveryType ===
            "home" ? (
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

                <h2 className="text-2xl font-bold mb-6">
                  Adresse
                </h2>

                <div className="space-y-4">

                  <input
                    placeholder="Adresse"
                    value={address}
                    onChange={(e) =>
                      setAddress(
                        e.target.value
                      )
                    }
                    className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
                  />

                  <div className="grid md:grid-cols-2 gap-4">

                    <input
                      placeholder="Ville"
                      value={city}
                      onChange={(e) =>
                        setCity(
                          e.target.value
                        )
                      }
                      className="p-4 rounded-xl bg-zinc-900 border border-zinc-700"
                    />

                    <input
                      placeholder="Code postal"
                      value={zip}
                      onChange={(e) =>
                        setZip(
                          e.target.value
                        )
                      }
                      className="p-4 rounded-xl bg-zinc-900 border border-zinc-700"
                    />

                  </div>

                </div>

              </div>
            ) : (
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

                <h2 className="text-2xl font-bold mb-6">
                  Point relais
                </h2>

                <div className="space-y-4">

                  <input
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
                    placeholder="Adresse relais"
                    value={relayAddress}
                    onChange={(e) =>
                      setRelayAddress(
                        e.target.value
                      )
                    }
                    className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
                  />

                  <div className="grid md:grid-cols-2 gap-4">

                    <input
                      placeholder="Ville"
                      value={relayCity}
                      onChange={(e) =>
                        setRelayCity(
                          e.target.value
                        )
                      }
                      className="p-4 rounded-xl bg-zinc-900 border border-zinc-700"
                    />

                    <input
                      placeholder="Code postal"
                      value={relayZip}
                      onChange={(e) =>
                        setRelayZip(
                          e.target.value
                        )
                      }
                      className="p-4 rounded-xl bg-zinc-900 border border-zinc-700"
                    />

                  </div>

                </div>

              </div>
            )}

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

              <h2 className="text-2xl font-bold mb-6">
                Instructions
              </h2>

              <textarea
                rows={4}
                value={instructions}
                onChange={(e) =>
                  setInstructions(
                    e.target.value
                  )
                }
                className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
              />

            </div>

          </div>

          <div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sticky top-6">

              <h2 className="text-2xl font-bold mb-8">
                Résumé commande
              </h2>

              <div className="space-y-4">

                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.flavor}`}
                    className="flex justify-between"
                  >
                    <span>
                      {item.name} ×{" "}
                      {item.quantity}
                    </span>

                    <span>
                      {(
                        item.price *
                        item.quantity
                      ).toFixed(2)} €
                    </span>
                  </div>
                ))}

                <div className="border-t border-zinc-800 pt-4 flex justify-between">
                  <span>
                    Livraison
                  </span>

                  <span>
                    {shipping === 0
                      ? "Offerte"
                      : `${shipping.toFixed(
                          2
                        )} €`}
                  </span>
                </div>

                <div className="border-t border-zinc-800 pt-4 flex justify-between text-xl font-bold">

                  <span>Total</span>

                  <span className="text-purple-400">
                    {total.toFixed(2)} €
                  </span>

                </div>

              </div>

              <button
                onClick={
                  handleCheckout
                }
                className="w-full mt-8 bg-gradient-to-r from-purple-600 to-fuchsia-500 py-4 rounded-2xl font-bold text-lg"
              >
                Continuer vers le paiement
              </button>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}