import React from "react";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Newsletter from "./Newsletter";
import photoApply from "/photos/apply-create.jpg";
import Container from "./Container";
import Crew from "./Crew";

interface AboutInfoProps {
  color: string;
  title: string;
  text: string;
}

const AboutInfo: React.FC<AboutInfoProps> = ({ color, title, text }) => (
  <div className="flex-1 flex flex-col items-start">
    <h2
      className={`font-face font-bold mb-2 ${color} text-[2.75rem] leading-[1.1] xs:text-[2.75rem] xs:leading-[1.1]`}
      style={{ fontWeight: 700 }}
    >
      {title}
    </h2>
    <p className={`font-calluna text-base ${color}`}>{text}</p>
  </div>
);

interface AboutWhyProps {
  title: string;
  text: string;
  bgColor: string;
  textColor: string;
}

const AboutWhy: React.FC<AboutWhyProps> = ({
  title,
  text,
  bgColor,
  textColor,
}) => (
  <div
    className={`flex-1 flex flex-col items-center rounded-t-lg relative  ${bgColor} ${textColor}`}
  >
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-[var(--color-background)] rounded-b-full z-10" />
    <h3 className="font-new-order text-2xl font-bold pt-6">{title}</h3>
    <p className="font-calluna text-base px-6 py-4 text-center">{text}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <>
      <Container>
        {/* Sekcja 1*/}
        <section className="flex flex-col gap-5 mt-5 xs:grid xs:grid-cols-3 xs:grid-rows-1 xs:min-h-[420px]">
          <div className="self-start justify-self-start">
            <AboutInfo
              color="text-[var(--color-primary)]"
              title="zryw"
              text="lbuduje kadry państwowe zdolne do odpowiedzialnego działania na rzecz dobra wspólnego. Wierzymy, że demokracja wymaga nie tylko instytucji, ale przede wszystkim ludzi: kompetentnych, empatycznych i gotowych do działania."
            />
          </div>
          <div className="self-center justify-self-center">
            <AboutInfo
              color="text-[var(--color-accent)]"
              title="zryw"
              text="lwychodzi poza technokratyczne przygotowanie do służby, kształtuje liderów zdolnych do samodzielnego myślenia i konstruktywnej współpracy. Wyposażamy młodych w wiedzę, doświadczenie i relacje niezbędne do zaangażowania się w życie publiczne."
            />
          </div>
          <div className="self-end justify-self-end">
            <AboutInfo
              color="text-[var(--color-olive)]"
              title="zryw"
              text="to przestrzeń pierwszych kroków w życiu publicznym—dla młodych patriotów i państwowców, którzy chcą kształtować społeczeństwo w rytm wartości obywatelskich."
            />
          </div>
        </section>
        {/* Sekcja 2*/}
        <section className="w-full mt-10">
          <picture>
            <source
              srcSet="/photos/apply-sounds-familiar.jpg"
              media="(min-width: 600px)"
            />
            <img
              src="/photos/apply-sounds-familiar.jpg"
              alt="team"
              className="w-full h-1779px rounded-lg object-cover"
            />
          </picture>
        </section>
        {/* Sekcja 3*/}
        <section className="flex flex-col xs:flex-row gap-8 mt-10">
          <div className="flex flex-col items-start flex-1 h-[220px]">
            <AboutWhy
              title="Dlaczego"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque."
              bgColor="bg-[var(--color-primary)]"
              textColor="text-white"
            />
          </div>
          <div className="flex flex-col items-center flex-1 xs:mt-8 h-[220px]">
            <AboutWhy
              title="Jak"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque."
              bgColor="bg-[var(--color-accent)]"
              textColor="text-white"
            />
          </div>
          <div className="flex flex-col items-end flex-1 xs:mt-16 h-[220px]">
            <AboutWhy
              title="Co"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque."
              bgColor="bg-[var(--color-olive)]"
              textColor="text-[var(--color-primary)]"
            />
          </div>
        </section>
      </Container>
      <Crew />
      <Contact text="Aplikuj na zryw" src={photoApply} className="mt-42" />
      <Gallery />
      <Newsletter />
    </>
  );
};

export default About;
