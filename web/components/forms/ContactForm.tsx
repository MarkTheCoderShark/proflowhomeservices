"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      // TODO: integrate with ProFlow360/Strapi API
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate">Full Name</label>
          <input className="mt-1 w-full rounded-md border border-zinc-300 h-11 px-3 focus:outline-none focus:ring-2 focus:ring-viridian-500/60" required />
        </div>
        <div>
          <label className="block text-sm text-slate">Phone Number</label>
          <input className="mt-1 w-full rounded-md border border-zinc-300 h-11 px-3 focus:outline-none focus:ring-2 focus:ring-viridian-500/60" required />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate">Email</label>
          <input type="email" className="mt-1 w-full rounded-md border border-zinc-300 h-11 px-3 focus:outline-none focus:ring-2 focus:ring-viridian-500/60" />
        </div>
        <div>
          <label className="block text-sm text-slate">City</label>
          <input className="mt-1 w-full rounded-md border border-zinc-300 h-11 px-3 focus:outline-none focus:ring-2 focus:ring-aqua/60" />
        </div>
      </div>
      <div>
        <label className="block text-sm text-slate">Service Needed</label>
        <input className="mt-1 w-full rounded-md border border-zinc-300 h-11 px-3 focus:outline-none focus:ring-2 focus:ring-viridian-500/60" placeholder="e.g., Gutter Cleaning, Bathroom Remodel" />
      </div>
      <div>
        <label className="block text-sm text-slate">Project Details</label>
        <textarea className="mt-1 w-full rounded-md border border-zinc-300 min-h-[120px] p-3 focus:outline-none focus:ring-2 focus:ring-viridian-500/60" />
      </div>
      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="heading rounded-md bg-viridian-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-viridian-400 disabled:opacity-60 transition"
        >
          {status === "submitting" ? "Submitting..." : "Get Free Estimate"}
        </button>
        {status === "success" && (
          <p className="mt-2 text-sm text-emerald-600">
            Thanks! Your request has been received and logged in ProFlow360. We’ll contact you shortly.
          </p>
        )}
        {status === "error" && (
          <p className="mt-2 text-sm text-red-600">Something went wrong. Please try again.</p>
        )}
      </div>
    </form>
  );
}

