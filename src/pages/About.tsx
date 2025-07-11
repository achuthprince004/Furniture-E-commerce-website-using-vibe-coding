
import { Phone, Mail, MapPin, Award, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Interior Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616c28ca8b9?w=300&h=300&fit=crop",
      experience: "12 years"
    },
    {
      name: "Michael Chen",
      role: "Furniture Designer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      experience: "8 years"
    },
    {
      name: "Emily Rodriguez",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      experience: "6 years"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-acid">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <h1 className="text-2xl font-bold text-amber-900 tracking-wide">LINORA</h1>
              <span className="ml-2 text-xs text-amber-700 font-light">INTERIOR STUDIO</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => navigate('/')} className="text-stone-700 hover:text-amber-900 transition-colors font-medium">Home</button>
              <button onClick={() => navigate('/services')} className="text-stone-700 hover:text-amber-900 transition-colors font-medium">Services</button>
              <button onClick={() => navigate('/portfolio')} className="text-stone-700 hover:text-amber-900 transition-colors font-medium">Portfolio</button>
              <button className="text-amber-900 font-medium">About</button>
              <button onClick={() => navigate('/contact')} className="text-stone-700 hover:text-amber-900 transition-colors font-medium">Contact</button>
            </nav>

            <Button onClick={() => navigate('/cart')} className="bg-amber-900 hover:bg-amber-800">
              View Cart
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stone-100 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-800 font-medium tracking-wide uppercase text-sm mb-4">About Company</p>
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6">ABOUT<br />COMPANY</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            With over a decade of experience, we've established ourselves as a premier destination for luxury interior design and furniture crafting.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Our Story</h2>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Founded in 2014, LINORA began as a small studio with a big vision: to create beautiful, functional spaces that reflect the unique personality and lifestyle of each client. Our journey started with a simple belief that good design has the power to transform not just spaces, but lives.
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Today, we've grown into a full-service interior design studio, but our core values remain the same. We're passionate about craftsmanship, attention to detail, and creating spaces that tell your story.
              </p>
              
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Briefcase className="h-8 w-8 text-amber-900" />
                  </div>
                  <p className="text-3xl font-bold text-amber-900">75+</p>
                  <p className="text-stone-600 text-sm">Design Projects</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="h-8 w-8 text-amber-900" />
                  </div>
                  <p className="text-3xl font-bold text-amber-900">25+</p>
                  <p className="text-stone-600 text-sm">Team Members</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Award className="h-8 w-8 text-amber-900" />
                  </div>
                  <p className="text-3xl font-bold text-amber-900">10+</p>
                  <p className="text-stone-600 text-sm">Awards Won</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=300&h=200&fit=crop" 
                alt="Interior design process"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop" 
                alt="Modern furniture"
                className="rounded-lg shadow-lg mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop" 
                alt="Design consultation"
                className="rounded-lg shadow-lg -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=300&h=200&fit=crop" 
                alt="Finished interior"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Meet Our Team</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Our talented team of designers and craftspeople bring years of experience and passion to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">{member.name}</h3>
                  <p className="text-amber-900 font-medium mb-2">{member.role}</p>
                  <p className="text-stone-600 text-sm">{member.experience} experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">READY TO WORK<br />WITH US?</h2>
          <p className="text-xl mb-8 opacity-90">Let's bring your vision to life</p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900">
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">LINORA</h3>
              <p className="text-stone-400 mb-6 max-w-md">
                Creating beautiful, functional spaces with premium furniture and expert interior design services.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center text-stone-400">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+1 (310) 456-7894</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-stone-400">
                <li><a href="#" className="hover:text-white transition-colors">Interior Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Furniture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Space Planning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consultation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-stone-400">
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                  <span>123 Design Street<br />Los Angeles, CA 90210</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>hello@linora.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-400">
            <p>&copy; 2024 LINORA Interior Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
