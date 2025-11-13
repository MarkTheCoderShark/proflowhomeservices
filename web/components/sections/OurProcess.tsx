import { PhoneCall, Calendar, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Request Estimate",
    desc: "Call us or fill out our online form. We respond quickly with available times for a free consultation."
  },
  {
    number: "02",
    icon: Calendar,
    title: "On-Site Visit & Transparent Quote",
    desc: "We visit your property, assess the work, and provide a detailed, transparent quote—no hidden fees."
  },
  {
    number: "03",
    icon: Wrench,
    title: "Professional Service & Updates",
    desc: "Our skilled crew completes the work on schedule, with real-time updates through ProFlow360™."
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Final Walkthrough & Guarantee",
    desc: "We walk through the completed work with you, ensure your satisfaction, and stand behind our guarantee."
  },
];

export default function OurProcess() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading text-3xl sm:text-4xl font-bold text-viridian-900">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            A simple, transparent process that eliminates uncertainty and delivers exceptional results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-viridian-100 mb-4">
                  <Icon size={32} className="text-viridian-700" />
                </div>
                <div className="text-sm font-bold text-viridian-600 mb-2">STEP {step.number}</div>
                <h3 className="heading text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-700 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
