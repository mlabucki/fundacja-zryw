import React from "react";
import Contact from "./Contact";
import applyToZryw from "/photos/apply-to-zryw.jpg";
import SoundsFamiliar from "./SoundsFamiliar";
import Button from "./Button";

// Styles internal
const styles = {
  layout: {
    section: "container mx-[10px] md:mx-auto px-4",
    sectionPadding: "pt-20",
    sectionLargePadding: "pt-32",
  },
  typography: {
    heroText:
      "font-new-order text-white text-[5.0625rem] md:text-[81px] font-bold leading-[1.1]",
    heading: "font-new-order text-4xl font-bold",
    subheading: "font-new-order text-2xl font-semibold",
    paragraph: "font-calluna text-xl",
  },
  containers: {
    imageContainer: "w-full h-full object-cover rounded-lg",
    gridTwoColumns:
      "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-16 md:gap-y-8",
    gridThreeColumns: "grid grid-cols-1 md:grid-cols-3 gap-16",
  },
};

// Reusable components
interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = "",
}) => (
  <h2 className={`${styles.typography.heading} ${className}`}>{children}</h2>
);

interface HeroTextProps {
  children: React.ReactNode;
  className?: string;
}

const HeroText: React.FC<HeroTextProps> = ({ children, className = "" }) => (
  <h2 className={`${styles.typography.heroText} ${className}`}>{children}</h2>
);

const Apply: React.FC = () => {
  return (
    <div className="w-[var(--width-mobile)] md:w-[var(--width-main)] mx-auto bg-[var(--color-background)] text-[var(--color-primary)]">
      {/* Hero Banner */}
      <section className="w-full flex flex-col items-center ">
        {/* mobile */}
        <div className="w-full flex flex-col items-center md:hidden">
          <div className="w-full rounded-lg overflow-hidden aspect-[3/4]">
            <img
              src="./photos/apply-create.jpg"
              alt="Aplikuj na zryw"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-['New_Order'] text-xl xs:text-2xl sm:text-3xl font-bold text-center  mt-10 text-[var(--color-primary)]">
            Dołącz do
            <br />
            Zrywu i twórz
            <br />
            nową Polskę
          </h1>
          <Button className="mt-2">Aplikuj</Button>
        </div>
        {/* DESKTOP: from md (width-main) */}
        <div
          className="hidden md:block w-full h-[600px] mb-8 bg-cover bg-center relative"
          style={{ backgroundImage: "url('./photos/apply-create.jpg')" }}
        >
          <div
            className={`${styles.layout.section} h-full flex flex-col justify-between py-6 relative z-10`}
          >
            <div className="flex flex-col items-start max-w-xl">
              <HeroText className="text-[4rem]">Aplikuj na zryw</HeroText>
            </div>
            <div className="flex flex-col items-end gap-4">
              <div className="flex flex-col items-start gap-4">
                <HeroText className="text-[4rem] mr-4">Twórz nową</HeroText>
                <div className="flex flex-row items-center justify-between w-full">
                  <HeroText className="text-[4rem]">Polskę</HeroText>
                  <Button className="bg-white !text-[var(--color-primary)]">
                    Aplikuj
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dołacz*/}
      <section className={styles.layout.sectionLargePadding}>
        <div>
          <SectionTitle className="text-center mb-12 md:mb-24">
            Dołącz do nas jeśli chcesz
          </SectionTitle>
          {/* MOBILE:*/}
          <div className="flex flex-col items-center gap-8 md:hidden">
            {[
              {
                title: "Poznać politykę od kuchni",
                description:
                  "Zobacz jak to jest pracować w polityce i zdobądź cenne doświadczenie",
              },
              {
                title: "Mieć wsparcie osób z doświadczeniem",
                description:
                  "Nasi mentorzy pomogą Ci rozwinąć skrzydła i zdobyć nowe umiejętności",
              },
              {
                title: "Dołączyć do społeczności pełnej pasji",
                description:
                  "Poznaj ludzi, którzy tak jak Ty chcą zmieniać Polskę na lepsze",
              },
            ].map((item, index) => (
              <div key={index} className="w-full max-w-xs text-center">
                <h3 className={`${styles.typography.subheading} mb-4`}>
                  {item.title}
                </h3>
                <p className={`${styles.typography.paragraph} opacity-80`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          {/* DESKTOP:*/}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Poznać politykę od kuchni",
                description:
                  "Zobacz jak to jest pracować w polityce i zdobądź cenne doświadczenie",
              },
              {
                title: "Mieć wsparcie osób z doświadczeniem",
                description:
                  "Nasi mentorzy pomogą Ci rozwinąć skrzydła i zdobyć nowe umiejętności",
              },
              {
                title: "Dołączyć do społeczności pełnej pasji",
                description:
                  "Poznaj ludzi, którzy tak jak Ty chcą zmieniać Polskę na lepsze",
              },
            ].map((item, index) => (
              <div key={index}>
                <h3 className={`${styles.typography.subheading} mb-4`}>
                  {item.title}
                </h3>
                <p className={`${styles.typography.paragraph} opacity-80`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sounds Familiar Section */}
      <SoundsFamiliar />

      {/* */}
      <section className="w-full grid grid-cols-10 mt-[120px]">
        <div className="hidden md:block md:col-span-1" />
        <div className="col-span-8">
          <Contact
            src={applyToZryw}
            text="Aplikuj na zryw"
            buttonText="Aplikuj"
            aspect="aspect-[4/1]"
            className="w-full h-full mx-0"
          />
        </div>
        <div className="hidden md:block md:col-span-1" />
      </section>
    </div>
  );
};

export default Apply;
