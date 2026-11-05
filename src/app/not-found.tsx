import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-forest-dark px-6 text-center text-ivory">
      <p className="text-sm uppercase tracking-[0.3em] text-gold">404</p>
      <h1 className="mt-4 text-4xl md:text-5xl">This page could not be found.</h1>
      <p className="mt-4 max-w-md text-ivory/70">The link may be outdated, or the page may have moved.</p>
      <Link href="/" className="mt-8 rounded-full border border-gold px-6 py-2 text-gold transition hover:bg-gold hover:text-forest-dark">
        Return home
      </Link>
    </main>
  );
}
