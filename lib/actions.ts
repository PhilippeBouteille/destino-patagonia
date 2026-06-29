"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function signIn(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect(`/admin/login?error=${encodeURIComponent(error.message)}`);
  }

  redirect("/admin");
}

export async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function updateTour(id: string, formData: FormData) {
  const supabase = createClient();

  const incluyeRaw = String(formData.get("incluye") ?? "");
  const incluye = incluyeRaw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const payload = {
    nombre: String(formData.get("nombre") ?? ""),
    categoria: String(formData.get("categoria") ?? ""),
    precio_desde: Number(formData.get("precio_desde") ?? 0),
    duracion: String(formData.get("duracion") ?? ""),
    temporada_ini: String(formData.get("temporada_ini") ?? ""),
    temporada_fin: String(formData.get("temporada_fin") ?? ""),
    descripcion_corta: String(formData.get("descripcion_corta") ?? ""),
    descripcion_larga: String(formData.get("descripcion_larga") ?? ""),
    incluye,
    publicado: formData.get("publicado") === "on",
    updated_at: new Date().toISOString(),
  };

  await supabase.from("tours").update(payload).eq("id", id);

  revalidatePath("/");
  revalidatePath("/aventuras");
  revalidatePath("/admin");
  redirect("/admin?guardado=tour");
}

export async function updateInfoGeneral(formData: FormData) {
  const supabase = createClient();

  const payload = {
    telefono: String(formData.get("telefono") ?? ""),
    direccion: String(formData.get("direccion") ?? ""),
    email: String(formData.get("email") ?? ""),
    anios_experiencia: Number(formData.get("anios_experiencia") ?? 0),
    redes_sociales: {
      facebook: String(formData.get("facebook") ?? ""),
      instagram: String(formData.get("instagram") ?? ""),
    },
    updated_at: new Date().toISOString(),
  };

  await supabase.from("info_general").update(payload).eq("id", 1);

  revalidatePath("/");
  revalidatePath("/contacto");
  redirect("/admin?guardado=info");
}

export async function updatePagina(slug: string, formData: FormData) {
  const supabase = createClient();

  const titulos = formData.getAll("bloque_titulo") as string[];
  const textos = formData.getAll("bloque_texto") as string[];
  const bloques = titulos.map((titulo, i) => ({
    titulo,
    texto: textos[i] ?? "",
  }));

  await supabase
    .from("paginas")
    .update({ bloques, updated_at: new Date().toISOString() })
    .eq("slug", slug);

  revalidatePath(`/${slug}`);
  redirect("/admin?guardado=pagina");
}
