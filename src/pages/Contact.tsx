
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

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
              <button onClick={() => navigate('/about')} className="text-stone-700 hover:text-amber-900 transition-colors font-medium">About</button>
              <button className="text-amber-900 font-medium">Contact</button>
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
          <p className="text-amber-800 font-medium tracking-wide uppercase text-sm mb-4">Contact Us</p>
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6">GET IN<br />TOUCH</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Ready to transform your space? We'd love to hear about your project and discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-amber-900 focus:border-amber-900 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-amber-900 focus:border-amber-900 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-amber-900 focus:border-amber-900 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-amber-900 focus:border-amber-900 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-amber-900 focus:border-amber-900 transition-colors">
                    <option>Select a service</option>
                    <option>Interior Design</option>
                    <option>Custom Furniture</option>
                    <option>Space Planning</option>
                    <option>Consultation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-amber-900 focus:border-amber-900 transition-colors"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-amber-900 hover:bg-amber-800 py-3 text-lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-stone-900 mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="bg-amber-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-amber-900" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-900 mb-1">Phone</h3>
                        <p className="text-stone-600">+1 (310) 456-7894</p>
                        <p className="text-stone-600">+1 (310) 456-7895</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="bg-amber-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-amber-900" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-900 mb-1">Email</h3>
                        <p className="text-stone-600">hello@linora.com</p>
                        <p className="text-stone-600">info@linora.com</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="bg-amber-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-amber-900" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-900 mb-1">Address</h3>
                        <p className="text-stone-600">123 Design Street<br />Los Angeles, CA 90210<br />United States</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="bg-amber-100 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-amber-900" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-900 mb-1">Business Hours</h3>
                        <p className="text-stone-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-stone-600">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-stone-600">Sunday: Closed</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Visit Our Studio</h2>
            <p className="text-stone-600">Come see our work in person and discuss your project with our team</p>
          </div>
          
          <div className="bg-stone-300 h-96 rounded-2xl flex items-center justify-center">
            <p className="text-stone-600 text-lg">Interactive Map Placeholder</p>
          </div>
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

export default Contact;
