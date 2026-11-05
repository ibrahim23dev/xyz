"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ExternalLink, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters."),
  message: z.string().trim().min(10, "Message must be at least 10 characters.").max(2000),
});
type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: FormValues) => {
    setStatus("idle");
    if (!profile.email) {
      // No destination configured yet. Surface a clear error instead of pretending to send.
      setStatus("error");
      return;
    }
    const body = encodeURIComponent(`From: ${values.name} <${values.email}>\n\n${values.message}`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${body}`;
    reset();
    setStatus("success");
  };

  const socials = [
    { label: "LinkedIn", href: profile.socials.linkedin, icon: ExternalLink },
    { label: "ResearchGate", href: profile.socials.researchGate, icon: ExternalLink },
    { label: "Google Scholar", href: profile.socials.googleScholar, icon: ExternalLink },
    { label: "Facebook", href: profile.socials.facebook, icon: ExternalLink },
  ].filter((s) => s.href);

  const field = "w-full rounded-lg border border-gold/40 bg-white px-4 py-3 text-charcoal outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20";

  return (
    <section id="contact" className="bg-white/40 py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHeading id="contact-title" eyebrow="Contact" title="Let's Connect Through Knowledge & Legal Scholarship." intro="For academic correspondence, research collaboration, or professional enquiries." />
          <ul className="space-y-4 text-charcoal/80">
            {profile.email ? (
              <li className="flex items-center gap-3"><Mail size={18} className="text-gold" /> <a href={`mailto:${profile.email}`} className="hover:text-forest">{profile.email}</a></li>
            ) : (
              <li className="flex items-center gap-3 text-sm text-charcoal/60"><Mail size={18} className="text-gold" /> Professional email: add in src/data/portfolio.ts</li>
            )}
          </ul>
          {socials.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-sm text-forest transition hover:bg-forest hover:text-ivory">
                    <s.icon size={15} /> {s.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-8 text-sm text-charcoal/60">Social profile links appear here once added to the data file.</p>
          )}
        </div>

        <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-2xl border border-gold/30 bg-ivory p-8 shadow-sm" aria-label="Contact form">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-forest">Full name</label>
            <input id="name" className={field} {...register("name")} aria-invalid={!!errors.name} />
            {errors.name && <p role="alert" className="mt-1 text-sm text-red-700">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-forest">Email address</label>
            <input id="email" type="email" className={field} {...register("email")} aria-invalid={!!errors.email} />
            {errors.email && <p role="alert" className="mt-1 text-sm text-red-700">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-forest">Subject</label>
            <input id="subject" className={field} {...register("subject")} aria-invalid={!!errors.subject} />
            {errors.subject && <p role="alert" className="mt-1 text-sm text-red-700">{errors.subject.message}</p>}
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-forest">Message</label>
            <textarea id="message" rows={5} className={field} {...register("message")} aria-invalid={!!errors.message} />
            {errors.message && <p role="alert" className="mt-1 text-sm text-red-700">{errors.message.message}</p>}
          </div>

          <button type="submit" disabled={isSubmitting}
            className="rounded-full bg-forest px-8 py-3 text-sm font-medium text-ivory transition hover:bg-forest-dark disabled:opacity-60">
            Send message
          </button>

          {status === "success" && <p role="status" className="text-sm text-forest">Your email app should open with your message ready to send.</p>}
          {status === "error" && <p role="alert" className="text-sm text-red-700">The contact address has not been configured yet. Please reach out through another channel.</p>}
        </form>
      </div>
    </section>
  );
}
