import { useQuery } from "@tanstack/react-query";
import { Card } from "./ui/card";
import { Area, AreaChart, YAxis } from "recharts";

interface Coin {
  id: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
}

// Generate dummy sparkline data
const generateSparklineData = (isPositive: boolean) => {
  return Array.from({ length: 24 }, (_, i) => ({
    value: isPositive 
      ? 100 + Math.random() * 20 + i 
      : 100 - Math.random() * 20 - i,
  }));
};

export const YouMayAlsoLike = () => {
  const { data: coins, isLoading } = useQuery({
    queryKey: ["trending-coins-detailed"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=true"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {coins?.map((coin) => {
          const sparklineData = generateSparklineData(coin.price_change_percentage_24h >= 0);
          return (
            <Card key={coin.id} className="p-4">
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
              <div className="h-[60px] w-full mt-2">
                <AreaChart
                  width={160}
                  height={60}
                  data={sparklineData}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id={`gradient-${coin.id}`} x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor={coin.price_change_percentage_24h >= 0 ? "#14B079" : "#DC2626"}
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="95%"
                        stopColor={coin.price_change_percentage_24h >= 0 ? "#14B079" : "#DC2626"}
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <YAxis hide domain={['dataMin', 'dataMax']} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={coin.price_change_percentage_24h >= 0 ? "#14B079" : "#DC2626"}
                    fillOpacity={1}
                    fill={`url(#gradient-${coin.id})`}
                    strokeWidth={1.5}
                  />
                </AreaChart>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};