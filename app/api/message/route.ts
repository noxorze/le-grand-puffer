import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const { error } = await supabase
      .from("messages")
      .insert([{ name, email, message }]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }
}