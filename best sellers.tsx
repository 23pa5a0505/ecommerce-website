import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';

const BestSellers = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299.99,
      originalPrice: 399.99,
      image: '/placeholder.svg',
      rating: 4.8,
      reviews: 1250,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 199.99,
      originalPrice: 249.99,
      image: '/placeholder.svg',
      rating: 4.6,
      reviews: 890,
      badge: 'Popular'
    },
    {
      id: 3,
      name: 'Organic Cotton T-Shirt',
      price: 29.99,
      originalPrice: 39.99,
      image: '/placeholder.svg',
      rating: 4.7,
      reviews: 445,
      badge: 'Eco-Friendly'
    },
    {
      id: 4,
      name: 'Professional Camera Lens',
      price: 549.99,
      originalPrice: 699.99,
      image: '/placeholder.svg',
      rating: 4.9,
      reviews: 203,
      badge: 'Pro Choice'
    },
    {
      id: 5,
      name: 'Luxury Skincare Set',
      price: 89.99,
      originalPrice: 120.00,
      image: '/placeholder.svg',
      rating: 4.5,
      reviews: 667,
      badge: 'Trending'
    },
    {
      id: 6,
      name: 'Smart Home Hub',
      price: 149.99,
      originalPrice: 199.99,
      image: '/placeholder.svg',
      rating: 4.4,
      reviews: 324,
      badge: 'New'
    }
  ];

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Best Sellers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover what everyone's talking about. These customer favorites are flying off the shelves
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover-lift border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                      {product.badge}
                    </span>
                  </div>

                  {/* Wishlist button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFavorite(product.id);
                    }}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        favorites.includes(product.id)
                          ? 'text-red-500 fill-red-500'
                          : 'text-gray-600'
                      }`}
                    />
                  </button>

                  {/* Quick add overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white text-primary hover:bg-gray-100">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Quick Add
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <Link to={`/product/${product.id}`} className="group">
                    <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {'★'.repeat(Math.floor(product.rating))}
                        {'☆'.repeat(5 - Math.floor(product.rating))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-primary">
                        ${product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-accent font-medium">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="px-8">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
