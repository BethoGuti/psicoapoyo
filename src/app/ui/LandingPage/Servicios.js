import EmblaCarousel from "./Carousel/EmblaCarousel";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const Servicios = () => {
  return (
    <section className="w-screen h-screen max-w-full">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-center mt-24 sm:mt-24 mb-7">
        Servicios que ofrece PsicoApoyo
      </h2>
      <div className="mt-34 sm:mt-10 md:mt-20 lg:mt-10">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  );
};
