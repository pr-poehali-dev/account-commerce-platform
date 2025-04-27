
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Upload, Coins, Info, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const games = [
  { id: "dota2", name: "Dota 2" },
  { id: "csgo", name: "Counter-Strike 2" },
  { id: "wow", name: "World of Warcraft" },
  { id: "lol", name: "League of Legends" },
  { id: "valorant", name: "Valorant" },
  { id: "fortnite", name: "Fortnite" },
  { id: "apex", name: "Apex Legends" },
  { id: "pubg", name: "PUBG" },
];

const accountCategories = [
  { id: "rank", name: "Высокий ранг" },
  { id: "skins", name: "Редкие скины" },
  { id: "items", name: "Ценные предметы" },
  { id: "level", name: "Высокий уровень" },
  { id: "achievement", name: "Достижения" },
];

const boostingCategories = [
  { id: "rank", name: "Буст ранга" },
  { id: "mmr", name: "Буст MMR" },
  { id: "level", name: "Прокачка уровня" },
  { id: "quest", name: "Выполнение квестов" },
  { id: "achievement", name: "Получение достижений" },
];

const CreateListing = () => {
  const navigate = useNavigate();
  const [listingType, setListingType] = useState<"account" | "boosting" | "currency">("account");
  const [game, setGame] = useState("");
  const [priceType, setPriceType] = useState<"fixed" | "negotiable">("fixed");
  const [images, setImages] = useState<string[]>([]);
  const [formError, setFormError] = useState("");
  
  // Add sample image when the upload button is clicked (in real app would be handled by file upload)
  const handleImageUpload = () => {
    if (images.length < 5) {
      const sampleImages = [
        "https://images.unsplash.com/photo-1556438064-2d7638de8c8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      ];
      setImages([...images, sampleImages[images.length]]);
    }
  };
  
  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!game) {
      setFormError("Пожалуйста, выберите игру");
      return;
    }
    
    if (images.length === 0) {
      setFormError("Добавьте хотя бы одно изображение");
      return;
    }
    
    // Normally would submit to backend
    // For this demo, we'll just navigate back to profile
    navigate("/profile");
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Создание объявления</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Тип объявления</h3>
                  <Tabs 
                    defaultValue="account" 
                    className="w-full" 
                    onValueChange={(val) => setListingType(val as any)}
                  >
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="account">Аккаунт</TabsTrigger>
                      <TabsTrigger value="boosting">Буст / Прокачка</TabsTrigger>
                      <TabsTrigger value="currency">Игровая валюта</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Информация об объявлении</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="game">Игра <span className="text-red-500">*</span></Label>
                      <Select value={game} onValueChange={setGame}>
                        <SelectTrigger id="game">
                          <SelectValue placeholder="Выберите игру" />
                        </SelectTrigger>
                        <SelectContent>
                          {games.map((game) => (
                            <SelectItem key={game.id} value={game.id}>{game.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {listingType === "account" && (
                      <div className="space-y-2">
                        <Label htmlFor="category">Категория</Label>
                        <Select>
                          <SelectTrigger id="category">
                            <SelectValue placeholder="Выберите категорию" />
                          </SelectTrigger>
                          <SelectContent>
                            {accountCategories.map((category) => (
                              <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    
                    {listingType === "boosting" && (
                      <div className="space-y-2">
                        <Label htmlFor="boost-category">Тип буста</Label>
                        <Select>
                          <SelectTrigger id="boost-category">
                            <SelectValue placeholder="Выберите тип буста" />
                          </SelectTrigger>
                          <SelectContent>
                            {boostingCategories.map((category) => (
                              <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <Label htmlFor="title">Заголовок <span className="text-red-500">*</span></Label>
                      <Input id="title" placeholder="Например: Аккаунт Dota 2 с высоким MMR и редкими сетами" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Описание <span className="text-red-500">*</span></Label>
                      <Textarea 
                        id="description" 
                        placeholder="Подробно опишите ваш товар или услугу. Укажите все важные детали, которые могут заинтересовать покупателя." 
                        rows={5}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Изображения <span className="text-red-500">*</span></h3>
                  <div className="mb-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                      {images.map((img, index) => (
                        <div key={index} className="relative group">
                          <img 
                            src={img} 
                            alt={`Изображение ${index + 1}`} 
                            className="w-full h-32 object-cover rounded-md"
                          />
                          <button 
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                      
                      {images.length < 5 && (
                        <button
                          type="button"
                          onClick={handleImageUpload}
                          className="w-full h-32 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                        >
                          <Upload className="h-6 w-6 mb-2" />
                          <span className="text-sm">Загрузить</span>
                        </button>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Загрузите до 5 изображений. Первое изображение будет обложкой объявления.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Цена</h3>
                  <div className="space-y-4">
                    <RadioGroup 
                      defaultValue="fixed" 
                      onValueChange={(val) => setPriceType(val as "fixed" | "negotiable")}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fixed" id="fixed-price" />
                        <Label htmlFor="fixed-price">Фиксированная цена</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="negotiable" id="negotiable-price" />
                        <Label htmlFor="negotiable-price">Договорная цена</Label>
                      </div>
                    </RadioGroup>
                    
                    {priceType === "fixed" && (
                      <div className="space-y-2">
                        <Label htmlFor="price">Цена (₽) <span className="text-red-500">*</span></Label>
                        <div className="flex items-center gap-2">
                          <Input id="price" type="number" min="1" placeholder="1000" />
                          <div className="flex items-center text-muted-foreground text-sm whitespace-nowrap">
                            <Coins className="h-4 w-4 mr-1" />
                            <span>Комиссия: 5%</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-2">
                      <Switch id="instant-delivery" />
                      <Label htmlFor="instant-delivery">Мгновенная доставка</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Дополнительная информация</h3>
                  
                  {listingType === "account" && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email от аккаунта</Label>
                        <Input id="email" placeholder="Будет скрыт до покупки" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="email-access" />
                        <Label htmlFor="email-access">Доступ к почте входит в стоимость</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="first-owner" />
                        <Label htmlFor="first-owner">Я первый владелец</Label>
                      </div>
                    </div>
                  )}
                  
                  {listingType === "boosting" && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="duration">Примерный срок выполнения (дни)</Label>
                        <Input id="duration" type="number" min="1" placeholder="3" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="play-with-buyer" />
                        <Label htmlFor="play-with-buyer">Возможна игра вместе с покупателем</Label>
                      </div>
                    </div>
                  )}
                  
                  {listingType === "currency" && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="amount">Количество валюты</Label>
                        <Input id="amount" placeholder="1000 золота" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="delivery-method">Способ передачи</Label>
                        <Textarea 
                          id="delivery-method" 
                          placeholder="Опишите, как вы передадите валюту покупателю"
                          rows={2} 
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              {formError && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{formError}</AlertDescription>
                </Alert>
              )}
              
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Размещая объявление, вы соглашаетесь с правилами сервиса и обязуетесь предоставить товар/услугу в заявленном качестве.
                </AlertDescription>
              </Alert>
              
              <div className="flex justify-end space-x-4">
                <Button variant="outline" type="button" onClick={() => navigate(-1)}>
                  Отмена
                </Button>
                <Button type="submit">
                  Опубликовать
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;
