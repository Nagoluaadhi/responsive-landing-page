const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            We are a passionate team of developers, designers, and dreamers
            dedicated to building exceptional digital experiences. Our mission
            is to turn ideas into scalable, pixel-perfect products that people
            love to use.
          </p>
          <p className="text-lg text-gray-600">
            From startups to enterprises, we help brands bring their vision to
            life with clean code, beautiful design, and a touch of creative
            magic. Whether you&#39;re launching something new or improving something existing — we&#39;re here to make it unforgettable.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src="/assets/About.png" // 👈 replace this with your Figma export
            alt="About Us Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
