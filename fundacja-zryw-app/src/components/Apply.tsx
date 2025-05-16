import React from "react";

// Styles internal
const styles = {
  layout: {
    section: "container mx-auto px-4",
    sectionPadding: "py-20",
    sectionLargePadding: "py-32",
  },
  typography: {
    heroText:
      "font-['New_Order'] text-white text-[5.0625rem] md:text-[81px] font-bold leading-[1.1]",
    heading: "font-['New_Order'] text-4xl font-bold",
    subheading: "font-['New_Order'] text-2xl font-semibold",
    paragraph: "font-['Calluna'] text-xl",
  },
  containers: {
    imageContainer: "w-full h-full object-cover rounded-lg",
    gridTwoColumns:
      "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-16 md:gap-y-8",
    gridThreeColumns: "grid grid-cols-1 md:grid-cols-3 gap-16",
  },
};

// Reusable components
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = "" }) => (
  <button
    className={`bg-[var(--color-accent)] text-white font-['New_Order'] text-base px-6 py-2 rounded-full ${className}`}
  >
    {children}
  </button>
);

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
    <div className="w-full bg-[var(--color-background)] text-[var(--color-primary)]">
      {/* Hero Banner */}
      <section className="w-full flex flex-col items-center py-8 px-2">
        {/* mobil */}
        <div className="w-full max-w-[var(--width-main)] flex flex-col items-center md:hidden">
          <div className="w-full rounded-lg overflow-hidden aspect-video mb-6">
            <img
              src="./photos/apply-create.jpg"
              alt="Aplikuj na zryw"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-['New_Order'] text-[2rem] xs:text-3xl sm:text-4xl font-bold text-center leading-tight mb-6 text-[var(--color-primary)]">
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
            className={`${styles.layout.section} h-full flex flex-col justify-between py-20 relative z-10`}
          >
            <div className="flex flex-col items-start max-w-xl">
              <HeroText>Aplikuj na zryw</HeroText>
            </div>
            <div className="flex flex-col items-end gap-4">
              <HeroText>Twórz nową</HeroText>
              <div className="flex items-center gap-8">
                <HeroText>Polskę</HeroText>
                <Button>Aplikuj</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dołacz*/}
      <section className={styles.layout.sectionLargePadding}>
        <div className={styles.layout.section}>
          <SectionTitle className="text-center mb-12 md:mb-24">
            Dołącz do nas jeśli chcesz
          </SectionTitle>
          {/* MOBILE: below md */}
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
          {/* DESKTOP: from md */}
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
      <section className={styles.layout.sectionPadding}>
        <div className={styles.layout.section}>
          <SectionTitle className="mb-8 md:mb-16 text-center">
            Brzmi znajomo?
          </SectionTitle>
          {/* MOBILE: below md */}
          <div className="flex flex-col items-center md:hidden">
            <div className="w-full max-w-xs rounded-lg overflow-hidden mb-6">
              <img
                src="./photos/apply-sounds-familiar.jpg"
                alt="Grupa ludzi na skałach"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col items-center gap-4 w-full max-w-xs mb-4">
              {[
                "Masz 19–25 lat i studiujesz na polskiej uczelni",
                "Działasz lokalnie i wiesz, jak rozwiązywać realne problemy",
                "Chcesz poznać osoby z pierwszej linii polskiego życia publicznego",
                "Szukasz ekipy z całej Polski, która też chce czegoś więcej",
                "Frustruje Cię, jak wygląda dziś polskie życie publiczne i czujesz, że można inaczej",
                "Jesteś osobą empatyczną, zdeterminowaną i skuteczną",
                "Zależy Ci na bliskim kontakcie z czołowymi liderami publicznymi",
              ].map((text, index) => (
                <p
                  key={index}
                  className="text-center font-['Calluna'] text-base text-[var(--color-primary)]"
                >
                  {text}
                </p>
              ))}
            </div>
            <Button className="mt-2">Aplikuj</Button>
          </div>
          {/* DESKTOP: from md */}
          <div className="hidden md:grid grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4 aspect-square md:aspect-[4/5]">
              <img
                src="./photos/apply-sounds-familiar.jpg"
                alt="Grupa ludzi na skałach"
                className={styles.containers.imageContainer}
              />
            </div>
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-16 md:gap-y-8">
              {[
                "Masz 19–25 lat i studiujesz na polskiej uczelni",
                "Działasz lokalnie i wiesz, jak rozwiązywać realne problemy",
                "Chcesz poznać osoby z pierwszej linii polskiego życia publicznego",
                "Szukasz ekipy z całej Polski, która też chce czegoś więcej",
                "Frustruje Cię, jak wygląda dziś polskie życie publiczne i czujesz, że można inaczej",
                "Jesteś osobą empatyczną, zdeterminowaną i skuteczną",
                "Zależy Ci na bliskim kontakcie z czołowymi liderami publicznymi",
              ].map((text, index) => (
                <p key={index} className={styles.typography.paragraph}>
                  {text}
                </p>
              ))}
              <div>
                <Button>Aplikuj</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* */}
      <section className={`${styles.layout.section} pb-32`}>
        <div className="relative rounded-lg overflow-hidden aspect-[2/1]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('./photos/apply-to-zryw.jpg')" }}
          />

          <div className="relative z-10 h-full flex flex-col justify-between p-12 md:p-20">
            <SectionTitle className="text-white text-center">
              Aplikuj na zryw
            </SectionTitle>
            <div className="flex justify-center">
              <Button>Aplikuj</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
