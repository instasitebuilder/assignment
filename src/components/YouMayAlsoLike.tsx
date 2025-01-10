import { useQuery } from "@tanstack/react-query";
import { Card } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface Coin {
  id: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
}

export const YouMayAlsoLike = () => {
  const { data: coins, isLoading } = useQuery({
    queryKey: ["trending-coins-detailed"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      );
      return response.json() as Promise<Coin[]>;
    },
  });

  if (isLoading) {
    return <div className="animate-pulse h-40 bg-muted rounded-lg" />;
  }

  return (
    <div className="bg-white rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {coins?.map((coin) => (
            <CarouselItem
              key={coin.id}
              className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Card className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img src={coin.image} alt={coin.symbol} className="w-6 h-6" />
                  <span className="text-sm font-medium uppercase">
                    {coin.symbol}
                  </span>
                  <span
                    className={`text-sm ${
                      coin.price_change_percentage_24h >= 0
                        ? "text-success"
                        : "text-error"
                    }`}
                  >
                    {coin.price_change_percentage_24h >= 0 ? "+" : ""}
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </div>
                <div className="text-lg font-bold">
                  ${coin.current_price.toLocaleString()}
                </div>
                <div className="h-16 mt-2">
                  {/* Placeholder for sparkline chart */}
                  <div className="w-full h-full bg-muted rounded" />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};