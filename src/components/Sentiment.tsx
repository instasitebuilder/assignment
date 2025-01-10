import { Info, Newspaper, TrendingUp } from "lucide-react";

export const Sentiment = () => {
  return (
    <div className="bg-white rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">Sentiment</h2>
      
      {/* Key Events Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg text-gray-700 font-semibold">Key Events</h3>
          <Info className="w-4 h-4 text-gray-500" />
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4">
          <div className="min-w-[450px] flex gap-4 bg-[#E8F4FD] p-4 rounded-lg">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#0082FF] rounded-full flex items-center justify-center">
                <Newspaper className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h4>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
            </div>
          </div>
          
          <div className="min-w-[450px] flex gap-4 bg-[#EBF9F4] p-4 rounded-lg">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#0FBA83] rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h4>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Analyst Estimates Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-lg text-gray-700 font-semibold">Analyst Estimates</h3>
          <Info className="w-4 h-4 text-gray-500" />
        </div>
        
        <div className="flex items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-[#EBF9F4] flex items-center justify-center">
            <span className="text-[#0FBA83] text-4xl font-semibold">76%</span>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-10 text-sm text-gray-500">Buy</span>
              <div className="flex-1 h-2 bg-[#00B386] rounded-full" />
              <span className="w-10 text-sm">76%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-10 text-sm text-gray-500">Hold</span>
              <div className="flex-1 h-2 bg-[#C7C8CE] rounded-full" style={{ width: '8%' }} />
              <span className="w-10 text-sm">8%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-10 text-sm text-gray-500">Sell</span>
              <div className="flex-1 h-2 bg-[#F7324C] rounded-full" style={{ width: '16%' }} />
              <span className="w-10 text-sm">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};