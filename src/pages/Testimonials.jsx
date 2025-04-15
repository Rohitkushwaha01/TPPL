import React from 'react';
import Slider from 'react-slick';
import Footer from '../components/Footer';
import Client from '../components/Client';

const testimonials = [
  {
    name: 'John Doe',
    company: 'Acme Corp',
    testimonial: 'This company is excellent! The team was incredibly professional and the results were outstanding.',
    rating: 5, // 5-star rating
  },
  {
    name: 'Jane Smith',
    company: 'Tech Solutions',
    testimonial: 'A fantastic experience! I was impressed with the quality of work and the attention to detail.',
    rating: 4, // 4-star rating
  },
  {
    name: 'Michael Brown',
    company: 'Innovate Inc.',
    testimonial: 'The best service I have experienced. Their team is knowledgeable, efficient, and dedicated.',
    rating: 5, // 5-star rating
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Helper function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-400'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <>
    <section className="bg-[#f9f9f9] py-16 mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="p-6">
              <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition hover:scale-105 hover:shadow-2xl duration-300">
                <p className="text-gray-600 italic mb-4 max-w-xl">"{t.testimonial}"</p>
                <div className="flex gap-1 mb-2">{renderStars(t.rating)}</div>
                <h3 className="font-bold text-lg text-orange-500">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.company}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    <div className="max-w-6xl mx-auto px-4 my-20">


    <Client />
    </div>
    <Footer/>
    </>
  );
};

export default Testimonials;
