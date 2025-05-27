import React from "react";
import Contact from "./Contact";
import applyToZryw from "/photos/apply-to-zryw.jpg";
import SoundsFamiliar from "./SoundsFamiliar";
import Button from "./Button";
import Faq from "./Faq";
import Container from "./Container";

// Styles internal
const styles = {
  layout: {
    section: "container mx-[10px] xs:mx-auto px-4",
    sectionPadding: "pt-20",
    sectionLargePadding: "pt-32",
  },
  typography: {
    heroText:
      "font-new-order text-white text-4xl xs:text-5xl font-bold leading-[1.1]",
    heading: "font-new-order text-4xl font-bold",
    subheading: "font-new-order text-2xl font-semibold",
    paragraph: "font-calluna text-xl",
  },
  containers: {
    imageContainer: "w-full h-full object-cover rounded-lg",
    gridTwoColumns:
      "grid grid-cols-1 xs:grid-cols-2 gap-6 xs:gap-x-16 xs:gap-y-8",
    gridThreeColumns: "grid grid-cols-1 xs:grid-cols-3 gap-16",
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
    <div className="text-[var(--color-primary)]">
      {/* Hero Banner */}
      <Container>
        <section className="w-full flex flex-col items-center ">
          {/* MOBILE: */}
          <div className="w-full overflow-hidden xs:hidden">
            <picture>
              <source
                srcSet="./photos/apply-create.jpg"
                media="(min-width: 395px)"
              />
              <img
                src="./photos/apply-create.jpg"
                alt="Aplikuj na zryw"
                className="w-full h-full object-cover"
              />
            </picture>
            <h1 className="font-new-order text-3xl font-bold text-center mt-6 mb-4 text-[var(--color-primary)]">
              Dołącz do
              <br />
              Zrywu i twórz
              <br />
              nową Polskę
            </h1>
            <Button className="block mx-auto mb-6 bg-[var(--color-accent)] text-white">
              Aplikuj
            </Button>
          </div>

          <div
            className="hidden xs:block w-full h-[600px] mb-8 bg-cover bg-center relative"
            style={{ backgroundImage: "url('./photos/apply-create.jpg')" }}
          >
            <div
              className="h-full w-full grid"
              style={{
                gridTemplateRows: "1fr 1fr 1fr 1fr",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
                gridTemplateAreas: `
                  "left left . . . ."
                  "left left . . . ."
                  ". . . . right right"
                  ". . . . right right"
                `,
                height: "100%",
                width: "100%",
              }}
            >
              <div
                className="flex flex-col items-start justify-start p-2 xs:p-4 max-w-[420px] gap-2"
                style={{ gridArea: "left" }}
              >
                <HeroText className="text-[4rem] leading-tight">
                  Aplikuj na
                  <br />
                  zryw
                </HeroText>
              </div>

              <div
                className="flex flex-col items-end justify-end p-2 xs:p-4 max-w-[520px] gap-2"
                style={{ gridArea: "right" }}
              >
                <div className="flex flex-col items-end">
                  <HeroText className="text-[4rem] text-right leading-tight m-0">
                    Twórz nową
                  </HeroText>
                  <div className="flex flex-row items-end w-full">
                    <HeroText className="text-[4rem] text-left leading-tight m-0 w-full">
                      Polskę
                    </HeroText>
                    <Button className="bg-white !text-[var(--color-primary)] ml-2 px-4 py-1 text-base h-auto">
                      Aplikuj
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>

      {/* Dołacz*/}
      <Container>
        <section className={styles.layout.sectionLargePadding}>
          <div>
            <SectionTitle className="text-center mb-12 xs:mb-24">
              Dołącz do nas jeśli chcesz
            </SectionTitle>
            {/* MOBILE:*/}
            <div className="flex flex-col items-center gap-8 xs:hidden">
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
            <div className="hidden xs:grid grid-cols-1 xs:grid-cols-3 gap-16">
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
      </Container>

      <SoundsFamiliar />

      <Faq />

      <section className="w-full grid grid-cols-10 mt-[120px]">
        <div className="hidden xs:block xs:col-span-1" />
        <div className="col-span-10 xs:col-span-8">
          <Contact
            src={applyToZryw}
            text="Aplikuj na zryw"
            buttonText="Aplikuj"
            aspect="aspect-[4/1]"
            className="w-full h-full mx-0"
          />
        </div>
        <div className="hidden xs:block xs:col-span-1" />
      </section>
      <div />
    </div>
  );
};

export default Apply;
