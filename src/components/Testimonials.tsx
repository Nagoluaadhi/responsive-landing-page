// src/components/Testimonials.tsx

const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Startup Founder",
      message:
        "Working with this team was a game-changer. They delivered beyond expectations!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Lee",
      role: "Product Manager",
      message:
        "Clean code, scalable design, and a reliable team — highly recommended.",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Aisha Khan",
      role: "UI/UX Designer",
      message:
        "The attention to detail and modern UI brought our vision to life.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];
  
  const Testimonials = () => {
    return (
      <section id="testimonials" className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 mb-12">
            Real words from the people we’ve had the pleasure to work with.
          </p>
  
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition text-left">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">“{t.message}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
   
