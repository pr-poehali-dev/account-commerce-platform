
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import CategoryCard from "@/components/CategoryCard";
import PopularSellers from "@/components/PopularSellers";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Coins, Clock, CreditCard } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Categories Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Выбери категорию</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard 
            title="Игровые аккаунты" 
            description="Купи готовый аккаунт с прокачанным персонажем и редкими предметами"
            icon="🎮"
            href="/accounts"
            color="from-blue-500 to-purple-600"
          />
          <CategoryCard 
            title="Внутриигровая валюта" 
            description="Пополни баланс в любимой игре по выгодному курсу"
            icon="💰"
            href="/currency"
            color="from-amber-500 to-orange-600"
          />
          <CategoryCard 
            title="Буст и прокачка" 
            description="Подними ранг, уровень или рейтинг с помощью профессионалов"
            icon="📈"
            href="/boosting"
            color="from-emerald-500 to-teal-600"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Почему L0xmach-Market?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Безопасные сделки</h3>
              <p className="text-muted-foreground">Деньги продавец получает только после подтверждения покупателем</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Coins className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Низкая комиссия</h3>
              <p className="text-muted-foreground">Всего 5% с продажи — ниже, чем у конкурентов</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Быстрые выплаты</h3>
              <p className="text-muted-foreground">Деньги поступают на карту в течение 10 минут</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Любые способы оплаты</h3>
              <p className="text-muted-foreground">Карты, электронные кошельки и криптовалюты</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Sellers */}
      <PopularSellers />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* CTA Section */}
      <section className="container py-16">
        <div className="bg-accent rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Готов начать продавать?</h2>
            <p className="text-muted-foreground max-w-md">Регистрируйся, добавляй товары и получай деньги на карту. Более 50,000 игроков уже с нами!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">Создать аккаунт</Button>
            <Button variant="outline" size="lg">Узнать больше</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
                L0xmach-Market
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Безопасная платформа для покупки и продажи игровых товаров и услуг.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Разделы</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Игровые аккаунты</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Внутриигровая валюта</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Буст и прокачка</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Топ продавцов</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Информация</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">О нас</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Правила сервиса</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Политика конфиденциальности</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Центр поддержки</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Как начать продавать</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Безопасные сделки</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2025 L0xmach-Market. Все права защищены.</p>
            <p className="text-sm text-muted-foreground mt-4 md:mt-0">
              Возрастное ограничение: 16+
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
