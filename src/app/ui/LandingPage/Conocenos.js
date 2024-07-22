import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export const Conocenos = () => {
  return (
    <section className="flex flex-col sm:flex-row min-h-screen min-w-full justify-center sm:justify-around items-center">
      <div className="mb-3 sm:mb-0 w-full sm:w-6/12">
        <div className="mb-3 px-3 sm:px-2 md:px-1">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 sm:mb-6 sm:text-start text-center">
            PsicoApoyo
          </h2>
          <p className="text-xl sm:text-2xl text-justify">
            En PsicoApoyo, te ayudamos a mejorar tu bienestar emocional y
            mental. Disfruta de un espacio seguro para superar el estrés, la
            ansiedad y otros desafíos. Logra una vida más equilibrada y plena
            con nuestro apoyo profesional.
          </p>
          <Link
            href="/agenda_cita"
            className="mt-3 font-semibold flex flex-row w-36"
            style={{ color: "#09005D" }}
          >
            Agenda una cita
            <FontAwesomeIcon icon={faArrowRight} width='12px' className="ms-2"/>
          </Link>
        </div>
        <div className="w-5/6 flex flex-col sm:flex-row justify-evenly m-auto"></div>
      </div>
      <div className="mt-4 sm:mt-0">
        <Image
          src="/img-conocenos.jpg"
          width={400}
          height={200}
          className="hidden sm:block"
          alt="Psicología"
        />
        <Image
          src="/img-conocenos.jpg"
          width={320}
          height={160}
          className="block sm:hidden"
          alt="Psicología"
        />
      </div>
    </section>
  );
};
