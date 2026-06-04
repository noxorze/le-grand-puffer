"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

      if (!error && data) {
        setMessages(data);
      }

      setLoading(false);
    };

    fetchMessages();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">

        <span className="text-purple-400 font-semibold">
          ADMINISTRATION
        </span>

        <h1 className="text-5xl font-black mt-4">
          Messages reçus
        </h1>

        <p className="text-zinc-400 mt-4">
          Tous les messages envoyés depuis le formulaire de contact.
        </p>

        {loading ? (
          <div className="mt-12 bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            Chargement...
          </div>
        ) : messages.length === 0 ? (
          <div className="mt-12 bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            Aucun message reçu.
          </div>
        ) : (
          <div className="space-y-6 mt-12">

            {messages.map((message) => (
              <div
                key={message.id}
                className="
                  bg-zinc-950
                  border
                  border-zinc-800
                  rounded-3xl
                  p-6
                "
              >

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                  <div>
                    <h2 className="text-xl font-bold">
                      {message.name}
                    </h2>

                    <p className="text-purple-400">
                      {message.email}
                    </p>
                  </div>

                  <span className="text-zinc-500 text-sm">
                    {new Date(
                      message.created_at
                    ).toLocaleString("fr-FR")}
                  </span>

                </div>

                <div className="mt-6 border-t border-zinc-800 pt-6">

                  <p className="text-zinc-300 leading-relaxed">
                    {message.message}
                  </p>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}