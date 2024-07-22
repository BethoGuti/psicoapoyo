"use client";
import React, { useCallback } from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons.js";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import style from "./embla.module.css";

const slides = [
  {
    nombre: "Terapia individual",
    info: [
      "Tratamiento para ansiedad",
      "Tratamiento para depresión",
      "Manejo del estrés",
    ],
    img: "/individual.jpg",
    alt: "tratamiento individual"
  },
  {
    nombre: "Terapia en parejas",
    info: [
      "Resolución de conflictos",
      "Mejora de la comunicación",
      "Reconciliación y fortalecimientos de relaciones",
    ],
    img: "/pareja.jpg",
    alt: "tratamiento en parejas"
  },
  {
    nombre: "Terapia de grupo",
    info: [
      "Dinámica y cohesión familiar",
      "Manejo de conflictos",
      "Apoyo en transiciones familiares",
    ],
    img: "/grupo.jpeg",
    alt: "tratamiento en grupo"
  },
  {
    nombre: 'Psicología Infantil',
    info: [
        'Apoyo en el desarrollo emocional',
        'Asesoramiento para padres',
        'Tratamiento para problemas de conducta'
    ],
    img: '/infantil.jpg',
    alt: "tratamiento infantil"
  }
];

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className={`${style.embla}`}>
      <div className={`${style.embla__viewport}`} ref={emblaRef}>
        <div className={`${style.embla__container}`}>
          {slides.map((slide, index) => (
            <div
              className={`${style.embla__slide}`}
              key={index}
            >
              <div className={`${style.embla__slide__number} flex flex-col w-full px-4 justify-start`}>
                <img src={slide.img} alt={slide.nombre} className="w-64 h-44"/>
                <h3 className="text-xl">{slide.nombre}</h3>
                <ul className="list-disc min-w-full px-2">
                  {slide.info.map((informacion, index) => (
                    <li className="text-lg font-normal mx-3" key={index}>{informacion}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${style.embla__controls}`}>
        <div className={`${style.embla__buttons}`}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
