
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "The food is exceptional! I've tried many meal delivery services, but nothing compares to the quality and taste of these dishes.",
    author: "Emily Johnson",
    position: "Regular Customer",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    content: "Prompt delivery, food still hot when it arrived, and absolutely delicious. Their Pasta Carbonara is to die for!",
    author: "Michael Chen",
    position: "Food Blogger",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    id: 3,
    content: "I love the variety of options available. As someone with dietary restrictions, it's refreshing to find a service that caters to my needs.",
    author: "Sophia Rodriguez",
    position: "Fitness Instructor",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-amber-100 text-amber-800 text-sm px-4 py-1 rounded-full mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-600">
            Don't just take our word for it. Hear what our satisfied customers have to say about their experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-amber-400 mb-4" />
                <p className="text-slate-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-slate-900">{testimonial.author}</h4>
                    <p className="text-slate-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
