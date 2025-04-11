// src/components/Features.tsx

const features = [
    {
      title: "Clean Design",
      description: "Beautiful, responsive designs tailored for all screen sizes.",
      icon: "🎨",
    },
    {
      title: "Fast Performance",
      description: "Optimized code and best practices ensure fast load times.",
      icon: "⚡",
    },
    {
      title: "Scalable Code",
      description: "Built using modular, maintainable, and scalable architecture.",
      icon: "🧱",
    },
  ];
  
  const Features = () => {
    return (
      <section id="features" className="scroll-mt-24 bg-gray-50 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">What We Offer</h2>
          <p className="text-gray-600 mb-12">
            We focus on delivering value and quality through every line of code.
          </p>
  
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
   
