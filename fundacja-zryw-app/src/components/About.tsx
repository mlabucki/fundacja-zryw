import React from "react";

interface AboutInfoProps {
  color: string;
  title: string;
  text: string;
}

const AboutInfo: React.FC<AboutInfoProps> = ({ color, title, text }) => (
  <div className="flex-1 flex flex-col items-start">
    <h2 className={`font-new-order text-4xl font-bold mb-2 ${color}`}>
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
    className={`flex-1 flex flex-col items-center rounded-t-lg relative mb-8 xs:mb-0 ${bgColor} ${textColor}`}
  >
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-[var(--color-background)] rounded-b-full z-10" />
    <h3 className="font-new-order text-2xl font-bold pt-6">{title}</h3>
    <p className="font-calluna text-base px-6 py-4 text-center">{text}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="w-mobile xs:w-main mx-4 xs:mx-auto mt-12 mb-20">
      {/* Sekcja 1*/}
      <section className="flex flex-col xs:flex-row gap-8 mb-12">
        <div className="flex flex-col items-start flex-1 h-auto xs:h-[220px]">
          <AboutInfo
            color="text-[var(--color-primary)]"
            title="zryw"
            text="lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
          />
        </div>
        <div className="flex flex-col items-center flex-1 mt-0 xs:mt-8 h-auto xs:h-[180px]">
          <AboutInfo
            color="text-[var(--color-accent)]"
            title="zryw"
            text="lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
          />
        </div>
        <div className="flex flex-col items-end flex-1 mt-0 xs:mt-16 h-auto xs:h-[140px]">
          <AboutInfo
            color="text-[var(--color-olive)]"
            title="zryw"
            text="lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
          />
        </div>
      </section>
      {/* Sekcja 2*/}
      <section className="w-full mb-12">
        <picture>
          <source srcSet="/photos/team.jpg" media="(min-width: 600px)" />
          <img
            src="/photos/team.jpg"
            alt="team"
            className="w-full h-auto rounded-lg object-cover"
          />
        </picture>
      </section>
      {/* Sekcja 3*/}
      <section className="flex flex-col xs:flex-row gap-8">
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
    </div>
  );
};

export default About;
