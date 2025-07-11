import { useState } from "react";
import { ShoppingCart, Menu, X, Star, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(3); // Initialize with 3 items to show in cart

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  const featuredProducts = [
    {
      id: 1,
      name: "Modern Sofa Set",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Elegant Dining Table",
      price: 899,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&h=400&fit=crop",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "Luxury Armchair",
      price: 649,
      originalPrice: 849,
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=400&fit=crop",
      rating: 4.7,
      reviews: 156
    }
  ];

  const services = [
    {
      title: "Interior Design",
      description: "Complete interior design solutions for your home and office spaces.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=300&fit=crop"
    },
    {
      title: "Custom Furniture",
      description: "Bespoke furniture crafted to your exact specifications and style.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop"
    },
    {
      title: "Space Planning",
      description: "Optimize your space with our professional planning services.",
      image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400&h=300&fit=crop"
    }
  ];

  const portfolioItems = [
    {
      title: "Modern Living Room",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
    },
    {
      title: "Executive Office",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
    },
    {
      title: "Luxury Bedroom",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&h=300&fit=crop"
    },
    {
      title: "Restaurant Design",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
    },
    {
      title: "Cozy Study Room",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
    },
    {
      title: "Modern Kitchen",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-acid">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-amber-900 tracking-wide">LINORA</h1>
              <span className="ml-2 text-xs text-amber-700 font-light">INTERIOR STUDIO</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button className="text-amber-900 font-medium">Home</button>
              <button onClick={() => navigate('/services')} className="text-stone-700 hover:text-amber-900 transition-colors font-medium">Services</button>
              <button onClick={() => navigate('/portfolio')} className="text-stone-700 hover:text-amber-900 transition-colors font-medium">Portfolio</button>
              <button onClick={() => navigate('/about')} className="text-stone-700 hover:text-amber-900 transition-colors font-medium">About</button>
              <button onClick={() => navigate('/contact')} className="text-stone-700 hover:text-amber-900 transition-colors font-medium">Contact</button>
            </nav>

            <div className="flex items-center space-x-4">
              <button 
                className="relative p-2 text-stone-700 hover:text-amber-900 transition-colors"
                onClick={() => navigate('/cart')}
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-amber-900">
                    {cartItems}
                  </Badge>
                )}
              </button>
              
              <button 
                className="md:hidden p-2 text-stone-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <button className="block py-2 text-amber-900 font-medium w-full text-left">Home</button>
              <button onClick={() => navigate('/services')} className="block py-2 text-stone-700 hover:text-amber-900 w-full text-left">Services</button>
              <button onClick={() => navigate('/portfolio')} className="block py-2 text-stone-700 hover:text-amber-900 w-full text-left">Portfolio</button>
              <button onClick={() => navigate('/about')} className="block py-2 text-stone-700 hover:text-amber-900 w-full text-left">About</button>
              <button onClick={() => navigate('/contact')} className="block py-2 text-stone-700 hover:text-amber-900 w-full text-left">Contact</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-stone-100 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-amber-800 font-medium tracking-wide uppercase text-sm">Desktop Design</p>
                <h1 className="text-5xl md:text-7xl font-bold text-stone-900 leading-tight">
                  LINORA
                </h1>
                <p className="text-lg text-stone-600 max-w-md leading-relaxed">
                  Create beautiful, functional spaces with our premium furniture collection and expert interior design services.
                </p>
              </div>
              
              <div className="flex space-x-4">
                <Button size="lg" className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-3">
                  Shop Collection
                </Button>
                <Button variant="outline" size="lg" className="border-amber-900 text-amber-900 hover:bg-amber-50 px-8 py-3">
                  View Portfolio
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=500&fit=crop" 
                alt="Modern living room interior" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold text-stone-900">100+</p>
                <p className="text-stone-600 text-sm">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Featured Collection</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium furniture pieces designed to transform your space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-500">Sale</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm text-stone-600">{product.rating} ({product.reviews})</span>
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-amber-900">${product.price}</span>
                      <span className="text-sm text-stone-500 line-through ml-2">${product.originalPrice}</span>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={addToCart}
                      className="bg-amber-900 hover:bg-amber-800"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-800 font-medium tracking-wide uppercase text-sm mb-4">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">OUR<br />SERVICES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">{service.title}</h3>
                  <p className="text-stone-600 mb-4">{service.description}</p>
                  <Button variant="outline" className="border-amber-900 text-amber-900 hover:bg-amber-50">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-800 font-medium tracking-wide uppercase text-sm mb-4">About Company</p>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">ABOUT<br />COMPANY</h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                With over a decade of experience in interior design and furniture crafting, LINORA has established itself as a premier destination for luxury home and office furnishing. Our commitment to quality, innovation, and customer satisfaction drives everything we do.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-900">75+</p>
                  <p className="text-stone-600 text-sm">Design Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-900">25+</p>
                  <p className="text-stone-600 text-sm">Employees</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-900">100+</p>
                  <p className="text-stone-600 text-sm">Contractors</p>
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-800 font-medium tracking-wide uppercase text-sm mb-4">Our Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">OUR<br />PORTFOLIO</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{item.category}</p>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">CREATING<br />A COZY<br />INTERIOR</h2>
          <p className="text-xl mb-8 opacity-90">+1 (310) 456-7894</p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900">
            Get Started Today
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

export default Index;
