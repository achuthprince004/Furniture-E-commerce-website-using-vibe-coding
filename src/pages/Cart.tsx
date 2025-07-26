
import { useState, useEffect } from "react";
import { Minus, Plus, X, ArrowLeft, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  category: string;
}

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      return JSON.parse(savedCart);
    }
    return [
      {
        id: 1,
        name: "Modern Sofa Set",
        price: 1299,
        originalPrice: 1599,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
        quantity: 1,
        category: "Living Room"
      },
      {
        id: 2,
        name: "Elegant Dining Table",
        price: 899,
        originalPrice: 1199,
        image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=300&fit=crop",
        quantity: 1,
        category: "Dining Room"
      },
      {
        id: 3,
        name: "Luxury Armchair",
        price: 649,
        originalPrice: 849,
        image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=300&fit=crop",
        quantity: 2,
        category: "Living Room"
      }
    ];
  });

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => {
      const newItems = items.filter(item => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(newItems));
      return newItems;
    });
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 49;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 font-acid">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center">
            <ShoppingBag className="mx-auto h-24 w-24 text-stone-300 mb-6" />
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Your cart is empty</h2>
            <p className="text-stone-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-3"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 font-acid">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="mr-4 text-stone-700 hover:text-amber-900"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Shop
              </Button>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-amber-900 tracking-wide">LINORA</h1>
                <span className="ml-2 text-xs text-amber-700 font-light">INTERIOR STUDIO</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-stone-900 mb-2">Shopping Cart</h1>
          <p className="text-stone-600">Review your items and proceed to checkout</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-48 h-48 sm:h-32 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-sm text-stone-500 mb-1">{item.category}</p>
                          <h3 className="text-lg font-semibold text-stone-900">{item.name}</h3>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-stone-400 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center border border-stone-200 rounded-lg">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8 p-0 hover:bg-stone-100"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-12 text-center text-sm font-medium">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 p-0 hover:bg-stone-100"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center space-x-2">
                            <span className="text-xl font-bold text-amber-900">
                              ${(item.price * item.quantity).toLocaleString()}
                            </span>
                            {item.originalPrice && (
                              <span className="text-sm text-stone-500 line-through">
                                ${(item.originalPrice * item.quantity).toLocaleString()}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-stone-500">
                            ${item.price.toLocaleString()} each
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-stone-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Shipping</span>
                    <span>${shipping}</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Tax</span>
                    <span>${tax}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold text-stone-900">
                      <span>Total</span>
                      <span>${total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-amber-900 hover:bg-amber-800 text-white py-3 text-lg font-semibold">
                    Proceed to Checkout
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-amber-900 text-amber-900 hover:bg-amber-50"
                    onClick={() => navigate('/')}
                  >
                    Continue Shopping
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-center space-x-2 text-sm text-stone-500">
                    <span>🔒</span>
                    <span>Secure checkout guaranteed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
