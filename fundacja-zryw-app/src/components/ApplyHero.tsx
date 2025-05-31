import React from "react";
import Button from "./Button";
import Container from "./Container";

interface HeroTextProps {
  children: React.ReactNode;
  className?: string;
}

const HeroText: React.FC<HeroTextProps> = ({ children, className = "" }) => (
  <h2
    className={`font-new-order text-4xl xs:text-5xl font-bold leading-[1.1] ${className}`}
  >
    {children}
  </h2>
);

const ApplyHero: React.FC = () => {
  return (
    <Container>
      <section className="w-full flex flex-col items-center">
        {/* MOBILE: */}
        <div className="w-full overflow-hidden xs:hidden h-[360px]">
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
          <h1 className="font-new-order text-[54px] font-bold text-center mt-6 mb-4 text-[var(--color-primary)]">
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
              <HeroText className="text-[81px] leading-tight text-[var(--color-beige)]">
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
                <HeroText className="text-[81px] text-right leading-tight m-0 text-[var(--color-beige)]">
                  Twórz nową
                </HeroText>
                <div className="flex flex-row items-end w-full">
                  <HeroText className="text-[4rem] text-left leading-tight m-0 w-full text-[var(--color-beige)]">
                    Polskę
                  </HeroText>
                  <Button
                    style={{ backgroundColor: "var(--color-beige)" }}
                    className="!text-[var(--color-primary)] ml-2 px-4 py-1 text-base h-auto"
                  >
                    Aplikuj
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ApplyHero;
