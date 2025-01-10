import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { BitcoinPrice } from "@/components/BitcoinPrice";
import { TradingViewChart } from "@/components/TradingViewChart";
import { TrendingCoins } from "@/components/TrendingCoins";
import { GetStarted } from "@/components/GetStarted";
import { PerformanceMetrics } from "@/components/PerformanceMetrics";
import { Sentiment } from "@/components/Sentiment";
import { AboutBitcoin } from "@/components/AboutBitcoin";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#EFF2F5]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg p-6">
              <BitcoinPrice />
            </div>
            <TradingViewChart />
            <PerformanceMetrics />
            <Sentiment />
            <AboutBitcoin />
          </div>
          <div className="space-y-6">
            <GetStarted />
            <TrendingCoins />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;