import { useQuery } from "@tanstack/react-query";

interface TrendingCoin {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    thumb: string;
    data: {
      price_change_percentage_24h: {
        usd: number;
      };
    };
  };
}

interface TrendingResponse {
  coins: TrendingCoin[];
}

export const TrendingCoins = () => {
  const { data, isLoading } = useQuery<TrendingResponse>({
    queryKey: ["trending-coins"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      return response.json();
    },
  });

  if (isLoading) {
    return <div className="animate-pulse h-40 bg-muted rounded-lg" />;
  }

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {data?.coins.slice(0, 3).map((coin) => (
          <div key={coin.item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={coin.item.thumb}
                alt={coin.item.name}
                className="w-6 h-6"
              />
              <span className="font-medium">
                {coin.item.name} ({coin.item.symbol.toUpperCase()})
              </span>
            </div>
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded ${
                coin.item.data.price_change_percentage_24h.usd > 0
                  ? "bg-green-100 text-success"
                  : "bg-red-100 text-error"
              }`}
            >
              <span className="text-sm font-medium">
                {coin.item.data.price_change_percentage_24h.usd > 0 ? "▲" : "▼"}{" "}
                {Math.abs(
                  coin.item.data.price_change_percentage_24h.usd
                ).toFixed(2)}
                %
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};