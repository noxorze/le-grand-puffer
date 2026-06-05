"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Admin = {
  id: number;
  email: string;
  created_at: string;
};

export default function AdminEmployesPage() {
  const router = useRouter();

  const [admins, setAdmins] = useState<Admin[]>([]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/connexion");
        return;
      }

      const { data } = await supabase
        .from("admins")
        .select("email")
        .eq("email", user.email)
        .single();

      if (!data) {
        router.push("/");
        return;
      }

      fetchAdmins();
    };

    checkAdmin();
  }, [router]);

  const fetchAdmins = async () => {
    const { data, error } = await supabase
      .from("admins")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error(error);
    } else {
      setAdmins(data || []);
    }

    setLoading(false);
  };

  const addAdmin = async () => {
    if (!email) {
      alert("Entre une adresse email");
      return;
    }

    const { error } = await supabase
      .from("admins")
      .insert([{ email }]);

    if (error) {
      alert(error.message);
      return;
    }

    setEmail("");
    fetchAdmins();
  };

  const deleteAdmin = async (id: number) => {
    if (!confirm("Supprimer cet employé ?")) {
      return;
    }

    const { error } = await supabase
      .from("admins")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchAdmins();
  };

  if (loading) {
    return (
      <main className="bg-black min-h-screen text-white flex items-center justify-center">
        Chargement...
      </main>
    );
  }

  return (
    <main className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl font-black text-purple-400 mb-10">
        Gestion des employés
      </h1>

      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 mb-10">

        <h2 className="text-2xl font-bold mb-6">
          Ajouter un employé
        </h2>

        <div className="flex gap-4">

          <input
            type="email"
            placeholder="email@exemple.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 p-4 rounded-xl bg-zinc-900 border border-zinc-700"
          />

          <button
            onClick={addAdmin}
            className="bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-4 rounded-xl font-bold"
          >
            Ajouter
          </button>

        </div>

      </div>

      <div className="space-y-4">

        {admins.map((admin) => (
          <div
            key={admin.id}
            className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 flex items-center justify-between"
          >

            <div>
              <p className="font-semibold">
                {admin.email}
              </p>

              <p className="text-zinc-500 text-sm mt-1">
                ID #{admin.id}
              </p>
            </div>

            <button
              onClick={() => deleteAdmin(admin.id)}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl font-bold"
            >
              Supprimer
            </button>

          </div>
        ))}

      </div>

    </main>
  );
}