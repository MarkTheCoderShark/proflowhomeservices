import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact / Get Free Estimate",
  description: "Request a free estimate. Expect a quick response via ProFlow360.",
};

export default function Contact() {
  return (
    <div className="section">
      <div className="container grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="heading text-3xl font-semibold text-evergreen">Get a Free Estimate</h1>
          <p className="mt-2 text-slate">We’ll confirm details and schedule your service.</p>
          <div className="mt-6 rounded-lg border border-zinc-200 bg-white p-5">
            <ContactForm />
          </div>
        </div>
        <aside className="space-y-4">
          <div>
            <div className="heading text-lg font-semibold text-evergreen">Call Us</div>
            <p className="mt-1 text-slate">(###) ###-####</p>
          </div>
          <div>
            <div className="heading text-lg font-semibold text-evergreen">Hours</div>
            <p className="mt-1 text-slate">Mon–Sat, 8am–6pm</p>
          </div>
          <div>
            <div className="heading text-lg font-semibold text-evergreen">Service Areas</div>
            <p className="mt-1 text-slate">Sacramento, Roseville, Rocklin, Folsom & more</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

