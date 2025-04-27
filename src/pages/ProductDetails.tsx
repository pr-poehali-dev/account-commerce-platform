
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  ShieldCheck, 
  Star, 
  Clock, 
  MessageCircle, 
  Share2, 
  Heart, 
  ShoppingCart, 
  AlertTriangle, 
  ThumbsUp, 
  ThumbsDown
} from "lucide-react";

// Mock data for product details
const product = {
  id: "prod-12345",
  title: "Аккаунт Dota 2 | 6400 MMR | Редкие сеты | Эгиды",
  price: 8500,
  game: "Dota 2",
  category: "Аккаунты",
  description: `
<p>Продаю аккаунт Dota 2 с высоким рейтингом MMR и редкими сетами.</p>
<p><strong>Основная информация:</strong></p>
<ul>
  <li>MMR: 6400 (Immortal)</li>
  <li>Уровень аккаунта: 175</li>
  <li>Поведение: 10,000</li>
  <li>Часов в игре: более 7,500</li>
  <li>Эгиды: TI8, TI9, TI10</li>
</ul>
<p><strong>Редкие предметы:</strong></p>
<ul>
  <li>Аркана на PA, CM, Pudge, Rubick, Ogre</li>
  <li>Persona на AM, Pudge, Invoker</li>
  <li>Множество иммортал предметов</li>
  <li>Ультраредкие шмотки с TI8, TI9, TI10</li>
</ul>
<p><strong>Бонусы:</strong></p>
<ul>
  <li>Dota Plus активирован на 6 месяцев</li>
  <li>Доступ к почте включен в стоимость</li>
  <li>Первый владелец аккаунта</li>
</ul>
  `,
  images: [
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  ],
  seller: {
    id: "seller-987",
    name: "GamerPro",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    rating: 4.9,
    reviews: 842,
    sales: 1453,
    memberSince: "Апрель 2024",
    online: true,
  },
  reviews: [
    {
      id: "rev-1",
      user: "Киберспортсмен",
      rating: 5,
      comment: "Аккаунт полностью соответствует описанию! Очень доволен покупкой, продавец моментально передал все данные.",
      date: "14 апр 2025",
      helpful: 12,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    },
    {
      id: "rev-2",
      user: "MMRHunter",
      rating: 5,
      comment: "Супер аккаунт! Много крутых сетов, MMR реально 6400, как и в описании. Спасибо продавцу!",
      date: "8 апр 2025",
      helpful: 8,
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    },
    {
      id: "rev-3",
      user: "Dotaплеер",
      rating: 4,
      comment: "Хороший аккаунт, но потребовалось время для передачи. Всё остальное отлично.",
      date: "1 апр 2025",
      helpful: 3,
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    },
  ],
};

const ProductDetails = () => {
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column: Images and seller info */}
          <div className="w-full lg:w-7/12 space-y-6">
            {/* Main image */}
            <div className="overflow-hidden rounded-xl bg-black/5">
              <img 
                src={product.images[activeImageIndex]} 
                alt={product.title}
                className="w-full object-cover"
                style={{ maxHeight: "500px" }}
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`rounded-lg overflow-hidden border-2 ${
                    index === activeImageIndex ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-20 h-20 object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Seller info card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16 border-2 border-primary/20">
                    <AvatarImage src={product.seller.avatar} alt={product.seller.name} />
                    <AvatarFallback>{product.seller.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold">{product.seller.name}</h3>
                      <div className={`w-2 h-2 rounded-full ${product.seller.online ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="h-4 w-4 fill-amber-500" />
                      <span className="font-medium">{product.seller.rating}</span>
                      <span className="text-muted-foreground text-sm">({product.seller.reviews} отзывов)</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Продаж: {product.seller.sales} • На сервисе с {product.seller.memberSince}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Написать
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Все товары продавца
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="description">
                  <TabsList className="w-full">
                    <TabsTrigger value="description" className="flex-1">Описание</TabsTrigger>
                    <TabsTrigger value="reviews" className="flex-1">Отзывы ({product.reviews.length})</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="mt-4">
                    <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: product.description }} />
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="mt-4">
                    <div className="space-y-6">
                      {product.reviews.map((review) => (
                        <div key={review.id} className="pb-6 border-b last:border-b-0">
                          <div className="flex items-start gap-4">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={review.avatar} alt={review.user} />
                              <AvatarFallback>{review.user.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-medium">{review.user}</span>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
                              </div>
                              <div className="flex text-amber-500 mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < review.rating ? "fill-amber-500" : ""}`} 
                                  />
                                ))}
                              </div>
                              <p className="text-sm mb-3">{review.comment}</p>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <button className="flex items-center mr-3 hover:text-foreground">
                                  <ThumbsUp className="h-4 w-4 mr-1" />
                                  <span>{review.helpful}</span>
                                </button>
                                <button className="flex items-center hover:text-foreground">
                                  <ThumbsDown className="h-4 w-4 mr-1" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          {/* Right column: Product details and purchase options */}
          <div className="w-full lg:w-5/12 space-y-6">
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs px-2 py-0.5">
                      {product.game}
                    </Badge>
                    <Badge variant="outline" className="text-xs px-2 py-0.5">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-bold">{product.price} ₽</div>
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={isFavorite ? "text-red-500 hover:text-red-600" : ""}
                      >
                        <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500" : ""}`} />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Share2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Мгновенная доставка</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <ShieldCheck className="h-4 w-4 mr-1" />
                      <span>Гарантия</span>
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Товар</span>
                      <span className="font-medium">{product.price} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Комиссия сервиса</span>
                      <span className="font-medium">0 ₽</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="font-medium">Итого к оплате</span>
                      <span className="font-bold">{product.price} ₽</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Купить сейчас
                    </Button>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                          Задать вопрос продавцу
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Сообщение продавцу</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={product.seller.avatar} />
                              <AvatarFallback>{product.seller.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{product.seller.name}</p>
                              <p className="text-sm text-muted-foreground">
                                Обычно отвечает в течение 10 минут
                              </p>
                            </div>
                          </div>
                          <textarea
                            className="w-full min-h-[120px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            placeholder="Введите ваше сообщение..."
                          ></textarea>
                          <Button className="w-full">Отправить</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-yellow-800 mb-1">Безопасная сделка</p>
                      <p className="text-yellow-700">
                        Оплата поступит продавцу только после вашего подтверждения получения товара. В случае проблем вы сможете открыть спор.
                      </p>
                    </div>
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

export default ProductDetails;
