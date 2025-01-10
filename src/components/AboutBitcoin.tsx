import { ArrowRight } from "lucide-react";

export const AboutBitcoin = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">About Bitcoin</h2>
      
      <div className="space-y-5">
        <div>
          <h3 className="font-semibold mb-2.5">What is Bitcoin?</h3>
          <p className="text-gray-700 leading-7">
            Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2.5">Lorem ipsum dolor sit amet</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-7">
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
            </p>
            <p className="text-gray-700 leading-7">
              Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
            </p>
            <p className="text-gray-700 leading-7">
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultricies tincidunt volutpat in eget. Ullamcorper dui
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Already Holding Bitcoin?</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] p-4 rounded-lg flex items-center gap-6">
              <img src="/lovable-uploads/d84c221f-f5ca-4aa7-abf9-ba95e1605cae.png" alt="Calculate Profits" className="w-32 h-24 object-cover rounded" />
              <div className="flex-1">
                <h4 className="text-white font-semibold mb-2">Calculate your Profits</h4>
                <button className="bg-white text-black px-4 py-1.5 rounded-lg text-sm font-medium inline-flex items-center gap-2">
                  Check Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#FF9865] to-[#EF3031] p-4 rounded-lg flex items-center gap-6">
              <img src="/lovable-uploads/d84c221f-f5ca-4aa7-abf9-ba95e1605cae.png" alt="Calculate Tax Liability" className="w-32 h-24 object-cover rounded" />
              <div className="flex-1">
                <h4 className="text-white font-semibold mb-2">Calculate your tax liability</h4>
                <button className="bg-white text-black px-4 py-1.5 rounded-lg text-sm font-medium inline-flex items-center gap-2">
                  Check Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 leading-7 mt-4">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultricies tincidunt volutpat in eget. Ullamcorper dui
          </p>
        </div>
      </div>
    </div>
  );
};