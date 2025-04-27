
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-accent to-background py-20">
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            L0xmach-Market -
            <span className="block text-primary">игровой маркетплейс</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Покупай, продавай и бустай аккаунты без рисков и комиссий. Мгновенные выплаты на карту и защита от скама.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Search className="h-4 w-4" /> Найти товар
            </Button>
            <Button size="lg" variant="outline">
              Начать продавать
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-primary/10 p-1">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Защита сделок</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-primary/10 p-1">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Мгновенные выплаты</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-primary/10 p-1">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Низкая комиссия 5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
