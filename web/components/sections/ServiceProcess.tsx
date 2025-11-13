import type { LucideIcon } from "lucide-react";

type ProcessStep = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

export default function ServiceProcess({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="section bg-mint_green-50">
      <div className="container">
        <h2 className="heading text-2xl font-semibold text-viridian-900 mb-6">
          Our Process
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative rounded-lg border-2 border-mint_green-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-viridian-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-viridian-100 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-viridian-700" />
                </div>

                {/* Content */}
                <h3 className="heading text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
