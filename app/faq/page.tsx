import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQPage() {
  const questions = [
    {
      question: "Quels sont les délais de livraison ?",
      answer:
        "Les commandes sont expédiées sous 24 à 48h ouvrées.",
    },
    {
      question: "Quels moyens de paiement acceptez-vous ?",
      answer:
        "Paiement sécurisé par carte bancaire via Stripe.",
    },
    {
      question: "Puis-je suivre ma commande ?",
      answer:
        "Oui, un numéro de suivi est envoyé après expédition.",
    },
    {
      question: "Puis-je retourner un produit ?",
      answer:
        "Oui, selon les conditions légales de rétractation.",
    },
    {
      question: "Comment contacter le support ?",
      answer:
        "Via la page Contact ou par email.",
    },
  ];

  return (
    <main className="bg-black min-h-screen text-white">
      <TopBar />
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-20">

        <span className="text-purple-400 font-semibold">
          FAQ
        </span>

        <h1 className="text-5xl md:text-6xl font-black mt-4">
          Questions fréquentes
        </h1>

        <p className="text-zinc-400 mt-6 text-lg">
          Retrouvez les réponses aux questions les plus fréquentes.
        </p>

        <div className="space-y-6 mt-14">

          {questions.map((item, index) => (
            <div
              key={index}
              className="
                bg-zinc-950
                border
                border-zinc-800
                rounded-3xl
                p-8
              "
            >
              <h2 className="text-xl font-bold">
                {item.question}
              </h2>

              <p className="text-zinc-400 mt-4">
                {item.answer}
              </p>
            </div>
          ))}

        </div>

      </section>

      <Footer />
    </main>
  );
}