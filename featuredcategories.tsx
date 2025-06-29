import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      image: '/placeholder.svg',
      description: 'Latest gadgets and tech',
      itemCount: '2,450+ items',
      slug: 'electronics'
    },
    {
      id: 2,
      name: 'Fashion',
      image: '/placeholder.svg',
      description: 'Trendy clothing & accessories',
      itemCount: '3,200+ items',
      slug: 'clothing'
    },
    {
      id: 3,
      name: 'Home & Garden',
      image: '/placeholder.svg',
      description: 'Transform your living space',
      itemCount: '1,800+ items',
      slug: 'home-garden'
    },
    {
      id: 4,
      name: 'Sports & Fitness',
      image: '/placeholder.svg',
      description: 'Gear for active lifestyle',
      itemCount: '950+ items',
      slug: 'sports'
    },
    {
      id: 5,
      name: 'Beauty & Care',
      image: '/placeholder.svg',
      description: 'Premium beauty products',
      itemCount: '720+ items',
      slug: 'beauty'
    },
    {
      id: 6,
      name: 'Books & Media',
      image: '/placeholder.svg',
      description: 'Knowledge & entertainment',
      itemCount: '1,500+ items',
      slug: 'books'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-glow">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our carefully curated categories featuring the best products from trusted brands
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group"
            >
              <Card className="hover-lift gradient-bg glow-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-20 h-20 object-contain opacity-60 group-hover:opacity-80 transition-opacity filter brightness-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent group-hover:from-primary/5 transition-colors"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground mb-2">{category.description}</p>
                    <p className="text-sm text-accent font-medium">{category.itemCount}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
