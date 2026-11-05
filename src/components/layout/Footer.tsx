import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-forest-dark py-10 text-center text-sm text-ivory/60">
      <p className="font-serif text-lg text-ivory">{profile.name}</p>
      <p className="mt-1">{profile.designation} · {profile.university}</p>
      <p className="mt-4 text-xs text-ivory/40">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  );
}
