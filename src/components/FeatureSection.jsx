import { features } from "../constants";
const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[600px] ">
      <div className="text-center">
        <span className="bg-neutral-800 text-purple-400 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-15 tracking-wide">
          <span className="bg-gradient-to-r from-violet-400 to-violet-700 text-transparent bg-clip-text">
            Purr-fection
          </span>{" "}
          in Every Keystroke
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex mx-7">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-pink-400 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div className="flex flex-col">
                <h5 className="mt-1 mb-2 lg:mb-4 text-xl">{feature.text}</h5>
                <p className="mb-11 text-neutral-300 text-xs lg:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
