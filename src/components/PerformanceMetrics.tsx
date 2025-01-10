interface PricePoint {
  label: string;
  value: string;
}

export const PerformanceMetrics = () => {
  const todayRange: PricePoint[] = [
    { label: "Today's Low", value: "46,930.22" },
    { label: "Current", value: "$48,637.83" },
    { label: "Today's High", value: "49,343.83" },
  ];

  const weekRange: PricePoint[] = [
    { label: "52W Low", value: "16,930.22" },
    { label: "Current", value: "$48,637.83" },
    { label: "52W High", value: "49,743.83" },
  ];

  const fundamentals = [
    { label: "Bitcoin Price", value: "$16,815.46" },
    { label: "Market Cap", value: "$323,507,290,047" },
    { label: "24h Low / 24h High", value: "$16,382.07 / $16,874.12" },
    { label: "Market Cap Dominance", value: "38.343%" },
    { label: "7d Low / 7d High", value: "$16,382.07 / $16,874.12" },
    { label: "Volume / Market Cap", value: "0.0718" },
    { label: "Trading Volume", value: "$23,249,202,782" },
    { label: "All-Time High", value: "$69,044.77", change: "-75.6%", date: "Nov 10, 2021 (about 1 year)" },
    { label: "Market Cap Rank", value: "#1" },
    { label: "All-Time Low", value: "$67.81", change: "24729.1%", date: "Jul 06, 2013 (over 9 years)" },
  ];

  const renderPriceRange = (points: PricePoint[]) => (
    <div className="relative mt-6">
      <div className="flex justify-between mb-2">
        {points.map((point) => (
          <span key={point.label} className="text-sm text-secondary">
            {point.label}
            <br />
            <span className="text-foreground font-medium">{point.value}</span>
          </span>
        ))}
      </div>
      <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-secondary rounded-full" />
    </div>
  );

  return (
    <div className="bg-white rounded-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold">Performance</h2>
      {renderPriceRange(todayRange)}
      {renderPriceRange(weekRange)}
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          Fundamentals
          <svg
            className="w-5 h-5 text-secondary"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            <path
              d="M12 16V12M12 8H12.01"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {fundamentals.map((item) => (
            <div
              key={item.label}
              className="flex justify-between py-4 border-b border-muted last:border-b-0"
            >
              <span className="text-secondary">{item.label}</span>
              <div className="text-right">
                <span className="font-medium">{item.value}</span>
                {item.change && (
                  <>
                    <span
                      className={`ml-2 ${
                        item.change.startsWith("-")
                          ? "text-error"
                          : "text-success"
                      }`}
                    >
                      {item.change}
                    </span>
                    <br />
                    <span className="text-sm text-secondary">{item.date}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};