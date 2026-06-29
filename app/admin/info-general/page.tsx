import { createClient } from "@/lib/supabase/server";
import type { InfoGeneral } from "@/lib/types";
import { updateInfoGeneral } from "@/lib/actions";

export const dynamic = "force-dynamic";

export default async function InfoGeneralPage() {
  const supabase = createClient();
  const { data } = await supabase
    .from("info_general")
    .select("*")
    .eq("id", 1)
    .single<InfoGeneral>();

  return (
    <section className="mx-auto max-w-xl px-6 py-12">
      <h1 className="font-display text-2xl text-fjord-900">
        Información general
      </h1>
      <form action={updateInfoGeneral} className="mt-8 space-y-5">
        <Field label="Teléfono" name="telefono" defaultValue={data?.telefono ?? ""} />
        <Field label="Email" name="email" defaultValue={data?.email ?? ""} />
        <Field
          label="Dirección"
          name="direccion"
          defaultValue={data?.direccion ?? ""}
        />
        <Field
          label="Años de experiencia"
          name="anios_experiencia"
          type="number"
          defaultValue={String(data?.anios_experiencia ?? "")}
        />
        <Field
          label="Instagram (url)"
          name="instagram"
          defaultValue={data?.redes_sociales?.instagram ?? ""}
        />
        <Field
          label="Facebook (url)"
          name="facebook"
          defaultValue={data?.redes_sociales?.facebook ?? ""}
        />
        <button
          type="submit"
          className="rounded-sm bg-fjord-900 px-5 py-2 font-medium text-ice-50 hover:bg-fjord-700"
        >
          Guardar cambios
        </button>
      </form>
    </section>
  );
}

function Field({
  label,
  name,
  defaultValue,
  type = "text",
}: {
  label: string;
  name: string;
  defaultValue: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm text-slate-600">{label}</label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="mt-1 w-full rounded-sm border border-ice-100 px-3 py-2"
      />
    </div>
  );
}
