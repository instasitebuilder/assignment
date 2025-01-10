import { useQuery } from "@tanstack/react-query";

interface BitcoinPriceData {
  bitcoin: {
    inr: number;
    inr_24h_change: number;
    usd: number;
    usd_24h_change: number;
  };
}

export const BitcoinPrice = () => {
  const { data, isLoading } = useQuery<BitcoinPriceData>({
    queryKey: ["bitcoin-price"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24h_change=true"
      );
      return response.json();
    },
    refetchInterval: 30000,
  });

  if (isLoading) {
    return <div className="animate-pulse h-20 bg-muted rounded-lg" />;
  }

  const priceChange = data?.bitcoin.usd_24h_change ?? 0;
  const isPositive = priceChange > 0;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <img src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png" alt="Bitcoin" className="w-9 h-9" />
        <h1 className="text-2xl font-bold">Bitcoin</h1>
        <span className="text-secondary font-medium">BTC</span>
        <span className="px-3 py-1.5 bg-muted rounded-lg text-sm font-medium">Rank #1</span>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">${data?.bitcoin.usd.toLocaleString()}</span>
          <div className={`flex items-center gap-1 px-2 py-1 rounded ${isPositive ? 'bg-green-100 text-success' : 'bg-red-100 text-error'}`}>
            <span className="text-sm font-medium">
              {isPositive ? '▲' : '▼'} {Math.abs(priceChange).toFixed(2)}%
            </span>
            <span className="text-sm text-secondary">(24H)</span>
          </div>
        </div>
        <div className="text-lg text-secondary">
          ₹ {data?.bitcoin.inr.toLocaleString()}
        </div>
      </div>
    </div>
  );
};