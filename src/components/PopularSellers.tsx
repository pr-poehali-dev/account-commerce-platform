
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const sellers = [
  {
    id: 1,
    name: "GamerPro",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    rating: 4.9,
    reviews: 842,
    sales: 1453,
    categories: ["Аккаунты", "Валюта"],
  },
  {
    id: 2, 
    name: "EliteBooster",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    rating: 4.8,
    reviews: 631,
    sales: 1087,
    categories: ["Буст", "Прокачка"],
  },
  {
    id: 3,
    name: "GameLegend",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    rating: 4.7,
    reviews: 495,
    sales: 872,
    categories: ["Аккаунты", "Предметы"],
  },
];

const PopularSellers = () => {
  return (
    <section className="container py-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">Топ продавцов</h2>
        <Button variant="outline" className="mt-4 md:mt-0">
          Смотреть всех
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sellers.map((seller) => (
          <div key={seller.id} className="bg-card rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={seller.avatar}
                  alt={seller.name}
                  className="h-16 w-16 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h3 className="text-xl font-semibold">{seller.name}</h3>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-500" />
                    <span className="font-medium">{seller.rating}</span>
                    <span className="text-muted-foreground text-sm">({seller.reviews} отзывов)</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-secondary rounded-lg p-3 text-center">
                  <p className="text-sm text-muted-foreground">Продаж</p>
                  <p className="text-lg font-semibold">{seller.sales}</p>
                </div>
                <div className="bg-secondary rounded-lg p-3 text-center">
                  <p className="text-sm text-muted-foreground">Категории</p>
                  <p className="text-sm font-medium">{seller.categories.join(", ")}</p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">Посмотреть товары</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSellers;
