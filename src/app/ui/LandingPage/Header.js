import Image from "next/image";
import { Btn } from "./Btn";

export const Header = () => {
  return (
    <header
      className="flex flex-col sm:flex-row min-h-screen min-w-full justify-center sm:justify-around items-center pb-32"
      style={{
        backgroundImage: "url(/bg-header.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mb-1 sm:mb-0 mt-5">
        <div className="text-center mb-1 md:mb-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 sm:mb-6">
            PsicoApoyo
          </h1>
          <p className="text-xl sm:text-3xl">
            Cuidamos tu mente, transformamos tu vida.
          </p>
        </div>
        <div className="w-5/6 flex flex-col sm:flex-row justify-evenly m-auto">
          <Btn
            text={"Más información"}
            bgColor={"#4F52FF"}
            textColor={"#ffff"}
          />
          <Btn
            text={"Agenda una cita"}
            bgColor={"#FE786C"}
            textColor={"#000000"}
          />
        </div>
      </div>
      <div>
        <Image
          src="/img-header.svg"
          width={400}
          height={200}
          className="hidden sm:block"
        />
        <Image
          src="/img-header.svg"
          width={320}
          height={160}
          className="block sm:hidden"
        />
      </div>
    </header>
  );
};
