import { TranslatableText } from "../common/TranslatableText";
import runningdog from "/assets/runningdog.gif";


export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <img
        src={runningdog}
        alt="Loading dog"
        className="w-24 h-24 mb-4 transition-transform duration-700 ease-in-out motion-reduce:transform-none hover:scale-105"
      />
      <p className="text-pink-500 font-bold text-lg">
        <TranslatableText text="Fetching cuteness..." />
      </p>
    </div>
  );
};
