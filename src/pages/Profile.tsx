
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import { CreditCard, Package, History, Settings, Star } from "lucide-react";

const Profile = () => {
  const user = {
    name: "Максим Игроков",
    username: "maxgamer",
    email: "max@example.com",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    balance: 4750,
    sales: 28,
    rating: 4.7,
    reviews: 18,
    memberSince: "Март 2025"
  };

  const orders = [
    { id: "ORD-2354", game: "Dota 2", item: "Аккаунт 5500 MMR", price: 3200, status: "Завершен", date: "25 апр 2025" },
    { id: "ORD-2261", game: "World of Warcraft", item: "Буст до 70 уровня", price: 1800, status: "Завершен", date: "18 апр 2025" }
  ];

  const listings = [
    { id: "LST-9932", game: "CS:GO", title: "Аккаунт с ножом и перчатками", price: 7500, status: "Активен", views: 47 },
    { id: "LST-9814", game: "Valorant", title: "Буст до Immortal", price: 3500, status: "Активен", views: 31 },
    { id: "LST-9645", game: "League of Legends", title: "Аккаунт Gold II", price: 2000, status: "Продано", views: 62 }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Sidebar */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative">
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      className="h-24 w-24 rounded-full object-cover border-4 border-primary/20 mb-4" 
                    />
                    <div className="absolute bottom-3 right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-background"></div>
                  </div>
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-muted-foreground">@{user.username}</p>
                  
                  <div className="flex items-center mt-2 justify-center">
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500 mr-1" />
                    <span className="font-medium">{user.rating}</span>
                    <span className="text-muted-foreground text-sm ml-1">({user.reviews} отзывов)</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-secondary/50 rounded-lg p-3 text-center">
                    <p className="text-sm text-muted-foreground">Баланс</p>
                    <p className="text-lg font-semibold">{user.balance} ₽</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-3 text-center">
                    <p className="text-sm text-muted-foreground">Продаж</p>
                    <p className="text-lg font-semibold">{user.sales}</p>
                  </div>
                </div>
                
                <Button className="w-full mb-3">Вывести средства</Button>
                <Button variant="outline" className="w-full">Пополнить баланс</Button>
                
                <Separator className="my-6" />
                
                <div className="text-sm text-muted-foreground">
                  <p>На сервисе с {user.memberSince}</p>
                  <div className="mt-4 flex justify-between">
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">Выйти</Button>
                    <Button variant="ghost" size="sm">Помощь</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <Tabs defaultValue="listings" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="listings" className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  <span className="hidden sm:inline">Мои товары</span>
                </TabsTrigger>
                <TabsTrigger value="orders" className="flex items-center gap-2">
                  <History className="h-4 w-4" />
                  <span className="hidden sm:inline">История</span>
                </TabsTrigger>
                <TabsTrigger value="wallet" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  <span className="hidden sm:inline">Кошелёк</span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <span className="hidden sm:inline">Настройки</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="listings">
                <div className="mb-6 flex justify-between items-center">
                  <h3 className="text-xl font-bold">Мои объявления</h3>
                  <Button>Добавить товар</Button>
                </div>
                
                <div className="space-y-4">
                  {listings.map((listing) => (
                    <Card key={listing.id} className={listing.status === "Продано" ? "opacity-70" : ""}>
                      <CardContent className="p-4">
                        <div className="flex flex-col sm:flex-row justify-between">
                          <div className="mb-3 sm:mb-0">
                            <span className="text-xs text-muted-foreground block mb-1">{listing.game}</span>
                            <h4 className="font-medium">{listing.title}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                listing.status === "Активен" ? "bg-green-500/10 text-green-600" : 
                                "bg-blue-500/10 text-blue-600"
                              }`}>
                                {listing.status}
                              </span>
                              <span className="text-xs text-muted-foreground">{listing.views} просмотров</span>
                            </div>
                          </div>
                          <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between">
                            <span className="font-bold text-lg">{listing.price} ₽</span>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">Редактировать</Button>
                              {listing.status !== "Продано" && (
                                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                                  Снять
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="orders">
                <div className="mb-6">
                  <h3 className="text-xl font-bold">История заказов</h3>
                </div>
                
                <div className="space-y-4">
                  {orders.map((order) => (
                    <Card key={order.id}>
                      <CardContent className="p-4">
                        <div className="flex flex-col sm:flex-row justify-between">
                          <div className="mb-3 sm:mb-0">
                            <span className="text-xs text-muted-foreground block mb-1">{order.game}</span>
                            <h4 className="font-medium">{order.item}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full">
                                {order.status}
                              </span>
                              <span className="text-xs text-muted-foreground">{order.date}</span>
                            </div>
                          </div>
                          <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between">
                            <span className="font-bold text-lg">{order.price} ₽</span>
                            <Button variant="outline" size="sm">Детали</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="wallet">
                <div className="mb-6">
                  <h3 className="text-xl font-bold">Баланс и выплаты</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-2">Баланс аккаунта</h4>
                      <p className="text-3xl font-bold mb-4">{user.balance} ₽</p>
                      <Button className="w-full">Вывести средства</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-4">Пополнить баланс</h4>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2">
                          <Button variant="outline">500 ₽</Button>
                          <Button variant="outline">1000 ₽</Button>
                          <Button variant="outline">2000 ₽</Button>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="custom-amount">Другая сумма</Label>
                          <div className="flex gap-2">
                            <Input id="custom-amount" type="number" placeholder="1000" />
                            <Button>Пополнить</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-4">Способы выплат</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
                            <CreditCard className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">Банковская карта</p>
                            <p className="text-sm text-muted-foreground">**** 4582</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">Изменить</Button>
                      </div>
                      
                      <Button variant="outline" className="w-full">Добавить способ оплаты</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings">
                <div className="mb-6">
                  <h3 className="text-xl font-bold">Настройки профиля</h3>
                </div>
                
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-4">Личные данные</h4>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullname">Имя</Label>
                          <Input id="fullname" value={user.name} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="username">Никнейм</Label>
                          <Input id="username" value={user.username} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value={user.email} />
                      </div>
                      <Button>Сохранить изменения</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-4">Безопасность</h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Текущий пароль</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="new-password">Новый пароль</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Подтвердите пароль</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                      </div>
                      <Button>Изменить пароль</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
