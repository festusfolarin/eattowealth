import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "Personalized Nutrition Plans",
      image: "images/homepage/services1.jpg",
      gradient: "from-green-500 via-transparent to-transparent",
      url: "#",
    },
    {
      title: "Consultation Services",
      image: "images/homepage/services2.jpg",
      gradient: "from-teal-500 via-transparent to-transparent",
      url: "#",
    },
    {
      title: "Health Analytics",
      image: "images/homepage/image3.png",
      gradient: "from-yellow-500 via-transparent to-transparent",
      url: "#",
    },
    {
      title: "Child Nutrition",
      image: "images/homepage/image4.png",
      gradient: "from-green-500 via-transparent to-transparent",
      url: "#",
    },
    {
      title: "Weight Loss Programs",
      image: "images/homepage/service5.jpg",
      gradient: "from-teal-500 via-transparent to-transparent",
      url: "#",
    },
    {
      title: "Food Suppliers",
      image: "images/homepage/service6.jpg",
      gradient: "from-yellow-500 via-transparent to-transparent",
      url: "#",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] ">
      <div className="max-w-screen-xl mx-auto px-4 md:px-0 py-18 ">
        <div className="text-center">
          <h3 className="text-2xl mb-2 text-center font-semibold leading-tight text-[#0D9344] sm:text-4xl">
            Our Services
          </h3>
          <p className="max-w-5xl text-center mx-auto mt-4 mb-10 text-base leading-relaxed text-gray-600">
            At Eattowealth, we provide a holistic approach to nutrition through
            a variety of services designed to meet your individual needs.
            Whether you are looking for personalized meal plans, expert
            coaching, or educational workshops, our team is dedicated to
            supporting you on your wellness journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              href={service.url}
              key={index}
              className="group relative h-64 overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${service.gradient} transition-opacity duration-300 group-hover:opacity-90`}
              />

              {/* Content */}
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-white text-xl  leading-tight drop-shadow-lg">
                  {service.title}
                </h3>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
