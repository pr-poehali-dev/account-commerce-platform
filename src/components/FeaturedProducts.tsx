
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Аккаунт World of Warcraft - 60 уровень",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    price: 2499,
    rating: 4.8,
    reviews: 124,
    category: "accounts",
    seller: "GamerPro",
    sellerAvatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    badges: ["Топ продаж"],
  },
  {
    id: 2,
    title: "Буст до Алмаза в League of Legends",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    price: 3999,
    rating: 4.9,
    reviews: 87,
    category: "boosting",
    seller: "EliteBooster",
    sellerAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    badges: ["Гарантия"],
  },
  {
    id: 3,
    title: "1000 Золота в GTA Online",
    image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    price: 799,
    rating: 4.7,
    reviews: 203,
    category: "currency",
    seller: "GameLegend",
    sellerAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    badges: ["Быстрая доставка"],
  },
  {
    id: 4,
    title: "Набор редких скинов CS:GO",
    image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    price: 5999,
    rating: 4.6,
    reviews: 56,
    category: "items",
    seller: "GamerPro",
    sellerAvatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    badges: ["Редкий товар"],
  },
  {
    id: 5,
    title: "Аккаунт Fortnite с редкими скинами",
    image: "https://images.unsplash.com/photo-1589241062272-935b0e979746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    price: 1299,
    rating: 4.5,
    reviews: 78,
    category: "accounts",
    seller: "EliteBooster",
    sellerAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    badges: [],
  },
  {
    id: 6,
    title: "Прокачка персонажа в Dota 2",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    price: 2499,
    rating: 4.7,
    reviews: 112,
    category: "boosting",
    seller: "GameLegend",
    sellerAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    badges: ["Популярный"],
  },
];

const FeaturedProducts = () => {
  return (
    <section className="container py-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Популярные предложения</h2>
        <Button variant="link" className="mt-2 md:mt-0">
          Показать все
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8 flex flex-wrap justify-start">
          <TabsTrigger value="all">Все</TabsTrigger>
          <TabsTrigger value="accounts">Аккаунты</TabsTrigger>
          <TabsTrigger value="boosting">Буст</TabsTrigger>
          <TabsTrigger value="currency">Валюта</TabsTrigger>
          <TabsTrigger value="items">Предметы</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </TabsContent>

        <TabsContent value="accounts" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products
            .filter((product) => product.category === "accounts")
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </TabsContent>

        <TabsContent value="boosting" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products
            .filter((product) => product.category === "boosting")
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </TabsContent>

        <TabsContent value="currency" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products
            .filter((product) => product.category === "currency")
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </TabsContent>

        <TabsContent value="items" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products
            .filter((product) => product.category === "items")
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </TabsContent>
      </Tabs>
    </section>
  );
};

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    image: string;
    price: number;
    rating: number;
    reviews: number;
    category: string;
    seller: string;
    sellerAvatar: string;
    badges: string[];
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {product.badges.map((badge, index) => (
            <Badge key={index} variant="secondary" className="bg-primary/90 text-primary-foreground">
              {badge}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
        
        <div className="flex items-center mb-3">
          <img
            src={product.sellerAvatar}
            alt={product.seller}
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="text-sm text-muted-foreground">{product.seller}</span>
        </div>
        
        <div className="flex items-center gap-1 mb-4">
          <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
          <span className="font-medium text-sm">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">{product.price} ₽</div>
          <Button size="sm">Купить</Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
