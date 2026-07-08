const features = [
  "30K+ Camera Network",
  "Vision AI",
  "Real-Time Query Engine",
  "Spatial Intelligence",
  "Developer APIs",
  "Live Analytics"
];

export default function Features() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Core Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature}
            className="border rounded-xl p-6"
          >
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
}
