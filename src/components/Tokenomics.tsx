import { Info } from "lucide-react";

export const Tokenomics = () => {
  return (
    <div className="bg-white rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-6">Tokenomics</h2>
      <h3 className="text-lg font-semibold mb-4">Initial Distribution</h3>

      <div className="flex items-center gap-8 mb-8">
        {/* Donut chart */}
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-36 h-36 rounded-full border-[16px] border-primary"
              style={{
                borderRightColor: '#FFA500',
                transform: 'rotate(-90deg)',
              }}
            />
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-sm text-gray-600">Crowdsale investors: 80%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FFA500]" />
            <span className="text-sm text-gray-600">Foundation: 20%</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 leading-7">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc
        dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus
        orci augue fusce eleifend lectus eu. Fusce adipiscing. Volutpat ultrices nisi sodales massa
        habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam commodo. Eget justo dui metus odio rutrum. Vel ipsum eget et cursus sem posuere
        facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu
        ac risus.
      </p>
    </div>
  );
};
