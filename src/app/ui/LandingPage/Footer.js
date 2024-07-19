import { Icons } from "./Footer/Icons.js";
import { Line } from "./Footer/Line.js";

export const Footer = () => {
  return (
    <footer
      className="bg-[#4F52FF] w-full h-72 flex flex-col justify-center items-center"
      id="footer"
    >
      <div className="w-full flex flex-row gap-6 px-1 sm:px-2 md:px-7 align-center content-center items-center">
        <Line />
        <Icons />
        <Line />
      </div>
      <div className="mt-6">
        <h3 className="text-gray-light text-2xl font-semibold">PsicoApoyo</h3>
      </div>
    </footer>
  );
};
