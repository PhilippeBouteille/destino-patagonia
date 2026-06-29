import { signIn } from "@/lib/actions";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-sm flex-col justify-center px-6">
      <h1 className="font-display text-2xl text-fjord-900">
        Acceso administración
      </h1>
      <form action={signIn} className="mt-8 space-y-4">
        <div>
          <label className="block text-sm text-slate-600" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-sm border border-ice-100 px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-600" htmlFor="password">
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="mt-1 w-full rounded-sm border border-ice-100 px-3 py-2"
          />
        </div>
        {searchParams.error ? (
          <p className="text-sm text-red-600">{searchParams.error}</p>
        ) : null}
        <button
          type="submit"
          className="w-full rounded-sm bg-fjord-900 px-4 py-2 font-medium text-ice-50 hover:bg-fjord-700"
        >
          Entrar
        </button>
      </form>
    </section>
  );
}
