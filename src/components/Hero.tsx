// src/components/Hero.tsx;
const Hero = () => {
    return (
      <section className="bg-white pt-24 pb-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Build your next product with <span className="text-green-600">impact</span>.
            </h1>
            <p className="text-lg text-gray-600">
              We help startups and businesses bring their ideas to life with clean design and scalable code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="px-6 py-3 border border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 transition"
              >
                Learn More
              </a>
            </div>
          </div>
  
          {/* Right Side - Image */}
          <div>
          <img
            src="/assets/Home.png" // 👈 replace this with your Figma export
            alt="Hero"
            height={400}
            width={400}
            className="mx-auto"
          />

          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
   
