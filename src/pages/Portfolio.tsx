
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const portfolioItems = [
    {
      title: "Modern Living Room",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      description: "A contemporary living space featuring clean lines and neutral tones."
    },
    {
      title: "Executive Office",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      description: "Professional workspace designed for productivity and elegance."
    },
    {
      title: "Luxury Bedroom",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=400&fit=crop",
      description: "Sophisticated bedroom design with premium materials and finishes."
    },
    {
      title: "Restaurant Design",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      description: "Atmospheric dining space that enhances the culinary experience."
    },
    {
      title: "Cozy Study Room",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      description: "Intimate workspace designed for focus and inspiration."
    },
    {
      title: "Modern Kitchen",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      description: "Functional kitchen design with contemporary aesthetics."
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
              <button className="text-amber-900 font-medium">Portfolio</button>
              <button onClick={() => navigate('/about')} className="text-stone-700 hover:text-amber-900 transition-colors font-medium">About</button>
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
          <p className="text-amber-800 font-medium tracking-wide uppercase text-sm mb-4">Our Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6">OUR<br />PORTFOLIO</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Explore our collection of completed projects showcasing our expertise in creating beautiful, functional spaces.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group bg-stone-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-amber-900 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">INSPIRED BY<br />OUR WORK?</h2>
          <p className="text-xl mb-8 opacity-90">Let's create something beautiful together</p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900">
            Start Your Project
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

export default Portfolio;
