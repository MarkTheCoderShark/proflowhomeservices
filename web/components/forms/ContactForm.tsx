"use client";
import { useState } from "react";

const services = [
  "Gutter Cleaning",
  "Gutter Guards",
  "Gutter Repair",
  "Interior Painting",
  "Exterior Painting",
  "Handyman",
  "Bathroom Remodel",
  "Kitchen Remodel",
  "Flooring",
  "Drywall & Framing",
  "Pressure Washing",
  "Roof Cleaning",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showDetails, setShowDetails] = useState(false);

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

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
          <input
            name="name"
            className="w-full rounded-md border border-zinc-300 h-11 px-3 focus:outline-none focus:ring-2 focus:ring-viridian-500/60 focus:border-viridian-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
          <input
            name="phone"
            type="tel"
            className="w-full rounded-md border border-zinc-300 h-11 px-3 focus:outline-none focus:ring-2 focus:ring-viridian-500/60 focus:border-viridian-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input
            name="email"
            type="email"
            className="w-full rounded-md border border-zinc-300 h-11 px-3 focus:outline-none focus:ring-2 focus:ring-viridian-500/60 focus:border-viridian-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
          <input
            name="city"
            className="w-full rounded-md border border-zinc-300 h-11 px-3 focus:outline-none focus:ring-2 focus:ring-viridian-500/60 focus:border-viridian-500"
            placeholder="e.g., Roseville"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Service(s) Needed *</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {services.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => toggleService(service)}
              className={`px-3 py-2 text-sm rounded-md border-2 transition-all ${
                selectedServices.includes(service)
                  ? "border-viridian-500 bg-viridian-50 text-viridian-700 font-semibold"
                  : "border-zinc-300 bg-white text-slate-700 hover:border-viridian-300"
              }`}
            >
              {service}
            </button>
          ))}
        </div>
        <input
          type="hidden"
          name="services"
          value={selectedServices.join(", ")}
          required={selectedServices.length === 0}
        />
      </div>

      <div>
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="text-sm text-viridian-600 hover:text-viridian-700 font-medium mb-2"
        >
          {showDetails ? "− Hide" : "+ Add"} Project Details (Optional)
        </button>
        {showDetails && (
          <textarea
            name="details"
            className="w-full rounded-md border border-zinc-300 min-h-[100px] p-3 focus:outline-none focus:ring-2 focus:ring-viridian-500/60 focus:border-viridian-500"
            placeholder="Tell us more about your project..."
          />
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full heading rounded-md bg-viridian-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-viridian-500 disabled:opacity-60 transition"
        >
          {status === "submitting" ? "Submitting..." : "Get Your Free Estimate"}
        </button>
        {status === "success" && (
          <p className="mt-3 text-sm text-emerald-600 bg-emerald-50 p-3 rounded-md">
            ✓ Thanks! Your request has been received. A ProFlow team member will reach out within 5-15 minutes (Mon–Sat).
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600 bg-red-50 p-3 rounded-md">
            Something went wrong. Please try again or call us at (916) 740-7249.
          </p>
        )}
      </div>
    </form>
  );
}

