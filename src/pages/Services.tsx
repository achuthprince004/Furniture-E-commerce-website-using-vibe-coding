
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Interior Design",
      description: "Complete interior design solutions for your home and office spaces.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=300&fit=crop",
      features: ["Space Planning", "3D Visualization", "Material Selection", "Project Management"]
    },
    {
      title: "Custom Furniture",
      description: "Bespoke furniture crafted to your exact specifications and style.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
      features: ["Custom Design", "Premium Materials", "Expert Craftsmanship", "Installation Service"]
    },
    {
      title: "Space Planning",
      description: "Optimize your space with our professional planning services.",
      image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400&h=300&fit=crop",
      features: ["Layout Design", "Flow Optimization", "Furniture Arrangement", "Lighting Design"]
    },
    {
      title: "Consultation",
      description: "Expert advice and guidance for your interior design projects.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      features: ["Design Consultation", "Color Schemes", "Style Guidance", "Budget Planning"]
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
              <button className="text-amber-900 font-medium">Services</button>
              <button onClick={() => navigate('/portfolio')} className="text-stone-700 hover:text-amber-900 transition-colors font-medium">Portfolio</button>
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
          <p className="text-amber-800 font-medium tracking-wide uppercase text-sm mb-4">Our Services</p>
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6">OUR<br />SERVICES</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            From complete interior design to custom furniture creation, we offer comprehensive services to transform your space into something extraordinary.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-stone-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-stone-900 mb-4">{service.title}</h3>
                  <p className="text-stone-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-stone-700">
                        <ArrowRight className="h-4 w-4 text-amber-900 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-amber-900 hover:bg-amber-800 w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">READY TO<br />START YOUR<br />PROJECT?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today for a free consultation</p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900">
            Get Free Consultation
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

export default Services;
